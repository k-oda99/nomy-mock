import { useState, VFC } from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { initializeApollo } from '../../lib/apolloClient'
import { GET_GROUPBY_ID, GET_GROUPIDS } from '../../queries/queries'
import {
  GetGroupByIdQuery,
  GetGroupIdsQuery,
  Groups,
} from '../../types/generated/graphql'
import styles from '../../styles/GroupDetail.module.css'
import { goodStatusVar } from '../../cache'

interface Props {
  group: Groups
}

const UserDetail: VFC<Props> = ({ group }) => {
  const [goodStatus, setGoodStatus] = useState(goodStatusVar()[group?.id] || false)

  const onClickGoodButton = () => {
    goodStatusVar()[group?.id] = !goodStatus
    setGoodStatus(!goodStatus)
  }
  return (
    <div className={styles.container}>
      {!goodStatus && <button onClick={onClickGoodButton} className={styles.good_button}>いいね！！</button>}
      {goodStatus && <button onClick={onClickGoodButton} className={styles.good_done_button}>いいね済み</button>}
      <Link href="/">
        <button className={styles.back_button}>戻る</button>
      </Link>
    </div>
  )
}
export default UserDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetGroupIdsQuery>({
    query: GET_GROUPIDS,
  })
  const paths = data.groups.map((group) => ({
    params: {
      id: group.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetGroupByIdQuery>({
    query: GET_GROUPBY_ID,
    variables: { id: params.id },
  })
  return {
    props: {
      group: data.groups_by_pk,
    },
    revalidate: 1,
  }
}
