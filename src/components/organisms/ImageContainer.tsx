import { css } from '@emotion/css'
import React, { memo, VFC } from 'react'
import { Group } from '../../types/Group'
import { User } from '../../types/User'

type Props = {
  group: Group
}

const ImageContainer: VFC<Props> = memo(function ImageContainer(props) {
  const { group } = props
  const users = group.users
  if (users.length !== 3)
    return (
      <div className={styles.recommend_img}>
        {users.map((user) => imageWithProfileElement(user))}
      </div>
    )

  return (
    <div className={styles.recommend_img}>
      <div>
        {users.slice(0, 2).map((user) => imageWithProfileElement(user))}
      </div>
      <div>{imageWithProfileElement(users[2])}</div>
    </div>
  )
})

const imageWithProfileElement: VFC<User> = (user) => {
  return (
    <div key={user.id} className={styles.recommend_img_wrapper}>
      <img src={user.imageForCard} />
      <div className={styles.recommend_user_profile}>
        <span>{user.name}</span>
        <span>({user.age})</span>
        <br />
        <span>{user.job}</span>
      </div>
    </div>
  )
}

const styles = {
  recommend_img: css`
    display: flex;
    flex-wrap: wrap;
    > div {
      position: relative;
    }
  }`,
  recommend_img_wrapper: css`
    position: relative;
  }`,
  recommend_user_profile: css`
    width: 80px;
    position: absolute;
    left: 2%;
    bottom: 4%;
    color: #ffffff;
    text-align: left;
    line-height: 0.7rem;
    & :nth-child(1) {
      font-size: 0.9rem;
    }
    & :nth-child(2) {
      font-size: 0.6rem;
    }
    & :nth-child(4) {
      font-size: 0.4rem;
    }
  `,
}

export default ImageContainer
