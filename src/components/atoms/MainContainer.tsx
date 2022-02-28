import React, { FC } from 'react'
import { css } from '@emotion/css'

const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const MainContainer: FC = (props) => {
  const { children } = props
  return <div className={container}>{children}</div>
}
export default MainContainer
