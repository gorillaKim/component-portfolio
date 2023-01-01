import React, {CSSProperties, FC, ReactNode, useEffect, useRef} from "react"
import {createPortal} from "react-dom"
import useDelayVisible from "../../hooks/animations/useDelayVisible"
import classNames from "classnames"
import Close from "../Icons/Close"
import styles from "./Modal.module.sass"

export interface ModalProps {
  visible?: boolean
  title?: ReactNode
  extraTitle?: ReactNode
  footer?: ReactNode
  onClose?: () => void
  style?: CSSProperties
  bodyStyle?: CSSProperties
  footerStyle?: CSSProperties
  animation?: CSSProperties["transitionTimingFunction"]
  animationDuration?: CSSProperties["transitionDuration"]
  className?: string
  children?: ReactNode
}

const Modal: FC<ModalProps> = ({
  visible = false,
  title,
  extraTitle,
  footer,
  onClose,
  style,
  bodyStyle,
  footerStyle,
  animation = "ease-out",
  animationDuration = "0.1s",
  className,
  children
}) => {
  const $modalRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    if ($modalRef.current && isVisuallyActive) {
      $modalRef.current.style.left = `calc(50% - ${
        $modalRef.current.clientWidth / 2
      }px )`
      $modalRef.current.style.top = `calc(50% - ${
        $modalRef.current.clientHeight / 2
      }px )`
    }
  }, [isVisuallyActive])

  return createPortal(
    <div>
      {/* eslint-disable-next-line */}
      <div
        role="button"
        className={classNames(styles.ModalBackDrop, {
          [styles.active]: visible
        })}
        onClick={handleOnClose}
      />
      <div
        ref={$modalRef}
        className={classNames(styles.Modal, {
          [styles.active]: isActive,
          [styles.visuallyActive]: isVisuallyActive
        })}
        style={{
          transitionTimingFunction: animation,
          transitionDuration: animationDuration
        }}
      >
        <div className={styles.ModalBody} style={bodyStyle}>
          <div className={styles.Title}>
            <span>{title}</span>
            <div>{extraTitle || <Close onClick={handleOnClose} />}</div>
          </div>
          <div style={style} className={classNames(styles.Children, className)}>
            {children}
          </div>
        </div>
        <div className={styles.Footer} style={footerStyle}>
          {footer}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
