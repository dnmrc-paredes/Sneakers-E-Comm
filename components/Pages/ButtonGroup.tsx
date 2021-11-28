import React from 'react'
import Image from 'next/image'
import { Root } from './index'
import PlusIcon from '../../public/icon-plus.svg'
import MinusIcon from '../../public/icon-minus.svg'

export const ButtonGroup = ({ count }: { count: number }) => {
  return (
    <Root.Buttons>
      <Root.Minus>
        <Image src={MinusIcon} alt='Minus' />
      </Root.Minus>
      <Root.Count>{count}</Root.Count>
      <Root.Plus>
        <Image src={PlusIcon} alt='Minus' />
      </Root.Plus>
    </Root.Buttons>
  )
}
