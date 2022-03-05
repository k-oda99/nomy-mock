import React, { memo, VFC } from 'react'
import Link from 'next/link'
import { css } from '@emotion/css'
import { User } from '../../types/User'

const GroupCardWide: VFC = memo(function GroupCardWide() {
  return (
    <Link href="/">
      <div className={styles.pick_up}>
        <div className={styles.pick_up_img}>
          {users.map((user) => imageWithProfileElement(user))}
        </div>
        <div className={styles.description}>
          <span>金土日祝</span>
          <span>ほか</span>&nbsp;
          <span>渋谷/恵比寿</span>
        </div>
      </div>
    </Link>
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

const users = [
  {
    id: '1',
    imageForCard: '/user1.png',
    imageForProfile: '',
    imageForIcon: '',
    name: 'あかね',
    age: '25',
    job: '歯科助手',
  },
  {
    id: '2',
    imageForCard: '/user2.png',
    imageForProfile: '',
    imageForIcon: '',
    name: 'かな',
    age: '27',
    job: '広告営業',
  },
  {
    id: '3',
    imageForCard: '/user3.png',
    imageForProfile: '',
    imageForIcon: '',
    name: 'ゆり',
    age: '25',
    job: '美容師',
  },
]

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
    & :nth-child(1) {
      font-size: 1rem;
    }
    & :nth-child(2) {
      font-size: 0.8rem;
    }
    & :nth-child(4) {
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
