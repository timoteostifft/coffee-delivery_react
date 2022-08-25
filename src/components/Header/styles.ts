import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;

  >img {
    width: 80px;
    height: auto;
  }

  nav {
    display: flex;
    gap: 1rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${props => props.theme["purple-200"]};
      padding: 8px 8px;
      border-radius: 8px;

      gap: 0.6rem;

      text-decoration: 0;
      color: ${props => props.theme["purple-700"]};
      font-size: 14px;
    }

    a:nth-child(2) {
      background: ${props => props.theme["yellow-200"]};
    }
  }

`