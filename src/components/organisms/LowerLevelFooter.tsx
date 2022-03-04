import React, { VFC } from 'react'
import { css } from '@emotion/css'
import GoodButton from './GoodButton'

const footer = css`
  width: 100%;
  height: 179px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.5);
`

const footerUserIcon = css`
  display: flex;
  margin-top: 15px;
  > div {
    margin-right: 2vw;
  }
`

const footerDescription = css`
  font-size: 0.7rem;
  margin-top: -10px;
`

interface Props {
  groupId: string
}
const LowerLevelFooter: VFC<Props> = (props) => {
  const { groupId } = props
  return (
    <footer className={footer}>
      <div className={footerUserIcon}>
        <div>
          <img src="/user5-circle.png" />
        </div>
        <div>
          <img src="/user6-circle.png" />
        </div>
        <div>
          <img src="/user7-circle.png" />
        </div>
      </div>
      <div className={footerDescription}>
        <span>金土日祝 夜 ほか 渋谷/恵比寿 男性側 ¥10,000/人</span>
      </div>
      <GoodButton groupId={groupId} />
    </footer>
  )
}
export default LowerLevelFooter
