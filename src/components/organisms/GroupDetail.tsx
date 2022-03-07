import React, { useEffect, useState, VFC } from 'react'
import UserIcons from './UserIcons'
import ProfileDetail from './ProfileDetail'
import Profile from './Profile'
import { css } from '@emotion/css'
import LowerLevelLayout from './LowerLevelLayout'
import GroupDetailFooter from './GroupDetailFooter'
import { useGetPickUpGroup, useGetRecommendGroup } from '../../hooks'
import useGetGoodGroup from '../../hooks/useGetGoodGroup'
import { GROUP_DETAIL_COMPONENT_TYPES } from '../../constants/groupDetailComponentTypes'

type Props = {
  groupId: string
  componentType: string
}
const GroupDetail: VFC<Props> = (props) => {
  const { groupId, componentType } = props
  const data =
    componentType === GROUP_DETAIL_COMPONENT_TYPES[0]
      ? useGetPickUpGroup(groupId)
      : componentType === GROUP_DETAIL_COMPONENT_TYPES[1]
      ? useGetRecommendGroup(groupId)
      : useGetGoodGroup(groupId)
  const users = data?.users

  const user = users ? users[0] : { id: '' }
  const [selectedUser, setSelectedUser] = useState(user.id)
  useEffect(() => {
    setSelectedUser(user.id)
  }, [user.id])

  return (
    <LowerLevelLayout>
      <div className={styles.content}>
        <UserIcons
          users={users}
          selectedUser={selectedUser}
          onChangeUserId={setSelectedUser}
        />
        {data?.users.map(
          (user) =>
            user.id === selectedUser && <Profile key={user.id} user={user} />
        )}
        <ProfileDetail />
      </div>
      <GroupDetailFooter groupId={groupId} componentType={componentType} />
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
