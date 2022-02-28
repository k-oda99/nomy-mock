import React, { VFC } from 'react'
import { user } from '../../types/user'
import ProfileImage from '../atoms/ProfileImage'
import ProfileDescription from './ProfileDescription'

interface Props {
  user: user
}
const ProfileWrapper: VFC<Props> = (props) => {
  const { user } = props
  return (
    <>
      <ProfileImage user={user} />
      <ProfileDescription user={user} />
    </>
  )
}
export default ProfileWrapper
