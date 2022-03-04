import React, { useEffect, useState, VFC } from 'react'
import { css } from '@emotion/css'
import UserIconWrapper from './UserIconWrapper'
import { User } from '../../types/User'
import ProfileDetail from './ProfileDetail'
import Profile from './Profile'

interface Props {
  users: User[]
}
const Content: VFC<Props> = (props) => {
  const { users } = props
  const user = users ? users[0] : { id: '' }
  const [selectedUser, setSelectedUser] = useState(user.id)
  useEffect(() => {
    setSelectedUser(user.id)
  }, [user.id])
  return (
    <div className={content}>
      <UserIconWrapper
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      {users?.map(
        (user) =>
          user.id === selectedUser && <Profile key={user.id} user={user} />
      )}
      <ProfileDetail />
    </div>
  )
}

const content = css`
  flex: 1;
  overflow-y: scroll;
`

export default Content
