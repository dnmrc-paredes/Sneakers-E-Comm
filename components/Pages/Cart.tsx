import styled from 'styled-components'
import Image from 'next/image'
import { MdOutlineDelete } from 'react-icons/md'

const Base = {
  Root: styled.div`
    position: absolute;
    top: -40px;
    transform: translate(-50%, 50%);
    z-index: 3;
    width: 340px;
    box-shadow: 0px 1px 50px 1px #c4c3c3;
    border-radius: 8px;
    background-color: white;
    flex-direction: column;
    overflow: hidden;
  `,
  TitleContainer: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: solid #c4c3c3 1px;

    h4 {
      margin: 0.5rem 1rem;
      font-family: ${({ theme }) => theme.fonts.kumbh};
    }
  `,
  ItemsContainer: styled.div`
    flex: 2;
    display: flex;
    padding: 1rem 0;
    margin: 0.5rem 1rem;
  `,
  Item: styled.div`
    display: flex;
  `,
  ImageContainer: styled.div`
    flex: 1;
    background-color: green;
  `,
  Info: styled.div`
    flex: 2;
    margin-left: 10px;
    display: flex;
    justify-content: center;

    .info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: yellow;

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
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
    }
  `
}

export const Cart = () => {
  return (
    <Base.Root>
      <Base.TitleContainer>
        <h4> Cart </h4>
      </Base.TitleContainer>
      <Base.ItemsContainer>
        <Base.Item>
          <Base.ImageContainer>
            <Image
              src='/image-product-1-thumbnail.jpg'
              width={50}
              height={50}
              alt='product'
            />
          </Base.ImageContainer>
          <Base.Info>
            <div className='info'>
              <h4> Fall Limited Edition Sneakers </h4>
              <p>
                $125.00 x 3 <span> $400.00 </span>
              </p>
            </div>
            <div className='delete'>
              <MdOutlineDelete size={20} />
            </div>
          </Base.Info>
        </Base.Item>
      </Base.ItemsContainer>
    </Base.Root>
  )
}
