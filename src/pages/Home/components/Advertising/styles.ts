import styled from "styled-components";

export const AdvertisingContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  

  gap: 3rem;
  margin-bottom: 3rem;
  >div {
    >span {
      font-family: 'Fredoka One', cursive;
      color: ${props => props.theme.title};
      font-weight: 700;
      font-size: 40px;
      line-height: 3.4rem;
      text-shadow: 2px 3.2px rgba(0, 0, 0, 0.3);
    }
    p {
      margin-top: 1rem;
      font-size: 20px;
      color: ${props => props.theme.subtitle};
      margin-bottom: 1.4rem;
    }
    section {
      display: flex;
      width: 560px;
      flex-wrap: wrap;
      div {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-top: 1.4rem;
        min-width: 14.6rem;
        svg {
          color: white;
          font-size: 16px;
          box-sizing: content-box;
          padding: 8px;
          border-radius: 50%;
        }
      }
      div:nth-child(odd) {
        margin-right: 2rem;
      }
      div:nth-child(1) svg {
        background: ${props => props.theme["yellow-700"]}
      }
      div:nth-child(2) svg {
        background: ${props => props.theme.text}
      }
      div:nth-child(3) svg {
        background: ${props => props.theme["yellow-500"]}
      }
      div:nth-child(4) svg {
        background: ${props => props.theme["purple-500"]}
      }
    }
  }
  img {
    width: 476px;
    height: auto;
  }
`