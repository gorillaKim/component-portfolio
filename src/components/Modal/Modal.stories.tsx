import React, {useState} from "react"
import Modal from "./Modal"

export default {
  component: Modal,
  parameters: {componentSubtitle: "Modal 컴포넌트"},
  title: "모달"
}

export const Default = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div style={{height: 700}}>
      <button onClick={() => setVisible(true)}>모달 오픈</button>
      <Modal
        title="타이틀 입니다."
        visible={visible}
        onClose={() => setVisible(false)}
        footer="footer 입니다"
      >
        테스트 모달 입니다.
      </Modal>
    </div>
  )
}

export const WithFooterButtons = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div style={{height: 700}}>
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
    </div>
  )
}

export const LongChildren = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div style={{height: 700}}>
      <button onClick={() => setVisible(true)}>모달 오픈</button>
      <Modal
        title="타이틀 입니다."
        visible={visible}
        onClose={() => setVisible(false)}
        width={700}
        footer={
          <div style={{display: "flex", gap: 14}}>
            <button onClick={() => setVisible(false)}>취소</button>
            <button>확인</button>
          </div>
        }
      >
        {Array.from({length: 300}, (_, index) => (
          <div key={`key_${index}`}>테스트 모달 입니다.</div>
        ))}
      </Modal>
    </div>
  )
}

export const WithAnimation = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div style={{height: 700}}>
      <button onClick={() => setVisible(true)}>모달 오픈</button>
      <Modal
        title="타이틀 입니다."
        visible={visible}
        onClose={() => setVisible(false)}
        animation="linear"
        animationDuration="0.3s"
        footer={
          <div style={{display: "flex", gap: 14}}>
            <button onClick={() => setVisible(false)}>취소</button>
            <button>확인</button>
          </div>
        }
      >
        테스트 모달 입니다.
      </Modal>
    </div>
  )
}
