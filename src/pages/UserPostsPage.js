import React from 'react'
import { useMatch } from 'react-router'
import graphql from 'babel-plugin-relay/macro'

import { useLazyLoadQuery } from 'react-relay'

import { NavButton, UserPosts } from '../components'

export default function UserPostsPage() {
  const { params: { id }} = useMatch('/user/:id')

  const data = useLazyLoadQuery(
    graphql`
      query UserPostsPageQuery($id: ID!) {
        user(id: $id) {
          id
          name
          posts {
            ...UserPosts
          }
        }
      }
    `,
    { id }
  )

  return (
    <div>
      <h1>Posts by {data.user.name}</h1>
      <NavButton href='/'>Return to Home</NavButton>
      <UserPosts posts={data.user.posts} />
    </div>
  )
}
