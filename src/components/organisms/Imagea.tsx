import React, { memo, VFC } from 'react'
import styles from '../../styles/Home.module.css'
import { User } from '../../types/User'

interface Props {
  user: User
}

export const Image: VFC<Props> = memo(function Image(props) {
  const { user } = props
  const { imageForCard, name, age, job } = user
  return (
    <div>
      <img src={imageForCard} />
      <div className={styles.recommend_user_profile}>
        <span>{name}</span>
        <span>({age})</span>
        <br />
        <span>{job}</span>
      </div>
    </div>
  )
})
