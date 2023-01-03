import React, {CSSProperties, FC} from "react"
import {Column, flexRender, Header, Table} from "@tanstack/react-table"
import {useDrag, useDrop} from "react-dnd"
import {reorderColumn} from "./util"
import styles from "./DraggableColumnHeader.module.sass"

export interface DraggableColumnHeaderProps<T> {
  header: Header<T, unknown>
  table: Table<T>
}

const DraggableColumnHeader: FC<DraggableColumnHeaderProps<any>> = ({
  header,
  table
}) => {
  const {getState, setColumnOrder} = table
  const {columnOrder} = getState()
  const {column} = header

  const [{isOver}, dropRef] = useDrop({
    accept: "column",
    drop: (draggedColumn: Column<any>) => {
      const newColumnOrder = reorderColumn(
        draggedColumn.id,
        column.id,
        columnOrder
      )
      setColumnOrder(newColumnOrder)
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  })

  const [{isDragging}, dragRef, previewRef] = useDrag({
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    item: () => column,
    type: "column"
  })

  const draggingEmoji = isDragging ? "➖" : ""
  const overEmoji = isOver ? "➕" : draggingEmoji

  const tableHeaderStyle: CSSProperties = {
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "copy" : "auto"
  }

  const columnHeaderStyle: CSSProperties = {
    border: isOver ? "1px solid gray" : "initial",
    fontWeight: isOver ? 900 : "initial"
  }

  return (
    <th ref={dropRef} colSpan={header.colSpan} style={tableHeaderStyle}>
      <div ref={dragRef} className={styles.ColumnHeader}>
        <div className={styles.PreviewWrapper}>
          <div
            ref={previewRef}
            className={styles.Preview}
            style={columnHeaderStyle}
          >
            <div className={styles.Title}>
              <div>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </div>
              <div className={styles.Emoji}>{overEmoji}</div>
            </div>
          </div>
        </div>
      </div>
    </th>
  )
}

export default DraggableColumnHeader
