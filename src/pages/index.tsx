import React, { VFC } from 'react'
import GroupCardWide from '../components/organisms/GroupCardWide'
import Layout from '../components/organisms/Layout'
// import { useGetGroups } from '../hooks'
import { css } from '@emotion/css'
import { Box, Grid } from '@mui/material'
import Link from 'next/link'
import ImageContainer from '../components/organisms/ImageContainer'
import GroupCardDescription from '../components/organisms/GroupCardDescription'
import {
  RECOMMEND_GROUP_DATA,
  PICK_UP_GROUP_DATA,
} from '../constants/opponentGroupData'

const Home: VFC = () => {
  // const { data } = useGetGroups()

  return (
    <Layout title="nomy">
      <div className={styles.container}>
        <div className={styles.title}>
          <p>注目のグループ</p>
        </div>
        <Link href="/">
          <GroupCardWide group={PICK_UP_GROUP_DATA} />
        </Link>
        <div className={styles.title}>
          <p>あなたへのおすすめ</p>
        </div>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          className={styles.recommend_container}
        >
          {RECOMMEND_GROUP_DATA?.map((group) => {
            return (
              <Grid key={group.id} item xs={5.8}>
                <Box className={styles.recommend}>
                  <Link
                    href={{ pathname: `/[groupId]`, query: group.id }}
                    as={`/${group?.id}`}
                  >
                    <div>
                      <ImageContainer group={group} />
                      <GroupCardDescription
                        cardType={'narrow'}
                        isMan={group.users[0].sex === 0}
                      />
                    </div>
                  </Link>
                </Box>
              </Grid>
            )
          })}
        </Grid>
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
    margin-left: -8px;
    margin-bottom: 8px;
    > :nth-child(4n + 3) {
      margin-top: -48px;
    }
  `,
  recommend: css`
    text-align: right;
    border-radius: 16px;
    box-shadow: 10px 5px 10px rgba(18, 47, 61, 0.3);
  `,
  description: css`
    width: 100%;
    text-align: left;
    font-size: 0.5rem;
    padding: 1vw 0 1vw 3vw;
  `,
}

export default Home
