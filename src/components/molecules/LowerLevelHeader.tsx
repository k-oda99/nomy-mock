import React, { VFC } from 'react'
import Link from 'next/link'
import { css } from '@emotion/css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const header = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
`

const backButton = css`
  margin: 2vw 0 0 1vw;
`

const action = css`
  width: 42px;
  height: 42px;
  margin: 1vw;
`

const LowerLevelHeader: VFC = () => {
  return (
    <div className={header}>
      <div className={backButton}>
        <Link href="/">
          <ArrowBackIosNewIcon />
        </Link>
      </div>
      <div className={action}>
        <MoreHorizIcon fontSize="large" />
      </div>
    </div>
  )
}
export default LowerLevelHeader
