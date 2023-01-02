import React, {
  CSSProperties,
  FC,
  HTMLAttributes,
  MouseEvent,
  useState
} from "react"
import styles from "./Tooltip.module.sass"
import classNames from "classnames"
import {
  calcPosition,
  Direction,
  getResponseDirection,
  getSimpleDirection
} from "./util"

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  direction?: Direction
  title?: string
}

const Tooltip: FC<TooltipProps> = ({
  direction = Direction.Top,
  title,
  children,
  style,
  className
}) => {
  const [position, setPosition] = useState<CSSProperties>({})
  const [validDirection, setValidDirection] = useState<Direction>(direction)

  const handleOnMouseUp = (e: MouseEvent<HTMLDivElement>): void => {
    const $tooltip = e.currentTarget.querySelector(`.${styles.Tooltip}`)
    const containerRect = e.currentTarget.getBoundingClientRect()
    if (!$tooltip) {
      return
    }
    const {simpleDirection, target} = getSimpleDirection(direction)
    const tooltipRect = $tooltip.getBoundingClientRect()
    const {width, height} = tooltipRect
    const isEnableDirection = Boolean(
      containerRect[simpleDirection] - tooltipRect[target] > tooltipRect[target]
    )
    const validDirection = isEnableDirection
      ? direction
      : getResponseDirection(isEnableDirection, simpleDirection)
    setPosition(calcPosition[validDirection](width, height))
    setValidDirection(validDirection)
  }

  return (
    // eslint-disable-next-line
    <div className={styles.TooltipContainer} onMouseOver={handleOnMouseUp}>
      {children}
      <div
        className={classNames(styles.Tooltip, className)}
        style={{...style, ...position}}
      >
        <div
          className={classNames(styles.TooltipTriangle, styles[validDirection])}
        />
        <div className={styles.TooltipInner}>{title}</div>
      </div>
    </div>
  )
}

export default Tooltip
