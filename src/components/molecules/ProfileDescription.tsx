import React, { VFC } from 'react'
import { css } from '@emotion/css'
import FilterNoneIcon from '@mui/icons-material/FilterNone'
import { user } from '../../types/user'

const profile = css`
  padding: 3vw;
  color: #1c0208;
  position: relative;
`

const filterNoneIcon = css`
  position: absolute;
  top: 1vw;
  right: 1vw;
`

const profileName = css`
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 1vw;
`

const profileAge = css`
  font-size: 1.2rem;
  margin-right: 2vw;
`

const profileJob = css`
  font-size: 1.2rem;
`

const profileText = css`
  font-size: 0.85rem;
  line-height: 0.6rem;
  color: #665663;
`

interface Props {
  user: user
}
const ProfileDescription: VFC<Props> = (props) => {
  const { user } = props
  return (
    <div className={profile}>
      <FilterNoneIcon className={filterNoneIcon} />
      <span className={profileName}>{user.name}</span>
      <span className={profileAge}>({user.age})</span>
      <span className={profileJob}>{user.job}</span>
      <br />
      <p className={profileText}>渋谷近辺でよく飲んでます🍺</p>
      <p className={profileText}>
        気軽に飲める友達探してます。ノリがいい友達も多いので、
      </p>
      <p className={profileText}>是非みんなで飲みましょう！</p>
    </div>
  )
}
export default ProfileDescription
