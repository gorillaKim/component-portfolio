import React, {
  FC,
  ReactNode,
  CSSProperties,
  UIEvent,
  useState,
  useRef,
  useLayoutEffect
} from "react"
import useScrollEvent from "../../hooks/animations/useScrollEvent"
import classNames from "classnames"
import styles from "./ScrollBox.module.sass"

export interface ScrollBoxProps {
  children: ReactNode
  className?: string
  width?: CSSProperties["width"]
  style?: CSSProperties
  onClick?: (e: UIEvent<HTMLDivElement>) => void
}

const ScrollBox: FC<ScrollBoxProps> = ({
  children,
  onClick,
  className,
  style,
  width
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const {current} = ref
  const {handlers, isActive} = useScrollEvent()
  const [shadowDirection, setShadowDirection] = useState<
    "left" | "right" | "both" | null
  >(null)

  const handleScroll = ({currentTarget}: UIEvent<HTMLDivElement>): void => {
    const scrollWidth = currentTarget.scrollWidth - currentTarget.clientWidth

    const isActiveShadow = currentTarget.scrollWidth > currentTarget.clientWidth
    const isScrollPositionEnd = scrollWidth === currentTarget.scrollLeft

    if (isActiveShadow) {
      if (currentTarget.scrollLeft > 0) {
        if (isScrollPositionEnd) {
          setShadowDirection("left")
        } else {
          setShadowDirection("both")
        }
      } else {
        setShadowDirection("right")
      }
    }
  }

  useLayoutEffect(() => {
    if (current && current.scrollWidth > current.clientWidth) {
      setShadowDirection("right")
    }
  }, [current])

  return (
    <div className={styles.ScrollBox} style={{width}}>
      <div
        className={classNames(styles.shadow, styles.left, {
          [styles.visible]:
            shadowDirection === "left" || shadowDirection === "both"
        })}
      />
      <div
        className={classNames(styles.shadow, styles.right, {
          [styles.visible]:
            shadowDirection === "right" || shadowDirection === "both"
        })}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        ref={ref}
        className={classNames(styles.ScrollItems, className)}
        onScroll={handleScroll}
        style={{cursor: isActive ? "grabbing" : "grab", ...style}}
        onClick={onClick}
        {...handlers}
      >
        {children}
      </div>
    </div>
  )
}

export default ScrollBox
