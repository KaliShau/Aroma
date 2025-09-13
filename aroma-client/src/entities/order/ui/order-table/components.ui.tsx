import styles from './order-table.module.scss'

export const OrderTableHeader = () => {
  return (
    <thead>
      <tr>
        <th>OrderId</th>
        <th>Date</th>
        <th>Status</th>
        <th>PaymentId</th>
        <th>Total</th>
        <th>Items</th>
      </tr>
    </thead>
  )
}

export const OrderTableTooltip = ({
  tooltip
}: {
  tooltip: TypeOrderTableTooltip
}) => {
  return (
    <div
      className={styles.tooltip}
      style={{
        left: `${tooltip.x}px`,
        top: `${tooltip.y}px`,
        transform: 'translateX(-50%) translateY(-100%)'
      }}
    >
      {tooltip.content}
      <div className={styles.tooltipArrow}></div>
    </div>
  )
}

export type TypeOrderTableTooltip = {
  isVisible: boolean
  content: string
  x: number
  y: number
}
