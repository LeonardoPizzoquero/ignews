import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../../services/prismic'
import { Container } from '../../../styles/pages/post'

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const router = useRouter()
  const [session] = useSession()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])
  
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>
      <Container>
        <article>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className="previewContent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="continueReading">
            Wanna continue reading?
            <Link href="/">
              <a href="">Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const prismic = getPrismicClient()

  const res = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(res.data.title),
    content: RichText.asHtml(res.data.content.splice(0, 3)),
    updatedAt: new Date(res.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return { props: { post }, redirect: 30 * 60 /* 30 Minutos */ }
}

export default PostPreview
