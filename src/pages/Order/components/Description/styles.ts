import styled from "styled-components";

export const DescriptionContainer = styled.div`
`

export const Card = styled.div`
  background: ${props => props.theme.card};

  border-radius: 0 30px 0 30px;

  margin-top: 1rem;
  padding: 2.4rem 2rem;

  display: flex;
  flex-direction: column;

  width: 436px;
  height: 498px;

  >button {
    padding: 12px;
    border: 0;
    text-align: center;
    color: ${props => props.theme.white};
    border-radius: 8px;
    background: ${props => props.theme["yellow-500"]};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      //
    }
  }

`

export const Title = styled.h3`
  font-family: 'Fredoka One', cursive;
  color: ${props => props.theme.subtitle};
  font-weight: 700;
  font-size: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`

export const Selected = styled.div`
  height: 16.4rem;
  overflow-y: auto;
`

export const Info = styled.div`
  height: 8rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  div:nth-child(3) {
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.title}
  }

  div {
    margin-top: 0.8rem;
  }
`

export const Empty = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
