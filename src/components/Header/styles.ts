import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1130px;
  padding: 14px 20px;

  
  z-index: 1;
  background: ${props => props.theme.background};

  position: fixed;
  top: 0;

  nav {
    display: flex;
    gap: 1rem;

    >span {
      background: ${props => props.theme["yellow-500"]};

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      width: 20px;
      height: 20px;
      font-size: 12px;
      border-radius: 50%;
      color: ${props => props.theme.white};
      font-weight: bold;

      position: relative;
      left: 13.8rem;
      top: -8px;
    }
    
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

    a:last-child {
      background: ${props => props.theme["yellow-200"]};
    }
  }
`