import React, { VFC } from 'react'
import { css } from '@emotion/css'
import { user } from '../../types/user'
import UserIcon from '../atoms/UserIcon'

const userIconWrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  margin: 1vw 0;
  padding-left: 3vw;
`

interface Props {
  users: user[]
  selectedUser: string
  setSelectedUser
}

const UserIconWrapper: VFC<Props> = (props) => {
  const { users, selectedUser, setSelectedUser } = props

  return (
    <div className={userIconWrapper}>
      {users?.map((user) => (
        <UserIcon
          key={user.id}
          user={user}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      ))}
    </div>
  )
}
export default UserIconWrapper
