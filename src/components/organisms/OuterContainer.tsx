import React, { FC } from 'react'
import { css } from '@emotion/css'

const OuterContainer: FC = (props) => {
  const { children } = props
  return <div className={container}>{children}</div>
}

const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export default OuterContainer
