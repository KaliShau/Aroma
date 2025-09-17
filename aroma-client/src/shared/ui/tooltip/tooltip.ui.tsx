import { useState } from 'react'

import styles from './tooltip.module.scss'
import { TypeTableTooltip } from './tooltip.type'

export const Tooltip = () => {
  const [tooltip, setTooltip] = useState<TypeTableTooltip>({
    isVisible: false,
    content: '',
    x: 0,
    y: 0
  })

  const handleMouseEnter = (e: React.MouseEvent, content: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      isVisible: true,
      content,
      x: rect.left + rect.width / 2,
      y: rect.top - 20
    })
  }

  const handleMouseLeave = () => {
    setTooltip({ isVisible: false, content: '', x: 0, y: 0 })
  }

  const TooltipHtml = tooltip.isVisible ? (
    <div
      className={styles.tooltip}
      style={{
        left: tooltip.x,
        top: tooltip.y,
        transform: 'translateX(-50%) translateY(-100%)'
      }}
    >
      {tooltip.content}
      <div className={styles.tooltipArrow}></div>
    </div>
  ) : null

  return { handleMouseEnter, handleMouseLeave, TooltipHtml }
}
