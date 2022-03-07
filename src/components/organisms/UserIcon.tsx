import React, { VFC } from 'react'
import { css } from '@emotion/css'
import { User } from '../../types/User'

interface Props {
  user: User
  selectedUser?: string
  onClickUserIcon?: React.Dispatch<React.SetStateAction<string>>
}

const UserIcon: VFC<Props> = (props) => {
  const { user, selectedUser, onClickUserIcon } = props

  return (
    <div
      key={user.id}
      onClick={() => onClickUserIcon(user.id)}
      className={styles.userIcon}
    >
      {(selectedUser === user.id && (
        <div className={styles.userIconBackground}>
          <img
            src={user.imagesForProfile[0]}
            className={styles.userIconImage}
          />
        </div>
      )) || (
        <img src={user.imagesForProfile[0]} className={styles.userIconImage} />
      )}
    </div>
  )
}

const styles = {
  userIconImage: css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `,
  userIcon: css`
    margin-right: 2vw;
  `,
  userIconBackground: css`
    width: 51px;
    height: 51px;
    background: linear-gradient(to bottom, #ce3b9d, #fc3f39, #fd925e, #fdc959);
    border-radius: 50%;
    padding: 1.5px;
  `,
}

export default UserIcon
