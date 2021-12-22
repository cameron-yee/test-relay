import React from 'react'

import graphql from 'babel-plugin-relay/macro'

import { useFragment } from 'react-relay'

import './UserPosts.css'


function UserPosts(props) {
  const posts = useFragment(
    graphql`
      fragment UserPosts on PostsPage {
        data {
          body
          comments {
            data {
              body
              email
            }
          }
          title
        }
      }
    `,
    props.posts
  )

  return (
    <div className='top-margin'>
      {posts.data.map((post, index) => (
        <div key={`post-${index}`}>
          <hr />
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <h3><strong>Comments</strong></h3>
          {
            post.comments.data.map((comment, i) => (
              <p key={`comment-${i}`}>
                <strong>{comment.email}: </strong>{comment.body}
              </p>
            ))
          }
        </div>
      ))}
    </div>
  )
}

export default UserPosts
