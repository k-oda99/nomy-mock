import React, { VFC } from 'react'
import GroupCardSquare from '../components/organisms/GroupCardSquare'
import GroupCardWide from '../components/organisms/GroupCardWide'
import Layout from '../components/organisms/Layout'
// import { useGetGroups } from '../hooks'
import { css } from '@emotion/css'

const Home: VFC = () => {
  // const { data } = useGetGroups()

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
          {data?.map((group) => {
            return <GroupCardSquare key={group.id} group={group} />
          })}
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  container: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
  `,
  title: css`
    width: 100%;
    text-align: left;
    padding-left: 5vw;
    box-sizing: border-box;
    > p {
      margin: 2vh 0 1vh;
      font-weight: bold;
      font-size: 1.2rem;
      color: #000000;
    }
  `,
  recommend_container: css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 3vw;
    box-sizing: border-box;
    > :nth-child(4n + 1) {
      height: 170px;
    }
    > :nth-child(4n + 2) {
      height: 213px;
    }
    > :nth-child(4n + 3) {
      height: 213px;
      margin-top: -43px;
    }
    > :nth-child(4n + 4) {
      height: 170px;
    }
  `,
}

const data = [
  {
    id: '1',
    users: [
      {
        id: '1',
        imageForCard: '/user1-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '2',
        imageForCard: '/user3-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '2',
    users: [
      {
        id: '3',
        imageForCard: '/user1-3.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '4',
        imageForCard: '/user2-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'かな',
        age: '27',
        job: '広告営業',
      },
      {
        id: '5',
        imageForCard: '/user3-3.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '3',
    users: [
      {
        id: '6',
        imageForCard: '/user1-3.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '7',
        imageForCard: '/user3-4.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
      {
        id: '8',
        imageForCard: '/user2-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'かな',
        age: '27',
        job: '広告営業',
      },
      {
        id: '9',
        imageForCard: '/user4.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'えみり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '4',
    users: [
      {
        id: '10',
        imageForCard: '/user1-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '11',
        imageForCard: '/user3-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '5',
    users: [
      {
        id: '12',
        imageForCard: '/user1-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '13',
        imageForCard: '/user3-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '6',
    users: [
      {
        id: '14',
        imageForCard: '/user1-3.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '15',
        imageForCard: '/user2-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'かな',
        age: '27',
        job: '広告営業',
      },
      {
        id: '16',
        imageForCard: '/user3-3.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '7',
    users: [
      {
        id: '17',
        imageForCard: '/user1-3.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '18',
        imageForCard: '/user3-4.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
      {
        id: '19',
        imageForCard: '/user2-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'かな',
        age: '27',
        job: '広告営業',
      },
      {
        id: '20',
        imageForCard: '/user4.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'えみり',
        age: '25',
        job: '美容師',
      },
    ],
  },
  {
    id: '8',
    users: [
      {
        id: '21',
        imageForCard: '/user1-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'あかね',
        age: '25',
        job: '歯科助手',
      },
      {
        id: '22',
        imageForCard: '/user3-2.png',
        imageForProfile: '',
        imageForIcon: '',
        name: 'ゆり',
        age: '25',
        job: '美容師',
      },
    ],
  },
]

export default Home
