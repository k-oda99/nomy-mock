import React, { ReactNode, useState, VFC } from 'react'
import Head from 'next/head'
import { css } from '@emotion/css'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SportsBarIcon from '@mui/icons-material/SportsBar'
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined'
import ForumIcon from '@mui/icons-material/Forum'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import WidgetsIcon from '@mui/icons-material/Widgets'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import { Grid } from '@mui/material'
import Link from 'next/link'

type Props = {
  children: ReactNode
  title: string
}

type MegaMenuItemConditions = {
  megaMenuItemKey: string
  selectedFlg: boolean
}

const MEGA_MENU_ITEM_KEYS = ['home', 'good', 'chat', 'myMenu']
const MEGA_MENU_ITEM_LABELS = ['ホーム', 'いいね', 'やりとり', 'マイメニュー']
const MEGA_MENU_ITEM_LINKS = ['/', '/', '/', '/']

const Layout: VFC<Props> = ({ children, title = 'nomy' }) => {
  const [selectedMegaMenuItem, setSelectedMegaMenuItem] = useState(
    MEGA_MENU_ITEM_KEYS[0]
  )
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.mega_menu}>
        <Grid container className={styles.mega_menu_wrapper}>
          {MEGA_MENU_ITEM_KEYS.map((item, index) => {
            const selectedFlg = selectedMegaMenuItem === item
            const megaMenuConditions: MegaMenuItemConditions = {
              megaMenuItemKey: item,
              selectedFlg,
            }
            return (
              <Link key={index} href={MEGA_MENU_ITEM_LINKS[index]}>
                <Grid
                  item
                  xs={3}
                  onClick={() => setSelectedMegaMenuItem(item)}
                  className={styles.mega_menu_child}
                >
                  {megaMenuIcons(megaMenuConditions)}
                  <span className={selectedFlg && styles.mega_menu_label}>
                    {MEGA_MENU_ITEM_LABELS[index]}
                  </span>
                </Grid>
              </Link>
            )
          })}
        </Grid>
      </footer>
    </div>
  )
}

const megaMenuIcons: VFC<MegaMenuItemConditions> = (megaMenuItemConditions) => {
  const { megaMenuItemKey, selectedFlg } = megaMenuItemConditions
  if (megaMenuItemKey === 'home') {
    return selectedFlg ? <HomeIcon /> : <HomeOutlinedIcon />
  } else if (megaMenuItemKey === 'good') {
    return selectedFlg ? <SportsBarIcon /> : <SportsBarOutlinedIcon />
  } else if (megaMenuItemKey === 'chat') {
    return selectedFlg ? <ForumIcon /> : <ForumOutlinedIcon />
  } else if (megaMenuItemKey === 'myMenu') {
    return selectedFlg ? <WidgetsIcon /> : <WidgetsOutlinedIcon />
  }
}

const styles = {
  container: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `,
  main: css`
    flex: 1;
    overflow-x: visibe;
    overflow-y: scroll;
  `,
  mega_menu: css`
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
  `,
  mega_menu_wrapper: css`
    display: flex;
  `,
  mega_menu_child: css`
    height: 93px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
  `,
  mega_menu_label: css`
    font-weight: bold;
  `,
}

export default Layout
