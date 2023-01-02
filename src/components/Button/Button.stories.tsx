import React from "react"
import Button, {ButtonSize, ButtonType} from "./Button"
import Row from "../Layout/Row"
import Col from "../Layout/Col"

export default {
  component: Button,
  parameters: {componentSubtitle: "Button 컴포넌트"},
  title: "버튼"
}

export const Default = () => <Button>DEFAULT 버튼</Button>
export const Primary = () => (
  <Row gutter={[0, 24]}>
    <Col span={24}>
      <Button theme={ButtonType.PRIMARY} size={ButtonSize.SMALL}>
        PRIMARY 버튼
      </Button>
    </Col>
    <Col span={24}>
      <Button theme={ButtonType.PRIMARY} size={ButtonSize.DEFAULT}>
        PRIMARY 버튼
      </Button>
    </Col>
    <Col span={24}>
      <Button theme={ButtonType.PRIMARY} size={ButtonSize.LARGE}>
        PRIMARY 버튼
      </Button>
    </Col>
  </Row>
)
export const Secondary = () => (
  <Row gutter={[0, 24]}>
    <Col span={24}>
      <Button theme={ButtonType.SECONDARY} size={ButtonSize.SMALL}>
        SECONDARY 버튼
      </Button>
    </Col>
    <Col span={24}>
      <Button theme={ButtonType.SECONDARY} size={ButtonSize.DEFAULT}>
        SECONDARY 버튼
      </Button>
    </Col>
    <Col span={24}>
      <Button theme={ButtonType.SECONDARY} size={ButtonSize.LARGE}>
        SECONDARY 버튼
      </Button>
    </Col>
  </Row>
)
export const Custom = () => (
  <Row gutter={24}>
    <Col>
      <Button backgroundColor="#a0ddf9" borderColor="#a0ddf9" color="black">
        SECONDARY 버튼
      </Button>
    </Col>
    <Col>
      <Button backgroundColor="lightyellow" borderColor="yellow" color="black">
        SECONDARY 버튼
      </Button>
    </Col>
    <Col>
      <Button backgroundColor="red" borderColor="transparent" color="#fff">
        SECONDARY 버튼
      </Button>
    </Col>
  </Row>
)
export const BorderLess = () => (
  <Button theme={ButtonType.DEFAULT} borderless>
    DEFAULT 버튼
  </Button>
)
export const Disabled = () => (
  <Button theme={ButtonType.DEFAULT} disabled>
    DEFAULT 버튼
  </Button>
)

export const Size = () => (
  <Row gutter={[0, 24]}>
    <Col span={24}>
      <Button theme={ButtonType.PRIMARY} size={ButtonSize.SMALL}>
        SMALL 버튼
      </Button>
    </Col>
    <Col span={24}>
      <Button theme={ButtonType.PRIMARY} size={ButtonSize.DEFAULT}>
        DEFAULT 버튼
      </Button>
    </Col>
    <Col span={24}>
      <Button theme={ButtonType.PRIMARY} size={ButtonSize.LARGE}>
        LARGE 버튼
      </Button>
    </Col>
  </Row>
)

export const ClickAction = () => (
  <Button onClick={() => alert("click button")}>DEFAULT 버튼</Button>
)
