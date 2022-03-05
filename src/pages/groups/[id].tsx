import React, { useEffect, useState, VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useGetUsers } from '../../hooks'
import UserIcons from '../../components/organisms/UserIcons'
import ProfileDetail from '../../components/organisms/ProfileDetail'
import Profile from '../../components/organisms/Profile'
import { css } from '@emotion/css'
import LowerLevelLayout from '../../components/organisms/LowerLevelLayout'
import GroupDetailFooter from '../../components/organisms/GroupDetailFooter'

const GroupDetail: VFC = () => {
  const router = useRouter()
  const groupId = router.query.id as string
  const { data } = useGetUsers(groupId)

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
