import styled from "styled-components";

export const PaymentContainer = styled.div`
  background: ${props => props.theme.card};

  border-radius: 8px;
  margin-top: 1rem;
  padding: 2.4rem;

  max-width: 640px;

  display: flex;
  flex-direction: column;

  gap: 1rem 0;

  >div:last-child {
    display: flex;
    justify-content: space-between;

    button {
      width: 32%;
      height: 3rem;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      border: 0px;
      background: ${props => props.theme.button};
      border-radius: 8px;
      cursor: pointer;
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  img {
    position: relative;
    bottom: 10px;
    max-width: 30px;
    height: auto;
  }

  div {
    margin-left: 14px;
    span {
      font-size: 18.4px;
      color: ${props => props.theme.title}
    }
    p {
      margin-top: 4px;
      font-size: 16px;
      color: ${props => props.theme.subtitle};
    }
  }
`