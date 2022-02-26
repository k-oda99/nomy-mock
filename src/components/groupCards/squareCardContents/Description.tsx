import React, { memo, VFC } from 'react'
import styles from '../../../styles/Home.module.css'

export const Description: VFC = memo(function Description() {
  return (
    <>
      <div className={styles.description}>
        <span>金土日祝</span>
        <span>ほか</span>
        <br />
        <span>渋谷/恵比寿</span>
      </div>
    </>
  )
})
