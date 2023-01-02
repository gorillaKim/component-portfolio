import React, {CSSProperties} from "react"
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
  borderless?: boolean
  backgroundColor?: CSSProperties["backgroundColor"]
  borderColor?: CSSProperties["borderColor"]
  color?: CSSProperties["color"]
  className?: string
  disabled?: boolean
}

const Button: React.FC<IProps> = ({
  children,
  theme = ButtonType.DEFAULT,
  size = ButtonSize.DEFAULT,
  borderless = false,
  backgroundColor,
  borderColor,
  color,
  className,
  disabled = false,
  onClick
}) => {
  const isCustom = Boolean(backgroundColor || color || borderColor)
  const classnames = classNames(
    styles.default,
    styles[theme],
    styles[size],
    className,
    {
      [styles.borderNone]: borderless,
      [styles.custom]: isCustom
    }
  )
  const style: CSSProperties = {backgroundColor, color, borderColor}

  return (
    <button
      className={classnames}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
