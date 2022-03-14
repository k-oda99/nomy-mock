import React, { memo, VFC } from 'react'
import { css } from '@emotion/css'
import { User } from '../../../types/User'
import GroupCardDescription from './GroupCardDescription'
import { Group } from '../../../types/Group'

type Props = {
  group: Group
}
const GroupCardWide: VFC<Props> = memo(function GroupCardWide(props) {
  const { group } = props
  const users = group.users
  return (
    <div className={styles.pick_up}>
      <div className={styles.pick_up_img}>
        {users?.map((user) => imageWithProfileElement(user))}
      </div>
      <GroupCardDescription
        cardType={'wide'}
        isMan={users && users[0].sex === 0}
      />
    </div>
  )
})

const imageWithProfileElement: VFC<User> = (user) => {
  return (
    <div key={user.id}>
      <img src={user.imageForCard} />
      <div className={styles.pick_up_user_profile}>
        <span>{user.name}</span>
        <span>({user.age})</span>
        <br />
        <span>{user.job}</span>
      </div>
    </div>
  )
}

const styles = {
  pick_up: css`
    width: 360px;
    text-align: right;
    border-radius: 16px;
    box-shadow: 10px 5px 10px rgba(18, 47, 61, 0.5);
  `,
  pick_up_img: css`
    display: flex;
    > div {
      position: relative;
    }
  `,
  pick_up_user_profile: css`
    width: 80px;
    position: absolute;
    left: 2%;
    bottom: 3%;
    color: #ffffff;
    text-align: left;
    line-height: 0.7rem;
    > :nth-child(1) {
      font-size: 1rem;
    }
    > :nth-child(2) {
      font-size: 0.8rem;
    }
    > :nth-child(4) {
      font-size: 0.6rem;
    }
  `,
  description: css`
    width: 100%;
    text-align: left;
    font-size: 0.5rem;
    padding: 1vw 0 1vw 3vw;
  `,
}

export default GroupCardWide
