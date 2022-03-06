import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import GroupDetail from '../components/organisms/GroupDetail'
import { GROUP_DETAIL_COMPONENT_TYPES } from '../constants/groupDetailComponentTypes'

const OpponentGroupDetail: VFC = () => {
  const router = useRouter()
  const groupId = router.query.groupId as string

  return (
    <GroupDetail
      componentType={GROUP_DETAIL_COMPONENT_TYPES[0]}
      groupId={groupId}
    />
  )
}

export default OpponentGroupDetail
