import React, { FC } from 'react'
import { css } from '@emotion/css'
import LowerLevelHeader from './LowerLevelHeader'

const LowerLevelLayout: FC = (props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <LowerLevelHeader />
      {children}
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  `,
}

export default LowerLevelLayout
