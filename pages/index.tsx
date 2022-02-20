import { VFC } from 'react'
import { GroupCardSquare } from '../components/groupCards/GroupCardSquare'
import { GroupCardWide } from '../components/groupCards/GroupCardWide'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import { initializeApollo } from '../lib/apolloClient'
import { GetGroupsQuery, Groups } from '../types/generated/graphql'
import { GET_GROUPS } from '../queries/queries'
import { group } from '../types/group'
import { user } from '../types/user'

interface Props {
  groups: ({
    __typename?: 'groups'
  } & Pick<Groups, 'id' | 'users'>)[]
}
const Home: VFC<Props> = ({ groups }) => {
  const convertedGroups: group[] = groups.reduce<group[]>((output, group) => {
    const users = group.users
    const convertedUsers: user[] = users.reduce<user[]>((output2, user) => {
      const { name, age, job, image } = user
      const userObj: user = {} as user
      userObj.name = name
      userObj.age = age
      userObj.job = job
      userObj.image = image
      output2.push(userObj)
      return output2
    }, [])
    const convertedGroup: group = {} as group
    convertedGroup.id = group.id
    convertedGroup.users = convertedUsers
    output.push(convertedGroup)
    return output
  }, [])

  const leftContainer = convertedGroups?.slice(0, groups.length / 2)
  const rightContainer = convertedGroups?.slice(groups.length / 2, groups.length)

  return (
    <Layout title="nomy">
      <div className={styles.container}>
        <div className={styles.title}><p>注目のグループ</p></div>
          <GroupCardWide />
        <div className={styles.title}><p>あなたへのおすすめ</p></div>
        <div className={styles.recommend_container}>
          <div className={styles.recommend_wrapper}>
            {leftContainer?.map(group => {
              return (
                <GroupCardSquare group={group}/>
              )
            })}
          </div>
          <div className={styles.recommend_wrapper}>
            {rightContainer?.map(group => {
              return (
                <GroupCardSquare group={group}/>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<GetGroupsQuery>({
    query: GET_GROUPS,
  })
  return {
    props: { groups: data.groups },
    revalidate: 1,
  }
}
