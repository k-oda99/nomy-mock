import React, { VFC } from 'react'
import { User } from '../../types/User'
import ProfileDescription from './ProfileDescription'

type Props = {
  user: User
}
const Profile: VFC<Props> = (props) => {
  const { user } = props
  return (
    <>
      <img src={user.imageForProfile} />
      <ProfileDescription user={user} />
    </>
  )
}
export default Profile
