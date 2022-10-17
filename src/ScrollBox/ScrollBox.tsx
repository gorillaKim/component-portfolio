import React, {FC, ReactNode, CSSProperties} from "react"
import useScrollEvent from "../hooks/animations/useScrollEvent"
import classNames from "classnames"
import styles from "./ScrollBox.module.sass"

export interface ScrollBoxProps {
  children: ReactNode
  className?: string
  width?: CSSProperties["width"]
  style?: CSSProperties
}

const ScrollBox: FC<ScrollBoxProps> = ({
  children,
  className,
  style,
  width = 300
}) => {
  const {handlers, isActive} = useScrollEvent()

  return (
    <div
      role="presentation"
      className={classNames(styles.ScrollBox, className)}
      style={{width, cursor: isActive ? "grabbing" : "grab", ...style}}
      {...handlers}
    >
      {children}
    </div>
  )
}

export default ScrollBox
