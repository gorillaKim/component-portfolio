import React, {FC} from "react"
import styles from "./Modal.module.sass"
import classNames from "classnames"

export interface ModalProps {}

const Modal: FC<ModalProps> = () => (
  <div className={classNames(styles.ModalBackDrop, {[styles.active]: true})}>
    <div className={styles.Modal}>test</div>
  </div>
)

export default Modal
