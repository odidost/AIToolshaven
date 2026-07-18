"use client";

import { useState, useTransition } from "react";
import { type NotFoundLogRecord } from "@/lib/validations/redirects";
import { resolveNotFoundLog, deleteNotFoundLog, saveRedirect } from "@/lib/actions/redirects";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export function NotFoundClient({ initialLogs }: { initialLogs: NotFoundLogRecord[] }) {
  const [logs, setLogs] = useState(initialLogs);
  const [isPending, startTransition] = useTransition();

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<NotFoundLogRecord | null>(null);
  
  // Form state
  const [newPath, setNewPath] = useState("");
  const [statusCode, setStatusCode] = useState("301");

  const handleOpenRedirectForm = (log: NotFoundLogRecord) => {
    setSelectedLog(log);
    setNewPath("");
    setStatusCode("301");
    setIsDialogOpen(true);
  };

  const handleCreateRedirect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLog) return;

    startTransition(async () => {
      // 1. Create redirect
      const redirectResult = await saveRedirect({
        old_path: selectedLog.requested_path,
        new_path: newPath,
        status_code: parseInt(statusCode),
        active: true,
      });

      if (!redirectResult.success) {
        toast.error(redirectResult.error);
        return;
      }

      // 2. Mark as resolved
      const resolveResult = await resolveNotFoundLog(selectedLog.id);
      if (resolveResult.success) {
        toast.success("Redirect created and 404 marked as resolved");
        setIsDialogOpen(false);
        setLogs(prev => prev.map(l => l.id === selectedLog.id ? { ...l, resolved: true } : l));
      } else {
        toast.error("Redirect created, but failed to mark log as resolved");
      }
    });
  };

  const handleResolve = async (id: string) => {
    startTransition(async () => {
      const result = await resolveNotFoundLog(id);
      if (result.success) {
        toast.success("Marked as resolved (ignored)");
        setLogs(prev => prev.map(l => l.id === id ? { ...l, resolved: true } : l));
      } else {
        toast.error(result.error);
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this log?")) return;
    
    startTransition(async () => {
      const result = await deleteNotFoundLog(id);
      if (result.success) {
        toast.success("Log deleted");
        setLogs(prev => prev.filter(l => l.id !== id));
      } else {
        toast.error(result.error);
      }
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Dialog for Creating Redirect */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Redirect for 404</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateRedirect} className="space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Missing URL (Old)</label>
              <Input value={selectedLog?.requested_path || ""} disabled />
              <p className="text-xs text-slate-500">This is the path visitors tried to access.</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Redirect To (New URL)</label>
              <Input 
                placeholder="/tools/new-path" 
                value={newPath} 
                onChange={e => setNewPath(e.target.value)} 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Redirect Type</label>
              <Select value={statusCode} onValueChange={setStatusCode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="301">301 (Permanent)</SelectItem>
                  <SelectItem value="302">302 (Temporary)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Saving..." : "Create Redirect"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {logs.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
            <p>No 404 errors logged yet.</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Missing URL</TableHead>
                <TableHead>Hits</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map(log => (
                <TableRow key={log.id} className={log.resolved ? "opacity-60" : ""}>
                  <TableCell className="font-mono text-sm max-w-[200px] truncate" title={log.requested_path}>
                    {log.requested_path}
                  </TableCell>
                  <TableCell>
                    <Badge variant={log.hit_count > 10 ? "destructive" : "secondary"}>
                      {log.hit_count} hits
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm">
                    {formatDate(log.last_seen)}
                  </TableCell>
                  <TableCell>
                    {log.resolved ? (
                      <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-200">Resolved</Badge>
                    ) : (
                      <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200">Unresolved</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {!log.resolved && (
                        <>
                          <Button variant="outline" size="sm" onClick={() => handleOpenRedirectForm(log)}>
                            Fix via Redirect
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleResolve(log.id)}>
                            Ignore
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(log.id)}>
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
