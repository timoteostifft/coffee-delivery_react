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
`

export const RadioButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

const RADIO_BUTTON_COLORS = {
  default: 'button',
  hover: 'purple-200',
} as const

const RADIO_BUTTON_BORDERS = {
  default: 'button',
  hover: 'purple-500'
} as const

interface RadioButtonProps {
  background: keyof typeof RADIO_BUTTON_COLORS
  border: keyof typeof RADIO_BUTTON_BORDERS
}

export const RadioButton = styled.label<RadioButtonProps>`
  width: 40px;

  width: 32%;
  height: 3rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.2s;

  border: ${props => props.theme[RADIO_BUTTON_BORDERS[props.border]]} 0.8px solid;
  background: ${props => props.theme[RADIO_BUTTON_COLORS[props.background]]};
  border-radius: 8px;
  cursor: pointer;

  input {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
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