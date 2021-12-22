import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'

import NavButton from  './NavButton'

import './UserInfo.css'


function UserInfo(props) {
  const user = useFragment(
    graphql`
      fragment UserInfo on User {
        id
        name
      }
    `,
    props.user
  )

  return (
    <div className="user-info">
      <h3>Query result</h3>
      <p><span className="bold">User ID:</span> {user.id}</p>
      <p><span className="bold">User Name:</span> {user.name}</p>
      <NavButton href={`/user/${user.id}`}>Profile</NavButton>
    </div>
  )
}

export default UserInfo
