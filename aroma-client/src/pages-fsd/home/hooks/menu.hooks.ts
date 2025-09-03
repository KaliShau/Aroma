import { useState } from 'react'

import { TypeCoffee } from '@/entities/coffee/model/coffee.type'

type TypeReturn = {
  menuData: TypeCoffee[] | undefined
  onClickNext: () => void
  onClickPrev: () => void
  direction: 'next' | 'prev' | null
  animationKey: number
}

export const useMenuHome = (coffees: TypeCoffee[]): TypeReturn => {
  const skipNumber = 3
  const maxIndex = coffees.length - 1
  const minIndex = 0

  const [imageNumber, setImageNumber] = useState<number>(minIndex + 1)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)
  const [animationKey, setAnimationKey] = useState<number>(0)

  const getNextIndex = (current: number) => {
    const next = current + skipNumber
    return next > maxIndex ? minIndex + (next - maxIndex - 1) : next
  }

  const getPrevIndex = (current: number) => {
    const prev = current - skipNumber
    return prev < minIndex ? maxIndex - (minIndex - prev - 1) : prev
  }

  const onClickNext = () => {
    setDirection('next')
    setAnimationKey(prev => prev + 1)
    setTimeout(() => {
      setImageNumber(prev => getNextIndex(prev))
    }, 500)
  }

  const onClickPrev = () => {
    setDirection('prev')
    setAnimationKey(prev => prev + 1)
    setTimeout(() => {
      setImageNumber(prev => getPrevIndex(prev))
    }, 500)
  }

  const current = coffees[imageNumber]
  const prev =
    imageNumber <= minIndex ? coffees[maxIndex] : coffees[imageNumber - 1]
  const next =
    imageNumber >= maxIndex ? coffees[minIndex] : coffees[imageNumber + 1]

  return {
    menuData: [prev, current, next],
    onClickNext,
    onClickPrev,
    direction,
    animationKey
  }
}
