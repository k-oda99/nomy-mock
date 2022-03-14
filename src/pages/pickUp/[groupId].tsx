import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import GroupDetail from '../../components/organisms/GroupDetail/GroupDetail'
import { GROUP_DETAIL_COMPONENT_TYPES } from '../../constants/componentTypes'

const PickUpGroupDetail: VFC = () => {
  const router = useRouter()
  const { groupId } = router.query
  return (
    <GroupDetail
      componentType={GROUP_DETAIL_COMPONENT_TYPES[0]}
      groupId={groupId as string}
    />
  )
}

export default PickUpGroupDetail
