"use client";

import { useState, useTransition } from "react";
import { type RedirectRecord } from "@/lib/validations/redirects";
import { saveRedirect, deleteRedirect, toggleRedirectActive } from "@/lib/actions/redirects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export function RedirectsClient({ initialRedirects }: { initialRedirects: RedirectRecord[] }) {
  const [redirects, setRedirects] = useState(initialRedirects);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [oldPath, setOldPath] = useState("");
  const [newPath, setNewPath] = useState("");
  const [statusCode, setStatusCode] = useState("301");

  const filteredRedirects = redirects.filter(r => 
    r.old_path.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.new_path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenForm = (redirect?: RedirectRecord) => {
    if (redirect) {
      setEditingId(redirect.id);
      setOldPath(redirect.old_path);
      setNewPath(redirect.new_path);
      setStatusCode(redirect.status_code.toString());
    } else {
      setEditingId(null);
      setOldPath("");
      setNewPath("");
      setStatusCode("301");
    }
    setIsDialogOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await saveRedirect({
        id: editingId || undefined,
        old_path: oldPath,
        new_path: newPath,
        status_code: parseInt(statusCode),
        active: true,
      });

      if (result.success) {
        toast.success(editingId ? "Redirect updated" : "Redirect created");
        setIsDialogOpen(false);
        // We're mutating local state to avoid needing a full refresh, but the server action already revalidated
        // Ideally we fetch again or just let the page refresh. Let's do a soft reload by window.location.reload() or just updating state.
        window.location.reload(); 
      } else {
        toast.error(result.error);
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this redirect?")) return;
    
    startTransition(async () => {
      const result = await deleteRedirect(id);
      if (result.success) {
        toast.success("Redirect deleted");
        setRedirects(prev => prev.filter(r => r.id !== id));
      } else {
        toast.error(result.error);
      }
    });
  };

  const handleToggle = async (id: string, currentStatus: boolean) => {
    startTransition(async () => {
      const result = await toggleRedirectActive(id, !currentStatus);
      if (result.success) {
        toast.success("Status updated");
        setRedirects(prev => prev.map(r => r.id === id ? { ...r, active: !currentStatus } : r));
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative max-w-sm flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <Input 
            placeholder="Search paths..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenForm()} className="gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Redirect
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Redirect" : "Create Redirect"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Old URL</label>
                <Input 
                  placeholder="/old-path" 
                  value={oldPath} 
                  onChange={e => setOldPath(e.target.value)} 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New URL</label>
                <Input 
                  placeholder="/new-path" 
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
                {isPending ? "Saving..." : "Save Redirect"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {filteredRedirects.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">route</span>
            <p>No redirects found.</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Old Path</TableHead>
                <TableHead>New Path</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRedirects.map(redirect => (
                <TableRow key={redirect.id}>
                  <TableCell className="font-mono text-sm">{redirect.old_path}</TableCell>
                  <TableCell className="font-mono text-sm text-slate-500">{redirect.new_path}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{redirect.status_code}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={redirect.active ? "default" : "secondary"}>
                      {redirect.active ? "Active" : "Disabled"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleToggle(redirect.id, redirect.active)}>
                        {redirect.active ? "Disable" : "Enable"}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleOpenForm(redirect)}>
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(redirect.id)}>
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
