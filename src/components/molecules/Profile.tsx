import React, { VFC } from 'react'
import { user } from '../../types/user'
import ProfileWrapper from './ProfileWrapper'

interface Props {
  users: user[]
  selectedUser: string
}
const Profile: VFC<Props> = (props) => {
  const { users, selectedUser } = props
  return (
    <>
      {users?.map(
        (user) =>
          user.id === selectedUser && (
            <ProfileWrapper key={user.id} user={user} />
          )
      )}
    </>
  )
}
export default Profile
