import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 256px;
  height: 300px;

  border-radius: 0 30px 0 30px;
  background: ${props => props.theme.card};
  margin-bottom: 4rem;

  box-shadow: rgba(0, 0, 0, 0.15) 4px 8px 8px 0px;

  img {
    position: relative;
    bottom: 1.6rem;

    width: 120px;
    height: auto;
  }

  section {
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    width: 100%;
    margin-top: -0.6rem;  
  }

  h4 {
    margin-top: 1rem;
    font-family: 'Fredoka One', cursive;
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.subtitle};
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  }

  p {
    padding: 0 10px;
    margin-top: 0.6rem;
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.label};
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  }
`

export const CoffeeCategory = styled.span`
  background: ${props => props.theme["yellow-200"]};
  color: ${props => props.theme["yellow-700"]};
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 11.8px;
  font-weight: bold;
`

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;

  margin-top: 2rem;
  width: 100%;
  padding: 0 20px;

  >span {
    font-size: 14px;
    margin-left: 8px;
    strong {
      margin-left: 6px;
      font-size: 22px;
      color: ${props => props.theme.text};
    }
  }

  >button {
    border: 0;
    background: ${props => props.theme["purple-700"]};
    height: 34px;
    width: 34px;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    svg {
      color: ${props => props.theme.white};
    }
}
`

export const CoffeeQuantity = styled.div`
  display: flex;
  background: ${props => props.theme.button};
  border-radius: 8px;
  margin-left: auto;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
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