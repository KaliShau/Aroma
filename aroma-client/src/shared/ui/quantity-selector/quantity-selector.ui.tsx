import { FC } from 'react'
import Select from 'react-select'

import styles from './quantity-selector.module.scss'
import { TypeQuantitySelector } from './quantity-selector.type'

export const QuantitySelector: FC<TypeQuantitySelector> = ({
  quantity,
  setQuantity
}) => {
  const options = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString()
  }))

  return (
    <Select
      classNamePrefix='quantity'
      options={options}
      defaultValue={options[0]}
      value={{ label: quantity.toString(), value: quantity }}
      onChange={selected => setQuantity(selected?.value || 1)}
      isSearchable={false}
      classNames={{
        control: () => styles.control,
        menu: () => styles.menu,
        option: () => styles.option,
        singleValue: () => styles.singleValue,
        dropdownIndicator: () => styles.dropdownIndicator
      }}
    />
  )
}
