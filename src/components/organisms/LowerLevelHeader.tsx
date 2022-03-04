import React, { VFC } from 'react'
import Link from 'next/link'
import { css } from '@emotion/css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const LowerLevelHeader: VFC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.backButton}>
        <Link href="/">
          <ArrowBackIosNewIcon />
        </Link>
      </div>
      <div className={styles.action}>
        <MoreHorizIcon fontSize="large" />
      </div>
    </div>
  )
}

const styles = {
  header: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 42px;
  `,
  backButton: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 42px;
  `,
  action: css`
    width: 42px;
    height: 42px;
    margin: 1vw;
  `,
}

export default LowerLevelHeader
