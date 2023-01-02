import {CSSProperties} from "react"

export enum Direction {
  Top = "top",
  TopLeft = "topLeft",
  TopRight = "topRight",
  RightTop = "rightTop",
  Right = "right",
  RightBottom = "rightBottom",
  BottomRight = "bottomRight",
  Bottom = "bottom",
  BottomLeft = "bottomLeft",
  LeftBottom = "leftBottom",
  Left = "left",
  LeftTop = "leftTop"
}

export const calcPosition: {
  [key in Direction]: (width: number, height: number) => CSSProperties
} = {
  [Direction.Top]: (width: number, height: number): CSSProperties => ({
    top: "calc(-100% - 20px)",
    left: `calc(50% - ${width / 2}px)`,
    right: "unset",
    bottom: "unset"
  }),
  [Direction.TopLeft]: (width: number, height: number): CSSProperties => ({
    top: "calc(-100% - 20px)",
    left: `${-width / 2}px`,
    right: "unset",
    bottom: "unset"
  }),
  [Direction.TopRight]: (width: number, height: number): CSSProperties => ({
    top: "calc(-100% - 20px)",
    left: "unset",
    right: `${-width / 2}px`,
    bottom: "unset"
  }),
  [Direction.Left]: (width: number, height: number): CSSProperties => ({
    top: `calc(50% - ${height / 2}px)`,
    left: `calc(${-width}px - 12px)`,
    right: "unset",
    bottom: "unset"
  }),
  [Direction.LeftTop]: (width: number, height: number): CSSProperties => ({
    top: "-50%",
    left: `calc(${-width}px - 12px)`,
    right: "unset",
    bottom: "unset"
  }),
  [Direction.LeftBottom]: (width: number, height: number): CSSProperties => ({
    top: "unset",
    left: `calc(${-width}px - 12px)`,
    right: "unset",
    bottom: "-50%"
  }),
  [Direction.Bottom]: (width: number, height: number): CSSProperties => ({
    top: "unset",
    left: `calc(50% - ${width / 2}px)`,
    right: "unset",
    bottom: "calc(-100% - 20px)"
  }),
  [Direction.BottomLeft]: (width: number, height: number): CSSProperties => ({
    top: "unset",
    left: `${-width / 2}px`,
    right: "unset",
    bottom: "calc(-100% - 20px)"
  }),
  [Direction.BottomRight]: (width: number, height: number): CSSProperties => ({
    top: "unset",
    left: "unset",
    right: `${-width / 2}px`,
    bottom: "calc(-100% - 20px)"
  }),
  [Direction.Right]: (width: number, height: number): CSSProperties => ({
    top: `calc(50% - ${height / 2}px)`,
    left: "unset",
    right: `calc(${-width}px - 12px)`,
    bottom: "unset"
  }),
  [Direction.RightTop]: (width: number, height: number): CSSProperties => ({
    top: "-50%",
    left: "unset",
    right: `calc(${-width}px - 12px)`,
    bottom: "unset"
  }),
  [Direction.RightBottom]: (width: number, height: number): CSSProperties => ({
    top: "unset",
    left: "unset",
    right: `calc(${-width}px - 12px)`,
    bottom: "-50%"
  })
}

export const getSimpleDirection = (
  direction: Direction
): {
  simpleDirection:
    | Direction.Top
    | Direction.Right
    | Direction.Left
    | Direction.Bottom
  target: "width" | "height"
} => {
  if (
    [Direction.Top, Direction.TopLeft, Direction.TopRight].includes(direction)
  ) {
    return {simpleDirection: Direction.Top, target: "height"}
  }
  if (
    [Direction.Right, Direction.RightTop, Direction.RightBottom].includes(
      direction
    )
  ) {
    return {simpleDirection: Direction.Right, target: "width"}
  }
  if (
    [Direction.Left, Direction.LeftTop, Direction.LeftBottom].includes(
      direction
    )
  ) {
    return {simpleDirection: Direction.Left, target: "width"}
  }
  return {simpleDirection: Direction.Bottom, target: "height"}
}

export const getResponseDirection = (
  isEnableDirection: boolean,
  direction: Direction
): Direction => {
  if (direction === Direction.Top) {
    return Direction.Bottom
  }
  if (direction === Direction.Bottom) {
    return Direction.Top
  }
  if (direction === Direction.Left) {
    return Direction.Right
  }
  return Direction.Right
}
