import React, { VFC } from 'react'
import { css } from '@emotion/css'

const ProfileDetail: VFC = () => {
  return (
    <div className={profileDetail}>
      <div className={profileDetailTitle}>
        <span>プロフィール情報</span>
      </div>
      {profileDetailInfos.map((profileDetailInfo, index) =>
        profileDetailElement({ profileDetailInfo, index })
      )}
    </div>
  )
}

const profileDetailElement = (args) => {
  const { profileDetailInfo, index } = args
  return (
    <div key={index} className={profileDetailRow}>
      <span className={profileDetailLabel}>{profileDetailInfo.label}</span>
      <span className={profileDetailValue}>{profileDetailInfo.value}</span>
    </div>
  )
}

const profileDetailInfos = [
  {
    label: '職　業',
    value: 'IT関係',
  },
  {
    label: '年　収',
    value: '500万円',
  },
  {
    label: '身　長',
    value: '175cm',
  },
  {
    label: '体　型',
    value: 'スレンダー',
  },
  {
    label: '趣　味',
    value: '音楽鑑賞、料理',
  },
  {
    label: '出　身',
    value: '神奈川',
  },
  {
    label: '血液型',
    value: 'B型',
  },
  {
    label: '最終学歴',
    value: '大学',
  },
  {
    label: '学校名',
    value: '能見野大学',
  },
  {
    label: '言　語',
    value: '日本語、英語',
  },
  {
    label: 'タバコ',
    value: '加熱式/電子タバコ',
  },
]

const profileDetail = css`
  padding: 3vw;
  padding-top: 0;
  color: #1c0208;
`

const profileDetailTitle = css`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const profileDetailRow = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const profileDetailLabel = css`
  font-size: 0.9rem;
`

const profileDetailValue = css`
  font-size: 0.9rem;
  color: #5f5f5f;
`

export default ProfileDetail
