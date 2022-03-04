import React, { memo, VFC } from 'react'
import styles from '../../styles/Home.module.css'
import { Image } from './Imagea'
import { Group } from '../../types/Group'

interface Props {
  group: Group
}

export const ImageContainer: VFC<Props> = memo(function ImageContainer(props) {
  const { group } = props
  const users = group.users
  if (users.length !== 3)
    return (
      <div className={styles.recommend_img}>
        {users.map((user, index) => (
          <Image key={index} user={user} />
        ))}
      </div>
    )

  return (
    <div className={styles.recommend_img}>
      <div className={styles.recommend_img_wrapper}>
        {users.slice(0, 2).map((user, index) => (
          <Image key={index} user={user} />
        ))}
      </div>
      <div>
        <Image user={users[2]} />
      </div>
    </div>
  )
})
