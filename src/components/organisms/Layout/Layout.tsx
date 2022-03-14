import React, { FC } from 'react'
import Head from 'next/head'
import { css } from '@emotion/css'
import MegaMenu from './MegaMenu'

type Props = {
  title?: string
}

const Layout: FC<Props> = ({ children, title = 'nomy' }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>{children}</main>
      <MegaMenu />
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `,
  main: css`
    flex: 1;
    overflow-x: visibe;
    overflow-y: scroll;
  `,
}

export default Layout
