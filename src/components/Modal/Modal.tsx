import React, {CSSProperties, FC, ReactNode} from "react"
import styles from "./Modal.module.sass"
import classNames from "classnames"
import Close from "../Icons/Close"

export interface ModalProps {
  visible?: boolean
  title?: ReactNode
  extraTitle?: ReactNode
  footer?: ReactNode
  onClose?: () => void
  style?: CSSProperties
  footerStyle?: CSSProperties
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
  className,
  children
}) => {
  const handleOnClose = (): void => onClose?.()

  return (
    <>
      <div
        className={classNames(styles.ModalBackDrop, {[styles.active]: visible})}
        onClick={handleOnClose}
      />
      <div className={classNames(styles.Modal, {[styles.active]: visible})}>
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
