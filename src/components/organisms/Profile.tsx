import React, { VFC } from 'react'
import { User } from '../../types/User'
import ProfileDescription from './ProfileDescription'
import Image from '../atoms/Image'

interface Props {
  user: User
}
const Profile: VFC<Props> = (props) => {
  const { user } = props
  return (
    <>
      <Image src={user.imageForProfile} />
      <ProfileDescription user={user} />
    </>
  )
}
export default Profile
