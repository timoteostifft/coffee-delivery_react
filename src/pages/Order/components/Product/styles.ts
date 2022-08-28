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

  div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h4 {
      font-weight: 400;
      font-size: 16.8px;
      color: ${props => props.theme.title};
    }
  }

  span {
    position: relative;
    bottom: 16px;
    margin-left: auto;
    margin-right: 6px;
    color: ${props => props.theme.text};
    font-size: 17.8px;
    font-weight: bold;
  }
`