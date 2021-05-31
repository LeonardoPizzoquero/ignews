import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  article {
    max-width: 720;
    margin: 5rem auto 0;

    > h1 {
      font-size: 3.5rem;
      font-weight: 900;
    }

    > time {
      display: block;
      font-size: 1rem;
      color: ${props => props.theme.colors.gray300};
      margin-top: 1.5rem;
    }

    > div {
      margin-top: 2rem;
      line-height: 2rem;
      font-size: 1.125rem;
      color: ${props => props.theme.colors.gray100};

      p,
      ul {
        margin: 1.5rem 0;
      }

      ul {
        padding-left: 1.5rem;

        li {
          margin: 0.5rem 0;
        }
      }

      &.previewContent {
        background: linear-gradient(
          ${props => props.theme.colors.gray100},
          transparent
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .continueReading {
      padding: 2rem;
      text-align: center;
      background-color: ${props => props.theme.colors.gray850};
      border-radius: 100px;
      font-size: 1.25rem;
      font-weight: bold;
      margin: 4rem 0 2rem;

      a {
        color: ${props => props.theme.colors.yellow500};
        margin-left: 0.5rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
