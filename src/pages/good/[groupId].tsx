import React, { VFC } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Box, Container } from '@mui/material'
import Link from 'next/link'
import GroupCardWide from '../../components/organisms/GroupCardWide'
import useGetGoodList from '../../hooks/useGetGoodList'
import LowerLevelLayout from '../../components/organisms/LowerLevelLayout'

const GoodList: VFC = () => {
  const router = useRouter()
  const groupId = router.query.groupId as string
  const data = useGetGoodList(groupId)

  return (
    <LowerLevelLayout>
      <Container>
        {data?.map((group) => (
          <Link
            key={group.id}
            href={{ pathname: `/good/detail/[groupId]`, query: group.id }}
            as={`/good/detail/${group?.id}`}
          >
            <Box sx={{ pt: 1, pb: 1 }}>
              <GroupCardWide group={group} />
            </Box>
          </Link>
        ))}
      </Container>
    </LowerLevelLayout>
  )
}

export default GoodList
