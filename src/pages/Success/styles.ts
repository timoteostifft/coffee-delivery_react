import styled from "styled-components";

export const SuccessContainer = styled.main`
  margin-top: 8rem;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 8rem;

  section {
    width: 100%;
    margin-top: 1rem;
    >span {
      color: ${props => props.theme["yellow-700"]};
      font-weight: 500;
      font-family: 'Fredoka One', cursive;
      font-size: 26px;
    }

    p {
      font-size: 18px;
      margin-top: 0.4rem;
      color: ${props => props.theme.text};
    }

    >div {
      margin-top: 1rem;
      background-image: linear-gradient(110deg, #c47f17 0%, #dbac2c 33%, #8047f8 61%, #4b2995 99%);
      position: relative;

      padding: 1px;
      border-radius: 6px 28px 6px 28px;

      >div {
        border-radius: 4px 26px 4px 26px;
        background: ${props => props.theme.background};
        padding: 2rem;
        height: 100%;

        div:nth-child(1) {
          svg {
            background: ${props => props.theme["purple-500"]};
          }
        }
        div:nth-child(2) {
          svg {
            background: ${props => props.theme["yellow-500"]};
          }
        }
        div:nth-child(3) {
          svg {
            background: ${props => props.theme["yellow-700"]};
          }
        }
      }
    }
  }
`

export const Info = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;

    svg {
      min-width: 24px;
      min-height: 24px;
      padding: 3px;
      color: white;
      border-radius: 50%;
    }

    

    div {
      display: flex;
      flex-direction: column;
    }

    & + & {
      margin-top: 1rem;
    }
`