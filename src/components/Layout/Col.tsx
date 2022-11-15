import React, {CSSProperties, FC, HTMLAttributes} from "react"
import styles from "./Grid.module.sass"
import classNames from "classnames"

export const getColGutterStyle = (
  gutter: number | [number, number]
): {
  paddingLeft: CSSProperties["paddingLeft"]
  paddingRight: CSSProperties["paddingRight"]
} => {
  if (Array.isArray(gutter)) {
    return {
      paddingLeft: gutter[0],
      paddingRight: gutter[0]
    }
  }
  return {
    paddingLeft: gutter,
    paddingRight: gutter
  }
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number
  order?: number
  gutter?: number | [number, number]
}

const Col: FC<ColProps> = ({
  span,
  order,
  gutter,
  children,
  style,
  ...restProps
}) => {
  const customStyle: CSSProperties = {
    ...style,
    order: order ?? "unset",
    ...(gutter && getColGutterStyle(gutter))
  }

  return (
    <div
      className={classNames(styles.Col, {[styles[`span${span}`]]: span})}
      style={customStyle}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Col
