import React, { FC } from 'react'
import { css } from '@emotion/css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'
import Head from 'next/head'

type Props = {
  title?: string
}
const LowerLevelHeader: FC<Props> = ({ title = 'nomy' }) => {
  const router = useRouter()
  return (
    <div className={styles.header}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.backButton}>
        <ArrowBackIosNewIcon onClick={() => router.back()} />
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
    margin: 1vw;
  `,
  action: css`
    width: 42px;
    height: 42px;
    margin: 1vw;
  `,
}

export default LowerLevelHeader
