import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import * as Root from './index'
import PlusIcon from '../../public/icon-plus.svg'
import MinusIcon from '../../public/icon-minus.svg'

type ButtonGroupProps = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const ButtonGroup = ({ count, setCount }: ButtonGroupProps) => {
  return (
    <Root.Buttons>
      <Root.Minus onClick={() => setCount((prev) => prev === 0 ? prev = 0 : prev-=1)}>
        <Image src={MinusIcon} alt='Minus' />
      </Root.Minus>
      <Root.Count>{count}</Root.Count>
      <Root.Plus onClick={() => setCount((prev) => (prev += 1))}>
        <Image src={PlusIcon} alt='Minus' />
      </Root.Plus>
    </Root.Buttons>
  )
}
