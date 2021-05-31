import styled from 'styled-components'

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray800};
`

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
  > nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: ${props => props.theme.colors.gray300};

      transition: color 0.2s;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: ${props => props.theme.colors.white};
      }

      &.active {
        color: ${props => props.theme.colors.white};
        font-weight: bold;
      }

      &.active::after {
        content: '';

        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background-color: ${props => props.theme.colors.yellow500};
      }
    }
  }

  button {
    margin-left: auto;
  }
`
