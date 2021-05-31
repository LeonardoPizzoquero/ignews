import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import { SubscribeButton } from '.'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/themes/dark'

jest.mock('next-auth/client')
jest.mock('next/router')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <ThemeProvider theme={dark}>
        <SubscribeButton />
      </ThemeProvider>
    )
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })
  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <ThemeProvider theme={dark}>
        <SubscribeButton />
      </ThemeProvider>
    )

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })
  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'John Doe', email: 'john.doe@gmail.com' },
        expires: 'fake-expires',
        activeSubscription: 'fake-active-subscription'
      },
      false
    ])
    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(
      <ThemeProvider theme={dark}>
        <SubscribeButton />
      </ThemeProvider>
    )

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})
