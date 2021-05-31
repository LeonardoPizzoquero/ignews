import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  > div {
    max-width: 720px;
    margin: 5rem auto 0;

    a {
      display: block;

      & + a {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid ${props => props.theme.colors.gray700};
      }
      time {
        font-size: 1rem;
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.gray300};
      }

      strong {
        display: block;
        font-size: 1.5rem;
        margin-top: 1rem;
        line-height: 2rem;
        transition: color 0.2s;
      }

      p {
        color: ${props => props.theme.colors.gray300};
        margin-top: 0.5rem;
        line-height: 1.625rem;
      }

      &:hover strong {
        color: ${props => props.theme.colors.yellow500};
      }
    }
  }
`
