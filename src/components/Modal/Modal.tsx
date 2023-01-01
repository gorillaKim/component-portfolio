import React, {CSSProperties, FC, ReactNode, useEffect} from "react"
import styles from "./Modal.module.sass"
import classNames from "classnames"
import Close from "../Icons/Close"
import useDelayVisible from "../../hooks/animations/useDelayVisible"

export interface ModalProps {
  visible?: boolean
  title?: ReactNode
  extraTitle?: ReactNode
  footer?: ReactNode
  onClose?: () => void
  style?: CSSProperties
  footerStyle?: CSSProperties
  animation?: CSSProperties["transitionTimingFunction"]
  animationDuration?: CSSProperties["transitionDuration"]
  className?: string
  children?: ReactNode
}

const Modal: FC<ModalProps> = ({
  visible,
  title,
  extraTitle,
  footer,
  onClose,
  style,
  footerStyle,
  animation = "ease-out",
  animationDuration = "0.1s",
  className,
  children
}) => {
  const handleOnClose = (): void => onClose?.()
  const {displayNone, visuallyHidden} = useDelayVisible({
    hidden: !visible,
    delays: {
      displayNone: 100
    }
  })
  const isActive = !displayNone
  const isVisuallyActive = !visuallyHidden

  useEffect(() => {
    const cssProperty = "overflow"
    if (visible) {
      document.body.style[cssProperty] = "hidden"
    } else {
      document.body.style.removeProperty(cssProperty)
    }
  }, [visible])

  return (
    <>
      {/* eslint-disable-next-line */}
      <div
        role="button"
        className={classNames(styles.ModalBackDrop, {
          [styles.active]: visible
        })}
        onClick={handleOnClose}
      />
      <div
        className={classNames(styles.Modal, {
          [styles.active]: isActive,
          [styles.visuallyActive]: isVisuallyActive
        })}
        style={{
          transitionTimingFunction: animation,
          transitionDuration: animationDuration
        }}
      >
        <div className={classNames(styles.ModalBody, className)} style={style}>
          <div className={styles.Title}>
            <span>{title}</span>
            <div>{extraTitle || <Close onClick={handleOnClose} />}</div>
          </div>
          <div>{children}</div>
        </div>
        <div className={styles.Footer} style={footerStyle}>
          {footer}
        </div>
      </div>
    </>
  )
}

export default Modal
