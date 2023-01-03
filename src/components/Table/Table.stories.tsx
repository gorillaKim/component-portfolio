import React from "react"
import DraggableTable from "./DraggableTable"
import {MOCK_DATA} from "./DraggableColumnHeader/util"
import {ColumnDef} from "@tanstack/react-table"

export default {
  component: DraggableTable,
  parameters: {componentSubtitle: "Table 컴포넌트"},
  title: "Table"
}

export const Draggable = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "firstName",
      id: "firstName",
      header: "First Name",
      cell: info => info.getValue(),
      footer: props => props.column.id
    },
    {
      accessorFn: row => row.lastName,
      id: "lastName",
      cell: info => info.getValue(),
      header: "Last Name",
      footer: props => props.column.id
    },
    {
      accessorKey: "age",
      id: "age",
      header: "Age",
      footer: props => props.column.id
    },

    {
      accessorKey: "visits",
      id: "visits",
      header: "Visits",
      footer: props => props.column.id
    },
    {
      accessorKey: "status",
      id: "status",
      header: "Status",
      footer: props => props.column.id
    },
    {
      accessorKey: "progress",
      id: "progress",
      header: "Profile Progress",
      footer: props => props.column.id
    }
  ]
  return <DraggableTable data={MOCK_DATA} columns={columns} useResetOrder />
}
