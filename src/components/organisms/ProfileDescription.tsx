import React, { VFC } from 'react'
import { css } from '@emotion/css'
import FilterNoneIcon from '@mui/icons-material/FilterNone'
import { User } from '../../types/User'

type Props = {
  user: User
}
const ProfileDescription: VFC<Props> = (props) => {
  const { user } = props
  return (
    <div className={styles.profile}>
      <FilterNoneIcon className={styles.filterNoneIcon} />
      <span className={styles.profileName}>{user.name}</span>
      <span className={styles.profileAge}>({user.age})</span>
      <span className={styles.profileJob}>{user.job}</span>
      <br />
      <p className={styles.profileText}>渋谷近辺でよく飲んでます🍺</p>
      <p className={styles.profileText}>
        気軽に飲める友達探してます。ノリがいい友達も多いので、
      </p>
      <p className={styles.profileText}>是非みんなで飲みましょう！</p>
    </div>
  )
}

const styles = {
  profile: css`
    padding: 3vw;
    color: #1c0208;
    position: relative;
  `,
  filterNoneIcon: css`
    position: absolute;
    top: 1vw;
    right: 1vw;
  `,
  profileName: css`
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 1vw;
  `,
  profileAge: css`
    font-size: 1.2rem;
    margin-right: 2vw;
  `,
  profileJob: css`
    font-size: 1.2rem;
  `,
  profileText: css`
    font-size: 0.85rem;
    line-height: 0.6rem;
    color: #665663;
  `,
}

export default ProfileDescription
