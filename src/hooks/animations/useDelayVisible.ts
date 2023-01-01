import {useEffect, useRef, useState} from "react"

export const DELAYS = {
  visuallyHidden: 20,
  displayNone: 400
}

interface useDelayVisibleProps {
  hidden?: boolean
  delays?: {
    visuallyHidden?: number
    displayNone?: number
  }
}

interface useDelayVisibleReturns {
  visuallyHidden: boolean
  displayNone: boolean
}

const useDelayVisible = ({
  hidden = true,
  delays
}: useDelayVisibleProps): useDelayVisibleReturns => {
  const isFirstRender = useRef<boolean>(true)
  const [visuallyHidden, setVisuallyHidden] = useState<boolean>(true)
  const [displayNone, setDisplayNone] = useState<boolean>(true)
  const delayTime = {
    ...DELAYS,
    delays
  }

  useEffect(() => {
    if (!hidden) {
      setDisplayNone(false)
      setTimeout(() => setVisuallyHidden(false), delayTime.visuallyHidden)
    } else {
      setVisuallyHidden(true)
      setTimeout(
        () => setDisplayNone(true),
        isFirstRender.current ? 0 : delayTime.displayNone
      )
    }
    isFirstRender.current = false
  }, [delayTime.displayNone, delayTime.visuallyHidden, hidden])

  return {
    visuallyHidden,
    displayNone
  }
}

export default useDelayVisible
