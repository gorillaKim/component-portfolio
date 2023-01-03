import {ColumnOrderState} from "@tanstack/react-table"

export const reorderColumn = (
  draggedColumnId: string,
  targetColumnId: string,
  columnOrder: string[]
): ColumnOrderState => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
  )
  return [...columnOrder]
}

export const MOCK_DATA = [
  {
    firstName: "test1",
    lastName: "test2",
    age: 100,
    visits: 100,
    progress: 100,
    status: "relationship"
  },
  {
    firstName: "test1",
    lastName: "test2",
    age: 100,
    visits: 100,
    progress: 100,
    status: "relationship"
  },
  {
    firstName: "test1",
    lastName: "test2",
    age: 100,
    visits: 100,
    progress: 100,
    status: "relationship"
  },
  {
    firstName: "test1",
    lastName: "test2",
    age: 100,
    visits: 100,
    progress: 100,
    status: "relationship"
  },
  {
    firstName: "test1",
    lastName: "test2",
    age: 100,
    visits: 100,
    progress: 100,
    status: "relationship"
  },
  {
    firstName: "test1",
    lastName: "test2",
    age: 100,
    visits: 100,
    progress: 100,
    status: "relationship"
  }
]
