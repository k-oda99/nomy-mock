import React, { VFC } from 'react'
import { css } from '@emotion/css'
import { user } from '../../types/user'

const userIcon = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 2vw;
`

const userIconBackground = css`
  width: 54px;
  height: 54px;
  background: linear-gradient(to bottom, #ce3b9d, #fc3f39, #fd925e, #fdc959);
  border-radius: 50%;
  padding: 1.5px;
`

interface Props {
  user: user
  selectedUser?: string
  setSelectedUser?
}

const UserIcon: VFC<Props> = (props) => {
  const { user, selectedUser, setSelectedUser } = props

  return (
    <div
      key={user.id}
      onClick={() => setSelectedUser(user.id)}
      className={userIcon}
    >
      {(selectedUser === user.id && (
        <div className={userIconBackground}>
          <img src={user.image_for_icon}></img>
        </div>
      )) || <img src={user.image_for_icon}></img>}
    </div>
  )
}
export default UserIcon
