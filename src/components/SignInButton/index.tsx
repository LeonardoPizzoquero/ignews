import React from 'react'
import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from './styles'

export const SignInButton: React.FC = () => {
  const [session] = useSession()

  return session ? (
    <Button type="button" onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className="closeIcon" />
    </Button>
  ) : (
    <Button type="button" onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with github
    </Button>
  )
}
