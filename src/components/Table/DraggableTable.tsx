import React, {FC, ReactNode, useState} from "react"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import {
  ColumnDef,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table"
import DraggableColumnHeader from "./DraggableColumnHeader/DraggableColumnHeader"
import styles from "./DraggableTable.module.sass"

export type DraggableTableProps<T> = {
  data: Array<T>
  columns: Array<ColumnDef<T>>
  headers?: ReactNode[]
  useResetOrder?: boolean
}

const DraggableTable: FC<DraggableTableProps<any>> = ({
  data,
  columns,
  headers,
  useResetOrder = false
}) => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns.map(column => column.id as string) // must start out with populated columnOrder so we can splice
  )

  const resetOrder = () =>
    setColumnOrder(columns.map(column => column.id as string))

  const table = useReactTable({
    data,
    columns,
    state: {
      columnOrder
    },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  })

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.DraggableTableContainer}>
        {headers ||
          (useResetOrder && (
            <div className={styles.OptionalHeader}>
              <div className={styles.Buttons}>{headers}</div>
              <div className={styles.Buttons}>
                {useResetOrder && (
                  <button onClick={() => resetOrder()} className="border p-1">
                    Reset Order
                  </button>
                )}
              </div>
            </div>
          ))}
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <DraggableColumnHeader
                    key={header.id}
                    header={header}
                    table={table}
                  />
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </DndProvider>
  )
}

export default DraggableTable
