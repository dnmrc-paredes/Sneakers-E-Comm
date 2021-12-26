import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import * as Root from '../index'

type ButtonGroupProps = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const ButtonGroup = ({ count, setCount }: ButtonGroupProps) => {
  return (
    <Root.Buttons>
      <Root.Minus
        data-testid='minusBtn'
        onClick={() =>
          setCount(prev => (prev === 0 ? (prev = 0) : (prev -= 1)))
        }
      >
        <Image src='/icon-minus.svg' width={15} height={5} alt='Minus' />
      </Root.Minus>
      <Root.Count>{count}</Root.Count>
      <Root.Plus
        data-testid='plusBtn'
        onClick={() => setCount(prev => (prev += 1))}
      >
        <Image src='/icon-plus.svg' width={15} height={15} alt='Plus' />
      </Root.Plus>
    </Root.Buttons>
  )
}
