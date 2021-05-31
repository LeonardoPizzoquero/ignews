import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { getPrismicClient } from '../../services/prismic'
import { Container } from '../../styles/pages/posts'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <Container>
        <div>
          {posts.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const res = await prismic.query(
    Prismic.Predicates.at('document.type', 'post'),
    { fetch: ['post.title', 'post.content'], pageSize: 100 }
  )

  const posts = res.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find(content => content.type === 'paragraph')?.text ??
        '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    }
  })

  return {
    props: {
      posts
    },
    redirect: 30 * 60 /* 30 Minutos */
  }
}

export default Posts
