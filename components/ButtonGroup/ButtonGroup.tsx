import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useCart } from '../../contexts/CartContext'

const S = {
  Buttons: styled.div`
    flex: 1;
    display: flex;
    border-radius: 10px;
    background-color: hsl(223, 64%, 98%);
    width: 100%;
  `,
  Minus: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  `,
  Count: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.kumbh};
    font-weight: 800;
  `,
  Plus: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    padding: 20px 0;
  `
}

export const ButtonGroup = () => {
  const { count, setCount } = useCart()

  return (
    <S.Buttons>
      <S.Minus
        data-testid='minusBtn'
        onClick={() => setCount(prev => (prev === 0 ? 0 : prev - 1))}
      >
        <Image src='/icon-minus.svg' width={15} height={5} alt='Minus' />
      </S.Minus>
      <S.Count data-testid='count'>{count}</S.Count>
      <S.Plus data-testid='plusBtn' onClick={() => setCount(prev => prev + 1)}>
        <Image src='/icon-plus.svg' width={15} height={15} alt='Plus' />
      </S.Plus>
    </S.Buttons>
  )
}
