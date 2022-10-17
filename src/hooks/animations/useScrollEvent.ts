import {MouseEvent, useState} from "react"

interface useScrollEventReturn {
  handlers: {
    onMouseUp: (e: MouseEvent<HTMLDivElement>) => void
    onMouseDown: (e: MouseEvent<HTMLDivElement>) => void
    onMouseLeave: (e: MouseEvent<HTMLDivElement>) => void
    onMouseMove: (e: MouseEvent<HTMLDivElement>) => void
  }
  isActive: boolean
}

const useScrollEvent = (): useScrollEventReturn => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  const onMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()

    const {currentTarget} = e

    setStartX(e.pageX - currentTarget.offsetLeft)
    setScrollLeft(currentTarget.scrollLeft)
    setIsActive(true)
  }

  const onMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault()

    const {currentTarget} = e

    if (isActive) {
      const x = e.pageX - currentTarget.offsetLeft
      const diff = x - startX
      currentTarget.scrollLeft = scrollLeft - diff
    }
  }

  const mouseDeActiveHandler = (): void => {
    setIsActive(false)
  }

  return {
    handlers: {
      onMouseDown,
      onMouseLeave: mouseDeActiveHandler,
      onMouseMove,
      onMouseUp: mouseDeActiveHandler
    },
    isActive
  }
}

export default useScrollEvent
