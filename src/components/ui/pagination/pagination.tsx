import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { ReactComponent as Arrow } from '@/assets/icons/arrowLeft.svg'
import { SelectC, Typography } from '@/components/ui'

type Props = {
  currentPage?: number
  itemsPerPage?: number
  totalPages?: number
  totalItems?: number
  maxCountShowBtn?: number
}

export const Pagination: FC<Props> = ({ maxCountShowBtn = 5, totalPages = 0, currentPage = 1 }) => {
  const perPageCountVariant = ['10', '20', '30', '50', '100']

  const onChangeSelectHandle = (value: string) => console.log(value)
  const pageButtons: ReactNode[] = []

  const portionCount = Math.ceil((totalPages - maxCountShowBtn) / (maxCountShowBtn - 2)) + 1

  console.log(portionCount)
  const firstPortionItems = maxCountShowBtn > totalPages ? totalPages : maxCountShowBtn
  //Как расчитать сколько эелементов в последней порции?
  const lastPortionItems = portionCount > 1 ? totalPages - maxCountShowBtn : null

  // render items for first portion
  for (let i = 2; i <= firstPortionItems; i++) {
    pageButtons.push(
      <button key={i} className={s.pageButton}>
        {i}
      </button>
    )
  }
  //is show first dots
  const showFirstDots = currentPage > maxCountShowBtn && <div className={s.dots}>...</div>
  // Styles
  const firstPageStyle = clsx(s.firstPage, currentPage === 1 && s.currentPage)

  return (
    <div className={s.wrapper}>
      <div className={s.arrowWrapper}>
        <Arrow className={s.arrowLeft} />
      </div>
      {/*First page*/}
      <div className={firstPageStyle}>1</div>
      {/*First dots*/}
      {showFirstDots}
      {/*Buttons*/}
      <div className={s.pageButtons}>{pageButtons}</div>
      {/*Last dots*/}
      <div className={s.dots}>...</div>
      {/*Last page*/}
      <div className={s.totalPages}>{totalPages}</div>
      <div className={s.arrowWrapper}>
        <Arrow className={s.arrowRight} />
      </div>
      <div className={s.showPerPageWrapper}>
        <Typography variant={'body2'}>Показать</Typography>
        <SelectC
          values={perPageCountVariant}
          startValue={perPageCountVariant[4]}
          className={s.select}
          onValueChange={onChangeSelectHandle}
        />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
