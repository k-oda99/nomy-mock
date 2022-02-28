import React, { VFC } from 'react'
import { user } from '../../types/user'

interface Props {
  user: user
}
const ProfileImage: VFC<Props> = (props) => {
  const { user } = props
  return (
    <div key={user.id}>
      <img src={user.image_for_profile}></img>
    </div>
  )
}
export default ProfileImage
