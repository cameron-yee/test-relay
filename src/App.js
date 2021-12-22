import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { RelayEnvironmentProvider } from 'react-relay/hooks'

import RelayEnvironment from './relay/RelayEnvironment'

import Home from './pages'
import UserPostsPage from './pages/UserPostsPage'

import './App.css'

function App({ preloadedQuery }) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<p>Loading...</p>}>
        <div className='layout'>
          <Router>
            <Routes>
              <Route
                exact
                path='/'
                element={<Home preloadedQuery={preloadedQuery} />}
              />
              <Route
                element={<UserPostsPage />}
                path='/user/:id'
              />
            </Routes>
          </Router>
        </div>
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App
