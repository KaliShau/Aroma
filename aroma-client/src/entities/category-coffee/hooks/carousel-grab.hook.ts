import { CSSProperties, useEffect, useRef, useState } from 'react'

export const useCategoryCarouselGrab = (styles: any) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [dragDistance, setDragDistance] = useState(0)
  const [clickedElement, setClickedElement] = useState<HTMLElement | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return

    setClickedElement(e.target as HTMLElement)

    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
    setDragDistance(0)

    sliderRef.current.classList.add(styles.grabbing)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      endDrag()
    }
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      if (dragDistance < 5 && clickedElement) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
        clickedElement.dispatchEvent(clickEvent)
      }
      endDrag()
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return

    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2

    setDragDistance(Math.abs(walk))

    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleLinkClick = (e: React.MouseEvent, slug: string) => {
    if (dragDistance > 5) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const endDrag = () => {
    setIsDragging(false)
    setClickedElement(null)
    setDragDistance(0)

    if (sliderRef.current) {
      sliderRef.current.classList.remove(styles.grabbing)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const preventSelect = (e: Event) => {
      if (isDragging) {
        e.preventDefault()
      }
    }

    slider.addEventListener('selectstart', preventSelect)

    return () => {
      slider.removeEventListener('selectstart', preventSelect)
    }
  }, [isDragging])

  return {
    sliderRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
    handleLinkClick,
    isDragging
  }
}
