import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import { Container, Content } from '../styles/pages/index'

interface HomeProps {
  product: {
    productId: string
    amount: string
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <Container>
        <Content>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </Content>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IXq4CH2gS5PpKklgKvjlF2e')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
