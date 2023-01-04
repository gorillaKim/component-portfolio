import React, {CSSProperties, FC} from "react"
import {Column, flexRender, Header, Table} from "@tanstack/react-table"
import {useDrag, useDrop} from "react-dnd"
import {reorderColumn} from "./util"
import styles from "./DraggableColumnHeader.module.sass"
import classNames from "classnames"

export interface DraggableColumnHeaderProps<T> {
  header: Header<T, unknown>
  table: Table<T>
  isFixed?: boolean
}

const DraggableColumnHeader: FC<DraggableColumnHeaderProps<any>> = ({
  header,
  table,
  isFixed = false
}) => {
  const {getState, setColumnOrder} = table
  const {columnOrder} = getState()
  const {column} = header

  const [{isOver}, dropRef] = useDrop({
    accept: "column",
    drop: (draggedColumn: Column<any>) => {
      if (isFixed) {
        return
      }
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

  const tableHeaderStyle: CSSProperties = {
    position: "relative",
    width: header.getSize(),
    opacity: isDragging && !isFixed ? 0.5 : 1,
    cursor: isDragging && !isFixed ? "copy" : "auto"
  }

  const columnHeaderStyle: CSSProperties = {
    borderColor: isOver ? "darkgray" : "transparent",
    fontWeight: isOver ? 900 : "initial"
  }

  return (
    <th ref={dropRef} colSpan={header.colSpan} style={tableHeaderStyle}>
      <div className={styles.ColumnHeader}>
        <div ref={dragRef} className={styles.Preview} style={columnHeaderStyle}>
          <div ref={previewRef} className={styles.Title}>
            <div>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </div>
          </div>
        </div>
        {header.column.getCanResize() && (
          <div
            className={classNames(styles.resizerContainer, {
              [styles.isResizing]: header.column.getIsResizing()
            })}
          >
            <div
              onMouseDown={header.getResizeHandler()}
              onTouchStart={header.getResizeHandler()}
              className={classNames(styles.resizer)}
            />
          </div>
        )}
      </div>
    </th>
  )
}

export default DraggableColumnHeader
