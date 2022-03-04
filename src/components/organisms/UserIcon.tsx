import React, { VFC } from 'react'
import { css } from '@emotion/css'
import { User } from '../../types/User'
import Image from '../atoms/Image'
import { Box } from '@mui/material'

interface Props {
  user: User
  selectedUser?: string
  setSelectedUser?
}

const UserIcon: VFC<Props> = (props) => {
  const { user, selectedUser, setSelectedUser } = props

  return (
    <Box
      key={user.id}
      onClick={() => setSelectedUser(user.id)}
      className={userIcon}
    >
      {(selectedUser === user.id && (
        <div className={userIconBackground}>
          <Image src={user.imageForProfile} className={userIconImage}></Image>
        </div>
      )) || (
        <Image src={user.imageForProfile} className={userIconImage}></Image>
      )}
    </Box>
  )
}

const userIconImage = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const userIcon = css`
  margin-right: 2vw;
`

const userIconBackground = css`
  width: 54px;
  height: 54px;
  background: linear-gradient(to bottom, #ce3b9d, #fc3f39, #fd925e, #fdc959);
  border-radius: 50%;
  padding: 1.5px;
`

export default UserIcon
