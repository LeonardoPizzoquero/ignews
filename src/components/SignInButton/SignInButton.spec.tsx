import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'
import { SignInButton } from '.'
import dark from '../../styles/themes/dark'

jest.mock('next-auth/client')
const useSessionMocked = mocked(useSession)

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <ThemeProvider theme={dark}>
        <SignInButton />
      </ThemeProvider>
    )
    expect(screen.getByText('Sign in with github')).toBeInTheDocument()
  })
  it('renders correctly when user is authenticated', () => {
    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'John Doe' }, expires: 'fake-expires' },
      false
    ])
    render(
      <ThemeProvider theme={dark}>
        <SignInButton />
      </ThemeProvider>
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
