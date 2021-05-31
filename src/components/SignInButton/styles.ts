import styled from 'styled-components'

export const Button = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background-color: ${props => props.theme.colors.gray850};
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.white};
  font-weight: bold;

  transition: filter 0.2s;

  svg {
    width: 20px;
    height: 20px;

    &.closeIcon {
      margin-left: 1rem;
    }
  }

  svg:first-child {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
