import React, { useEffect, useState, VFC } from 'react'
import { css } from '@emotion/css'
import UserIconWrapper from '../molecules/UserIconWrapper'
import { user } from '../../types/user'
import ProfileDetail from '../molecules/ProfileDetail'
import Profile from '../molecules/Profile'

const content = css`
  flex: 1;
  overflow-y: scroll;
`

interface Props {
  users: user[]
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
      <Profile users={users} selectedUser={selectedUser} />
      <ProfileDetail />
    </div>
  )
}
export default Content
