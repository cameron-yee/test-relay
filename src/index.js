import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import graphql from 'babel-plugin-relay/macro'

import { loadQuery } from 'react-relay/hooks'

import reportWebVitals from './reportWebVitals'

import RelayEnvironment from './relay/RelayEnvironment'

import App from './App'

import './index.css'


const srcQuery = graphql`
  query srcQuery {
    users {
      data {
        id
        name
        posts {
          data {
            body
            comments {
              data {
                email
                body
              }
            }
            title
          }
        }
      }
    }
  }
`

const preloadedQuery = loadQuery(RelayEnvironment, srcQuery)

ReactDOM.render(
  <StrictMode>
    <App preloadedQuery={preloadedQuery} />
  </StrictMode>,
  document.getElementById('root')
)

/**
  If you want to start measuring performance in your app, pass a function
  to log results (for example: reportWebVitals(console.log))
  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals(console.log)
