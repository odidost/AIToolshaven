"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, Pencil, Copy, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { duplicateWorkflow } from "@/lib/actions/workflows";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type WorkflowRow = {
  id: string;
  title: string;
  slug: string;
  status: string;
  updated_at: string;
};

export const columns: ColumnDef<WorkflowRow>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const slug = row.getValue("slug") as string;
      return (
        <div className="font-medium text-slate-900">
          <Link href={`/admin/cms/workflows/${slug}`} className="hover:underline">
            {row.getValue("title")}
          </Link>
          <div className="text-xs text-slate-500 font-normal mt-0.5">/{slug}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "Published" ? "default" : status === "Draft" ? "secondary" : "outline"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "updated_at",
    header: "Last Updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updated_at"));
      return <div className="text-sm text-slate-500">{date.toLocaleDateString()}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const workflow = row.original;
      const router = useRouter();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            
            <DropdownMenuItem asChild>
              <Link href={`/admin/cms/workflows/${workflow.slug}`} className="flex items-center cursor-pointer">
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <a href={`/workflows/${workflow.slug}`} target="_blank" rel="noreferrer" className="flex items-center cursor-pointer">
                <Globe className="mr-2 h-4 w-4" /> View Live
              </a>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            
            <DropdownMenuItem 
              className="cursor-pointer"
              onClick={async () => {
                toast.loading("Duplicating...");
                const res = await duplicateWorkflow(workflow.slug);
                toast.dismiss();
                if (res.success) {
                  toast.success("Duplicated successfully");
                } else {
                  toast.error(res.error || "Failed to duplicate");
                }
              }}
            >
              <Copy className="mr-2 h-4 w-4" /> Duplicate
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
