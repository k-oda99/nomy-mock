import React, { VFC } from 'react'
import GroupCardWide from '../../components/organisms/GroupCardWide'
import Layout from '../../components/organisms/Layout'
// import { useGetGroups } from '../hooks'
import { Box, Container } from '@mui/material'
import Link from 'next/link'
import { OWN_GROUP_DATA } from '../../constants/ownGroupData'

const Good: VFC = () => {
  return (
    <Layout title="nomy">
      <Container sx={{ mt: 1 }}>
        {OWN_GROUP_DATA.map((group) => (
          <Link
            key={group.id}
            href={{ pathname: `/good/[groupId]`, query: group.id }}
            as={`/good/${group?.id}`}
          >
            <Box sx={{ p: 1 }}>
              <GroupCardWide group={group} />
            </Box>
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

export default Good
