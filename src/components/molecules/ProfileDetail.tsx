/* eslint-disable no-irregular-whitespace */
import React, { VFC } from 'react'
import { css } from '@emotion/css'

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

const ProfileDetail: VFC = () => {
  return (
    <div className={profileDetail}>
      <div className={profileDetailTitle}>
        <span>プロフィール情報</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>職　業</span>
        <span className={profileDetailValue}>IT関係</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>年　収</span>
        <span className={profileDetailValue}>500万円</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>身　長</span>
        <span className={profileDetailValue}>175cm</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>体　型</span>
        <span className={profileDetailValue}>スレンダー</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>趣　味</span>
        <span className={profileDetailValue}>音楽鑑賞、料理</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>出　身</span>
        <span className={profileDetailValue}>神奈川</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>血液型</span>
        <span className={profileDetailValue}>B型</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>最終学歴</span>
        <span className={profileDetailValue}>大学</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>学校名</span>
        <span className={profileDetailValue}>能見野大学</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>言　語</span>
        <span className={profileDetailValue}>日本語、英語</span>
      </div>
      <div className={profileDetailRow}>
        <span className={profileDetailLabel}>タバコ</span>
        <span className={profileDetailValue}>加熱式/電子タバコ</span>
      </div>
    </div>
  )
}
export default ProfileDetail
