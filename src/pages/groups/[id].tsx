import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import MainContainer from '../../components/atoms/MainContainer'
import LowerLevelHeader from '../../components/molecules/LowerLevelHeader'
import Content from '../../components/organisms/Content'
import { useGetUsers } from '../../hooks/useGetUsers'
import LowerLevelFooter from '../../components/molecules/LowerLevelFooter'

const GroupDetail: VFC = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { users } = useGetUsers(id)

  return (
    <MainContainer>
      <LowerLevelHeader />
      <Content users={users} />
      <LowerLevelFooter id={id} />
    </MainContainer>
  )
}
export default GroupDetail
