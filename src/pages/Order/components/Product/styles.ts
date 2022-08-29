import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.hover};

  img {
    width: 80px;
    height: auto;
  }

  >div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h4 {
      font-weight: 400;
      font-size: 16.8px;
      color: ${props => props.theme.title};
    }

    nav {
      display: flex;

      button:nth-child(2) {
        background: ${props => props.theme.button};
        border: 0;
        padding: 8px;
        border-radius: 8px;

        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        font-size: 14px;
        color: ${props => props.theme.text};

        svg {
          color: ${props => props.theme["purple-500"]}
        }
      }
    }
  }

  >span {
    position: relative;
    bottom: 16px;
    margin-left: auto;
    margin-right: 6px;
    color: ${props => props.theme.text};
    font-size: 17.8px;
    font-weight: bold;
  }
`

export const CoffeeQuantity = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  background: ${props => props.theme.button};
  border-radius: 8px;
  margin-left: auto;
  margin-right: 10px;

  align-items: center;
  gap: 4px;

  color: ${props => props.theme.title};

  button {
    height: 34px;
    width: 24px;
    border: 0;
    background: 0;

    font-size: 16px;
    color: ${props => props.theme["purple-500"]};
    cursor: pointer;
  }

  button:nth-child(1) {
    font-size: 22px;
  }

  span {
    font-size: 14.6px;
  }
`