import React, { VFC } from 'react'
import { User } from '../../../types/User'
import ProfileDescription from './ProfileDescription'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

type Props = {
  user: User
}

const Profile: VFC<Props> = (props) => {
  const { user } = props
  return (
    <>
      <Carousel showStatus={false} showThumbs={false} showArrows={false}>
        {user.imagesForProfile.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </Carousel>
      <ProfileDescription user={user} />
    </>
  )
}
export default Profile
