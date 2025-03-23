import Image from 'next/image'
import styled from 'styled-components'
import { MdOutlineDelete } from 'react-icons/md'
import { useCart } from '../../contexts/CartContext'
import { breakpoints } from '../../styles'
import { useWindow } from '../../hooks'

const S = {
  Root: styled.div`
    position: absolute;
    width: 100%;
    top: 20px;
    z-index: 10;
    border-radius: 8px;
    right: 0;
    min-width: 340px;

    @media (min-width: ${breakpoints.md}) {
      left: -315px;
    }
  `,
  Wrapper: styled.div`
    border-radius: 8px;
    background-color: white;
    box-shadow: 2px 10px 34px -2px rgba(191, 191, 191, 0.75);

    @media (min-width: ${breakpoints.md}) {
      margin: 20px 10px;
    }
  `,
  TitleContainer: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-bottom: solid #c4c3c3 1px;

    h4 {
      margin: 0.5rem 1rem;
      font-family: ${({ theme }) => theme.fonts.kumbh};
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 700;
      width: 30px;
      height: 30px;
    }
  `,
  ItemsContainer: styled.div`
    flex: 2;
    display: flex;
    padding: 1rem 0;
    margin: 0.5rem 1rem;

    h4 {
      margin: auto;
      font-family: ${({ theme }) => theme.fonts.kumbh};
      color: ${({ theme }) => theme.colors.light_gray};
    }
  `,
  Item: styled.div`
    display: flex;

    img {
      border-radius: 5px;
    }
  `,
  ImageContainer: styled.div`
    flex: 1;
  `,
  Info: styled.div`
    flex: 2;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    .info {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;

      h4,
      p {
        font-family: ${({ theme }) => theme.fonts.kumbh};
        font-weight: 400;

        span {
          font-weight: 800;
        }
      }
    }
    .delete {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }
  `,
  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    height: 50px;
    width: 90%;
    margin: 0.5rem 1rem;
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.kumbh};
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 15px;
  `
}

export const Cart = ({
  handleToggleCart
}: {
  handleToggleCart: () => void
}) => {
  const { cartItems, setCartItems } = useCart()
  const { width } = useWindow()
  const isSmall = (width as number) < 1279

  const handleEmptyCart = () => {
    setCartItems(0)
  }

  return (
    <S.Root>
      <S.Wrapper>
        <S.TitleContainer>
          <h4> Cart </h4>
          {isSmall && (
            <button onClick={handleToggleCart} type='button'>
              X
            </button>
          )}
        </S.TitleContainer>
        <S.ItemsContainer>
          {cartItems ? (
            <S.Item data-testid='product'>
              <Image
                src='/image-product-1-thumbnail.jpg'
                width={50}
                height={50}
                alt='product'
              />
              <S.Info>
                <div className='info'>
                  <h4> Fall Limited Edition Sneakers </h4>
                  <p>
                    $125.00 x {cartItems} <span> ${125.0 * cartItems} </span>
                  </p>
                </div>
                <div className='delete'>
                  <MdOutlineDelete
                    onClick={handleEmptyCart}
                    color='grey'
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </S.Info>
            </S.Item>
          ) : (
            <h4 data-testid='empty-cart'> Your cart is empty </h4>
          )}
        </S.ItemsContainer>
        <S.Button>Checkout</S.Button>
      </S.Wrapper>
    </S.Root>
  )
}
