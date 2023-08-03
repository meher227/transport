"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "../data/data";
import { Vehicle } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Vehicle>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "user_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Type" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("user_type")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "role_description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role Description" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("role_description")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "created_by",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("created_by")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "created_on",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created On" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("created_on")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
