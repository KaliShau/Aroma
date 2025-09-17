import { FetchNextPageOptions } from '@tanstack/react-query'
import { FC } from 'react'

import {
  TableBody,
  TableFetchPage,
  TableHeader,
  TableLayout,
  TableLoading,
  TableNotFound
} from '@/widgets/table'

import { TypeCoffee } from '../../model/coffee.type'
import { CoffeeTableItem } from './coffee-item.ui'
import styles from './coffee-table.module.scss'

type TypeCoffeeTable = {
  data: TypeCoffee[]
  fetchNextPage: (options?: FetchNextPageOptions) => void
  hasNextPage: boolean
  isLoading: boolean
}

const HEADER = [
  'Image',
  'Id',
  'Created at',
  'Name',
  'Price',
  'IsAvailable',
  'Action'
]

export const CoffeeTable: FC<TypeCoffeeTable> = ({
  data,
  fetchNextPage,
  hasNextPage,
  isLoading
}) => {
  return (
    <TableLayout className={styles.root}>
      <TableHeader data={HEADER} className={styles.header} />
      <TableBody>
        {data.map(item => (
          <CoffeeTableItem item={item} key={item.id} />
        ))}
        <TableLoading isLoading={isLoading} colSpan={HEADER.length} />
        <TableFetchPage
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          colSpan={HEADER.length}
        />
        <TableNotFound isData={!!data.length} colSpan={HEADER.length} />
      </TableBody>
    </TableLayout>
  )
}
