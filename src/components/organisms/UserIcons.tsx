import React, { VFC } from 'react'
import { css } from '@emotion/css'
import { User } from '../../types/User'
import UserIcon from './UserIcon'

interface Props {
  users: User[]
  selectedUser: string
  onChangeUserId: React.Dispatch<React.SetStateAction<string>>
}

const UserIcons: VFC<Props> = (props) => {
  const { users, selectedUser, onChangeUserId } = props

  return (
    <div className={styles.userIcons}>
      {users?.map((user) => (
        <UserIcon
          key={user.id}
          user={user}
          selectedUser={selectedUser}
          onClickUserIcon={onChangeUserId}
        />
      ))}
    </div>
  )
}

const styles = {
  userIcons: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    margin: 1vw 0;
    padding-left: 3vw;
  `,
}

export default UserIcons
