import React, { Suspense } from 'react'

import graphql from 'babel-plugin-relay/macro'

import { usePreloadedQuery } from 'react-relay/hooks'

import UserInfo from '../components/UserInfo'

import './Home.css'

function Home({ preloadedQuery }) {
  const HomeQuery = graphql`
    query HomeQuery {
      users {
        data {
          ...UserInfo
        }
      }
    }
  `
  const data = usePreloadedQuery(HomeQuery, preloadedQuery)

  return (
    <div>
      <h1>Test Relay User App</h1>
      <div className='header'>
        <h2>About</h2>
        <p>This app fetches data using Relay + GraphQL from <a href='https://graphqlzero.almansi.me/' target='_blank' rel='noopener noreferrer'>GraphQLZero</a>.</p>
      </div>
      <h2>Sample Data</h2>
      <div className='container'>
      <Suspense fallback={<p>Loading...</p>}>
        {data?.users?.data.map((user, index) => (
          <div className='card' key={`user-info-${index}`}>
            <UserInfo user={user} />
          </div>
        ))}
      </Suspense>
      </div>
    </div>
  )
}

export default Home
