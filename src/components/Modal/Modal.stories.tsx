import React, {useState} from "react"
import Modal from "./Modal"

export default {
  component: Modal,
  parameters: {componentSubtitle: "Modal 컴포넌트"},
  title: "모달"
}

export const Default = () => (
  <Modal
    title="타이틀 입니다."
    visible
    onClose={() => alert("닫기버튼 클릭!")}
    footer="footer 입니다"
  >
    테스트 모달 입니다.
  </Modal>
)

export const UsingButton = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setVisible(true)}>모달 오픈</button>
      <Modal
        title="타이틀 입니다."
        visible={visible}
        onClose={() => setVisible(false)}
        footer="footer 입니다"
      >
        테스트 모달 입니다.
      </Modal>
    </>
  )
}

export const WithFooterButtons = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setVisible(true)}>모달 오픈</button>
      <Modal
        title="타이틀 입니다."
        visible={visible}
        onClose={() => setVisible(false)}
        footer={
          <div style={{display: "flex", gap: 14}}>
            <button onClick={() => setVisible(false)}>취소</button>
            <button>확인</button>
          </div>
        }
      >
        테스트 모달 입니다.
      </Modal>
    </>
  )
}
