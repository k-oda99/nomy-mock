import React, { FC } from 'react'
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
import {
  MEGA_MENU_ITEM_KEYS,
  MEGA_MENU_ITEM_LABELS,
  MEGA_MENU_ITEM_LINKS,
} from '../../constants/megaMenuItems'
import { selectedMegaMenuItemKeyVar } from '../../store/cache'
import { useReactiveVar } from '@apollo/client'

type Props = {
  title?: string
}

type MegaMenuItemConditions = {
  megaMenuItemKey: string
  selectedFlg: boolean
}

const MegaMenu: FC<Props> = () => {
  const selectedMegaMenuItemKey = useReactiveVar(selectedMegaMenuItemKeyVar)

  const setSelectedMegaMenuItem = (itemKey) => {
    selectedMegaMenuItemKeyVar(itemKey)
  }
  return (
    <footer className={styles.mega_menu}>
      <Grid container className={styles.mega_menu_wrapper}>
        {MEGA_MENU_ITEM_KEYS.map((itemKey, index) => {
          const selectedFlg = selectedMegaMenuItemKey === itemKey
          const megaMenuConditions: MegaMenuItemConditions = {
            megaMenuItemKey: itemKey,
            selectedFlg,
          }
          return (
            <Link key={index} href={MEGA_MENU_ITEM_LINKS[index]}>
              <Grid
                item
                xs={3}
                onClick={() => setSelectedMegaMenuItem(itemKey)}
                className={styles.mega_menu_child}
              >
                {megaMenuIcons(megaMenuConditions)}
                <span
                  className={selectedFlg ? styles.mega_menu_label : undefined}
                >
                  {MEGA_MENU_ITEM_LABELS[index]}
                </span>
              </Grid>
            </Link>
          )
        })}
      </Grid>
    </footer>
  )
}

const megaMenuIcons: FC<MegaMenuItemConditions> = (megaMenuItemConditions) => {
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

export default MegaMenu
