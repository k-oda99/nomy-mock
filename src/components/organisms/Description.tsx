import { css } from '@emotion/css'
import React, { memo, VFC } from 'react'

const Description: VFC = memo(function Description() {
  return (
    <div className={styles.description}>
      <span>金土日祝</span>
      <span>ほか</span>
      <br />
      <span>渋谷/恵比寿</span>
    </div>
  )
})

const styles = {
  description: css`
    width: 100%;
    text-align: left;
    font-size: 0.5rem;
    padding: 1vw 0 1vw 3vw;
  `,
}

export default Description
