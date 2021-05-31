import styled from 'styled-components'

export const Button = styled.button`
  height: 4rem;
  width: 260px;
  border: 0;
  border-radius: 2rem;
  background-color: ${props => props.theme.colors.yellow500};
  color: ${props => props.theme.colors.gray900};
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
