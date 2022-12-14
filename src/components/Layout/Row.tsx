import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  HTMLAttributes,
  isValidElement
} from "react"
import styles from "./Grid.module.sass"
import classNames from "classnames"

export const getRowGutterStyle = (
  gutter: number | [number, number]
): {
  marginLeft: CSSProperties["marginLeft"]
  marginRight: CSSProperties["marginRight"]
  rowGap?: CSSProperties["rowGap"]
} => {
  if (Array.isArray(gutter)) {
    return {
      marginLeft: -gutter[0],
      marginRight: -gutter[0],
      rowGap: gutter[1]
    }
  }
  return {
    marginLeft: -gutter,
    marginRight: -gutter
  }
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gutter?: number | [number, number]
  align?: CSSProperties["alignItems"]
  justify?: CSSProperties["justifyContent"]
}

const Row: FC<RowProps> = ({
  gutter,
  align: alignItems,
  justify: justifyContent,
  style,
  className,
  children,
  ...restProps
}) => {
  const customStyle: CSSProperties = {
    alignItems,
    justifyContent,
    ...(gutter && getRowGutterStyle(gutter)),
    ...style
  }

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...(gutter && {gutter})
      })
    }
    return child
  })

  return (
    <div
      className={classNames(styles.Row, className)}
      style={customStyle}
      {...restProps}
    >
      {childrenWithProps}
    </div>
  )
}

export default Row
