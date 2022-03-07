import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import GroupDetail from '../../components/organisms/GroupDetail'
import { GROUP_DETAIL_COMPONENT_TYPES } from '../../constants/groupDetailComponentTypes'

const RecommendGroupDetail: VFC = () => {
  const router = useRouter()
  const { groupId } = router.query
  return (
    <GroupDetail
      componentType={GROUP_DETAIL_COMPONENT_TYPES[1]}
      groupId={groupId as string}
    />
  )
}

export default RecommendGroupDetail
