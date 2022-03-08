import React, { VFC } from 'react'
import { css } from '@emotion/css'
import { User } from '../../types/User'
import UserIcon from './UserIcon'
import { USER_ICONS_COMPONENT_TYPES } from '../../constants/componentTypes'

interface Props {
  componentType: string
  users: User[]
  selectedUser?: string
  onChangeUserId?: React.Dispatch<React.SetStateAction<string>>
}

const UserIcons: VFC<Props> = (props) => {
  const { componentType, users, selectedUser, onChangeUserId } = props

  return (
    <div
      className={
        componentType === USER_ICONS_COMPONENT_TYPES[0]
          ? styles.userIconsForProfile
          : styles.userIconsForChat
      }
    >
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

const userIcons = css`
  display: flex;
  align-items: center;
  height: 55px;
  margin: 1vw 0;
  box-sizing: border-box;
`

const styles = {
  userIconsForProfile: css`
    ${userIcons}
    width: 100%;
    padding-left: 3vw;
  `,
  userIconsForChat: css`
    ${userIcons}
    min-width: 80px;
    position: relative;
    > :nth-child(2) {
      position: absolute;
      top: 10px;
      left: 4vw;
      border: solid 2px #fff;
      border-radius: 50%;
    }
  `,
}

export default UserIcons
