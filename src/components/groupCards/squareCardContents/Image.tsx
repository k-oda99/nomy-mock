import React, { memo, VFC } from 'react'
import styles from '../../../styles/Home.module.css'
import { user } from '../../../types/user'

interface Props {
  user: user
}

export const Image: VFC<Props> = memo(function Image(props) {
  const { user } = props
  const { image, name, age, job } = user
  return (
    <>
      <div>
        <img src={image} />
        <div className={styles.recommend_user_profile}>
          <span>{name}</span>
          <span>({age})</span>
          <br />
          <span>{job}</span>
        </div>
      </div>
    </>
  )
})
