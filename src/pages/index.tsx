import React, { VFC } from 'react'
import GroupCardWide from '../components/organisms/GroupCard/GroupCardWide'
import Layout from '../components/organisms/Layout/Layout'
// import { useGetGroups } from '../hooks'
import { css } from '@emotion/css'
import { Box, Container, Grid } from '@mui/material'
import Link from 'next/link'
import ImageContainer from '../components/organisms/Common/ImageContainer'
import GroupCardDescription from '../components/organisms/GroupCard/GroupCardDescription'
import {
  RECOMMEND_GROUP_DATA,
  PICK_UP_GROUP_DATA,
} from '../constants/opponentGroupData'
import { MEGA_MENU_ITEM_KEYS } from '../constants/megaMenuItems'
import { selectedMegaMenuItemKeyVar } from '../store/cache'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const indicatorStyles = {
  background: '#E5E5E5',
  width: 6.2,
  height: 6.2,
  display: 'inline-block',
  margin: '0 2px',
  borderRadius: '50%',
}

const Home: VFC = () => {
  // const { data } = useGetGroups()
  selectedMegaMenuItemKeyVar(MEGA_MENU_ITEM_KEYS[0])
  return (
    <Layout title="nomy">
      <Box sx={{ pt: 1 }} className={styles.container}>
        <div className={styles.title}>
          <p>注目のグループ</p>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          width={'100vw'}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{ ...indicatorStyles, background: '#C63F5A' }}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              )
            }
            return (
              <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            )
          }}
        >
          {PICK_UP_GROUP_DATA?.map((group) => (
            <Container key={group.id} sx={{ height: '240px' }}>
              <Link
                href={{
                  pathname: `/pickUp/[groupId]`,
                  query: group?.id,
                }}
                as={`/pickUp/${group?.id}`}
              >
                <Box>
                  <GroupCardWide group={group} />
                </Box>
              </Link>
            </Container>
          ))}
        </Carousel>
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
                    href={{
                      pathname: `/recommend/[groupId]`,
                      query: group?.id,
                    }}
                    as={`/recommend/${group?.id}`}
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
      </Box>
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
      margin: 0 0 1vh;
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
