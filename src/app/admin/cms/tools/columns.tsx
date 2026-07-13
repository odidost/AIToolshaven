"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, Pencil, Copy, Archive, Globe } from "lucide-react";
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

export type ToolColumn = {
  id: string;
  name: string;
  slug: string;
  category: string;
  status: string;
  priceModel: string;
  updatedAt: string;
};

export const columns: ColumnDef<ToolColumn>[] = [
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const tool = row.original;
      return (
        <div className="flex flex-col">
          <Link href={`/admin/cms/tools/${tool.slug}`} className="font-medium text-blue-600 hover:underline">
            {tool.name}
          </Link>
          <span className="text-xs text-slate-500 font-mono">{tool.slug}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <span className="text-sm text-slate-600">{row.getValue("category")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colors: Record<string, string> = {
        Draft: "bg-slate-100 text-slate-700",
        "In Review": "bg-yellow-100 text-yellow-800",
        Published: "bg-emerald-100 text-emerald-800",
        Unpublished: "bg-orange-100 text-orange-800",
        Archived: "bg-red-100 text-red-800",
      };
      return (
        <Badge className={`${colors[status] || "bg-slate-100"} border-none`} variant="outline">
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "priceModel",
    header: "Pricing",
    cell: ({ row }) => <span className="text-sm">{row.getValue("priceModel")}</span>,
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return <span className="text-sm text-slate-500">{date.toLocaleDateString()}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const tool = row.original;
 
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
              <Link href={`/admin/cms/tools/${tool.slug}`}>
                <Pencil className="mr-2 h-4 w-4" /> Edit Tool
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-4 w-4" /> Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/tool/${tool.slug}`} target="_blank">
                <Globe className="mr-2 h-4 w-4" /> View Public Page
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
              <Archive className="mr-2 h-4 w-4" /> Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
