import React, { VFC } from 'react'
import { GroupCardSquare } from '../components/organisms/GroupCardSquare'
import { GroupCardWide } from '../components/organisms/GroupCardWide'
import { Layout } from '../components/Layout'
import { useGetGroups } from '../hooks/useGetGroups'
import styles from '../styles/Home.module.css'

const Home: VFC = () => {
  const { groups } = useGetGroups()
  // 要素の高さが一定ではない一覧表示なので、左右でwrapする
  const leftContainer = groups?.slice(0, groups.length / 2)
  const rightContainer = groups?.slice(groups.length / 2, groups.length)

  return (
    <Layout title="nomy">
      <div className={styles.container}>
        <div className={styles.title}>
          <p>注目のグループ</p>
        </div>
        <GroupCardWide />
        <div className={styles.title}>
          <p>あなたへのおすすめ</p>
        </div>
        <div className={styles.recommend_container}>
          <div className={styles.recommend_wrapper}>
            {leftContainer?.map((group) => {
              return <GroupCardSquare key={group.id} group={group} />
            })}
          </div>
          <div className={styles.recommend_wrapper}>
            {rightContainer?.map((group) => {
              return <GroupCardSquare key={group.id} group={group} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home
