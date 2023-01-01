import React from "react"
import classNames from "classnames"
import styles from "./Button.module.sass"

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

export enum ButtonSize {
  DEFAULT = "default",
  SMALL = "sm",
  LARGE = "lg"
}

export interface IProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  theme?: ButtonType
  size?: ButtonSize
}

const Button: React.FC<IProps> = ({
  children,
  theme = ButtonType.DEFAULT,
  size = ButtonSize.DEFAULT
}) => {
  const className = classNames(styles.default, styles[theme], styles[size])
  return <button className={className}>{children}</button>
}

export default Button
