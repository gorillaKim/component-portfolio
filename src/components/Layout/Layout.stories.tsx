import Row from "./Row"
import Col from "./Col"

export default {
  component: Row,
  parameters: {componentSubtitle: "Layout 컴포넌트"},
  title: "레이아웃"
}

const Box = ({number}: {number: number}) => (
  <div
    style={{
      background: "rgb(0, 146, 255)",
      color: "white",
      padding: "1em"
    }}
  >
    item-{number}
  </div>
)

export const Default = () => (
  <Row>
    <Col span={8}>
      <Box number={1} />
    </Col>
    <Col span={8}>
      <Box number={2} />
    </Col>
    <Col span={8}>
      <Box number={3} />
    </Col>
  </Row>
)

export const Align = () => (
  <Row align="center" justify="space-between">
    <Col span={6}>
      <Box number={1} />
    </Col>
    <Col span={6}>
      <Box number={2} />
    </Col>
    <Col span={6}>
      <Box number={3} />
    </Col>
  </Row>
)

export const GutterRow = () => (
  <Row gutter={8}>
    <Col span={6}>
      <Box number={1} />
    </Col>
    <Col span={6}>
      <Box number={2} />
    </Col>
    <Col span={6}>
      <Box number={3} />
    </Col>
    <Col span={6}>
      <Box number={4} />
    </Col>
    <Col span={6}>
      <Box number={5} />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={7} />
    </Col>
    <Col span={6}>
      <Box number={8} />
    </Col>
  </Row>
)

export const GutterRowAndColumn = () => (
  <Row gutter={[8, 24]}>
    <Col span={6}>
      <Box number={1} />
    </Col>
    <Col span={6}>
      <Box number={2} />
    </Col>
    <Col span={6}>
      <Box number={3} />
    </Col>
    <Col span={6}>
      <Box number={4} />
    </Col>
    <Col span={6}>
      <Box number={5} />
    </Col>
    <Col span={6}>
      <Box number={6} />
    </Col>
    <Col span={6}>
      <Box number={7} />
    </Col>
    <Col span={6}>
      <Box number={8} />
    </Col>
  </Row>
)
