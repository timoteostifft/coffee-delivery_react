import styled from "styled-components";

export const AddressContainer = styled.div`
display: flex;
flex-direction: column;
`


export const Card = styled.div`
  background: ${props => props.theme.card};

  border-radius: 8px;
  margin-top: 1rem;
  padding: 3rem;

  max-width: 640px;

  display: flex;
  flex-direction: column;

  gap: 1rem 0;

  div {
    gap: 1rem;
  }

  input {
    min-width: 50px;
    padding: 10px 14px;
    background: ${props => props.theme.input};
    border: 1.2px solid ${props => props.theme.button};
  }

  div:nth-child(4) {
    display: flex;

    input:nth-child(1) {
      flex: 30%;
    }

    input:nth-child(2) {
      flex: 70%;
    }
  }

  div:nth-child(5) {
    display: flex;

    input:nth-child(1) {
      flex: 3;
    }

    input:nth-child(2) {
      flex: 6.6;
    }

    input:nth-child(3) {
      flex: 0.2;
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.8rem;

  img {
    position: relative;
    bottom: 10px;
    max-width: 30px;
    height: auto;
  }

  div {
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

export const Title = styled.h3`
  font-family: 'Fredoka One', cursive;
  color: ${props => props.theme.subtitle};
  font-weight: 700;
  font-size: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`