import React, {CSSProperties, ReactNode} from "react"
import Row from "./Row"
import Col from "./Col"

export default {
  component: Row,
  parameters: {componentSubtitle: "Grid 컴포넌트"},
  title: "그리드"
}

const style: CSSProperties = {
  textAlign: "center"
}
const Box = ({
  number,
  isEven = false,
  style,
  children
}: {
  number: number
  isEven?: boolean
  style?: CSSProperties
  children?: ReactNode
}) => (
  <div
    style={{
      background: isEven ? "rgb(0, 146, 255)" : "rgba(0,146,255,.75)",
      color: "white",
      padding: "1em",
      ...style
    }}
  >
    <div>Col-span-{number}</div>
    <div>{children}</div>
  </div>
)

export const Default = () => (
  <Row style={style}>
    <Col span={8}>
      <Box number={8} />
    </Col>
    <Col span={8}>
      <Box number={8} isEven />
    </Col>
    <Col span={8}>
      <Box number={8} />
    </Col>
  </Row>
)

export const Align = () => (
  <Row>
    <Row>
      <Col span={24}>
        <hr />
      </Col>
      <Col>
        <h2>START</h2>
      </Col>
    </Row>
    <Row align="start" justify="space-between" style={style}>
      <Col span={6}>
        <Box number={6} style={{padding: "2em"}} />
      </Col>
      <Col span={6}>
        <Box number={6} isEven />
      </Col>
      <Col span={6}>
        <Box number={6} style={{padding: "3em"}} />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <hr />
      </Col>
      <Col>
        <h2>END</h2>
      </Col>
    </Row>
    <Row align="end" justify="space-between" style={style}>
      <Col span={6}>
        <Box number={6} style={{padding: "2em"}} />
      </Col>
      <Col span={6}>
        <Box number={6} isEven />
      </Col>
      <Col span={6}>
        <Box number={6} style={{padding: "3em"}} />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <hr />
      </Col>
      <Col>
        asd
        <h2>CENTER</h2>
      </Col>
    </Row>
    <Row align="center" justify="space-between" style={style}>
      <Col span={6}>
        <Box number={6} style={{padding: "2em"}} />
      </Col>
      <Col span={6}>
        <Box number={6} isEven />
      </Col>
      <Col span={6}>
        <Box number={6} style={{padding: "3em"}} />
      </Col>
    </Row>
  </Row>
)

export const Order = () => (
  <Row align="center" justify="space-between" style={style}>
    <Col span={6} order={4}>
      <Box number={6} isEven>
        item 1
      </Box>
    </Col>
    <Col span={6} order={2}>
      <Box number={6} isEven>
        item 2
      </Box>
    </Col>
    <Col span={6} order={1}>
      <Box number={6}>item 3</Box>
    </Col>
    <Col span={6} order={3}>
      <Box number={6}>item 4</Box>
    </Col>
  </Row>
)

export const GutterRow = () => (
  <Row gutter={8} style={style}>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
  </Row>
)

export const GutterRowAndColumn = () => (
  <Row gutter={[8, 24]} style={style}>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={6} isEven />
    </Col>
  </Row>
)
