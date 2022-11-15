import React from "react"
import Button, {ButtonType} from "./Button"

export default {
  component: Button,
  parameters: {componentSubtitle: "Button 컴포넌트"},
  title: "버튼"
}

export const Default = () => <Button>default 버튼</Button>
export const Primary = () => (
  <Button theme={ButtonType.PRIMARY}>primary 버튼</Button>
)
export const Secondary = () => (
  <Button theme={ButtonType.SECONDARY}>secondary 버튼</Button>
)
