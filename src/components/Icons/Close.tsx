import React, {FC, HTMLAttributes} from "react"
import styles from "./Close.module.sass"
import classNames from "classnames"

export interface CloseProps extends HTMLAttributes<HTMLSpanElement> {}

const Close: FC<CloseProps> = ({className, ...restProps}) => (
  <span className={classNames(styles.Close, className)} {...restProps}>
    &times;
  </span>
)

export default Close
