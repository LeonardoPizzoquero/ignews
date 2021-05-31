import React from 'react'
import { api } from '../../services/api'
import { signIn, useSession } from 'next-auth/client'
import { getStripeJs } from '../../services/stripe-js'
import { Button } from './styles'
import { useRouter } from 'next/router'

export const SubscribeButton: React.FC = () => {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const res = await api.post('/subscribe')

      const { sessionId } = res.data

      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Button type="button" onClick={handleSubscribe}>
      Subscribe now
    </Button>
  )
}
