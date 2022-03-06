import React, { useEffect, useState, VFC } from 'react'
import UserIcons from './UserIcons'
import ProfileDetail from './ProfileDetail'
import Profile from './Profile'
import { css } from '@emotion/css'
import LowerLevelLayout from './LowerLevelLayout'
import GroupDetailFooter from './GroupDetailFooter'
import { useGetUsers } from '../../hooks'
import useGetGoodGroup from '../../hooks/useGetGoodGroup'

type Props = {
  componentType: string
  groupId: string
}
const GroupDetail: VFC<Props> = (props) => {
  const { groupId, componentType } = props
  const data =
    componentType === 'opponentGroupDetail'
      ? useGetUsers(groupId)
      : useGetGoodGroup(groupId)

  const user = data ? data[0] : { id: '' }
  const [selectedUser, setSelectedUser] = useState(user.id)
  useEffect(() => {
    setSelectedUser(user.id)
  }, [user.id])

  return (
    <LowerLevelLayout>
      <div className={styles.content}>
        <UserIcons
          users={data}
          selectedUser={selectedUser}
          onChangeUserId={setSelectedUser}
        />
        {data?.map(
          (user) =>
            user.id === selectedUser && <Profile key={user.id} user={user} />
        )}
        <ProfileDetail />
      </div>
      <GroupDetailFooter groupId={groupId} />
    </LowerLevelLayout>
  )
}

const styles = {
  content: css`
    flex: 1;
    overflow-y: scroll;
  `,
}

export default GroupDetail
