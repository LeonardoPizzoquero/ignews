import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Header } from '.'
import dark from '../../styles/themes/dark'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/'
  })
}))

jest.mock('next-auth/client', () => ({
  useSession: () => [null, false]
}))

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <Header />
      </ThemeProvider>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})
