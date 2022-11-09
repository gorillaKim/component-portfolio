import React, {FC} from "react"
import ScrollBox from "./ScrollBox"

export default {
  component: ScrollBox,
  parameters: {componentSubtitle: "ScrollBox 컴포넌트"},
  title: "스크롤 박스"
}
const Item: FC<{children: React.ReactNode}> = ({children}) => (
  <span
    style={{
      border: "1px solid black",
      display: "inline-block",
      fontSize: 11,
      margin: 6,
      padding: "2px 6px"
    }}
  >
    {children}
  </span>
)
export const Default = () => (
  <ScrollBox>
    {Array.from({length: 9}, (v, i) => (
      <Item key={i}>{i} 아이템</Item>
    ))}
  </ScrollBox>
)

export const Custom1 = () => (
  <ScrollBox width={300}>
    {Array.from({length: 30}, (v, i) => (
      <Item key={i}>{i} 번째 게시글 입니다.</Item>
    ))}
  </ScrollBox>
)

export const Custom2 = () => (
  <ScrollBox width={900}>
    {Array.from({length: 30}, (v, i) => (
      <Item key={i}>{i} 번째 게시글 입니다.</Item>
    ))}
  </ScrollBox>
)

export const Responsive = () => (
  <ScrollBox width="100%">
    {Array.from({length: 30}, (v, i) => (
      <Item key={i}>{i} 번째 게시글 입니다.</Item>
    ))}
  </ScrollBox>
)
