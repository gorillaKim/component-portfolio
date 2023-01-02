import React from "react"
import Tooltip from "./Tooltip"
import Row from "../Layout/Row"
import Col from "../Layout/Col"
import {Direction} from "./util"

export default {
  component: Tooltip,
  parameters: {componentSubtitle: "Tooltip 컴포넌트"},
  title: "툴팁_v1.0"
}

export const Default = () => (
  <Row gutter={[0, 50]}>
    <Col span={12}>
      <Row>
        <Col span={12}>
          <Tooltip title="test" direction={Direction.Left}>
            Left
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title="test" direction={Direction.Right}>
            Right
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title="test" direction={Direction.LeftTop}>
            LeftTop
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title="test" direction={Direction.RightTop}>
            RightTop
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title="test" direction={Direction.LeftBottom}>
            LeftBottom
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title="test" direction={Direction.RightBottom}>
            RightBottom
          </Tooltip>
        </Col>
      </Row>
    </Col>
    <Col span={24}>
      <Row>
        <Col span={4}>
          <Tooltip title="test">Top</Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip title="test" direction={Direction.TopLeft}>
            TopLeft
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip title="test" direction={Direction.TopRight}>
            TopRight
          </Tooltip>
        </Col>
      </Row>
    </Col>
    <Col span={24}>
      <Row>
        <Col span={4}>
          <Tooltip title="test" direction={Direction.Bottom}>
            Bottom
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip title="test" direction={Direction.BottomLeft}>
            BottomLeft
          </Tooltip>
        </Col>
        <Col span={4}>
          <Tooltip title="test" direction={Direction.BottomRight}>
            BottomRight
          </Tooltip>
        </Col>
      </Row>
    </Col>
  </Row>
)

export const DynamicPosition = () => (
  <Row>
    <Col span={24}>
      <Tooltip title="test" direction={Direction.Top}>
        Top
      </Tooltip>
    </Col>
    <Col span={24}>
      <Tooltip title="test" direction={Direction.Left}>
        Left
      </Tooltip>
    </Col>
    <Col span={24}>
      <Tooltip title="test" direction={Direction.Bottom}>
        Bottom
      </Tooltip>
    </Col>
  </Row>
)
