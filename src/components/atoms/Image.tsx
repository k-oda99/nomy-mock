import React, { VFC } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement>

const ProfileImage: VFC<Props> = (props) => {
  return (
    <div>
      <img {...props}></img>
    </div>
  )
}

export default ProfileImage
