import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import OuterContainer from '../../components/organisms/OuterContainer'
import LowerLevelHeader from '../../components/organisms/LowerLevelHeader'
import Content from '../../components/organisms/Content'
import LowerLevelFooter from '../../components/organisms/LowerLevelFooter'
import { useGetUsers } from '../../hooks'

const GroupDetail: VFC = () => {
  const router = useRouter()
  const groupId = router.query.id as string
  const { data } = useGetUsers(groupId)

  return (
    <OuterContainer>
      <LowerLevelHeader />
      <Content users={data} />
      <LowerLevelFooter groupId={groupId} />
    </OuterContainer>
  )
}
export default GroupDetail
