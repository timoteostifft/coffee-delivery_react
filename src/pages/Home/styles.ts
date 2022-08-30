import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 8rem;
  padding: 0 20px;

h2 {
  margin-bottom: 4rem;
  font-family: 'Fredoka One', cursive;
  color: ${props => props.theme.title};
  font-weight: 700;
  font-size: 30px;
  text-shadow: 2px 3.2px rgba(0, 0, 0, 0.3);
}
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;

  @media (max-width: 847px) {
    justify-content: center;
  }

`