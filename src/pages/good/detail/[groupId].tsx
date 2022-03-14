import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import GroupDetail from '../../../components/organisms/GroupDetail/GroupDetail'
import { GROUP_DETAIL_COMPONENT_TYPES } from '../../../constants/componentTypes'

const GoodDetail: VFC = () => {
  const router = useRouter()
  const groupId = router.query.groupId as string

  return (
    <GroupDetail
      componentType={GROUP_DETAIL_COMPONENT_TYPES[2]}
      groupId={groupId}
    />
  )
}

export default GoodDetail
