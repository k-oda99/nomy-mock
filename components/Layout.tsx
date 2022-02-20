import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'


interface Props {
  children: ReactNode
  title: string
}
export const Layout: VFC<Props> = ({
  children,
  title = 'nomy',
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.mega_menu}>
        <div className={styles.mega_menu_wrapper}>
          <div className={styles.mega_menu_child}><div><img src="/icon-home.png"></img></div></div>
          <div className={styles.mega_menu_child}><div><img src="/icon-iine.png"></img></div></div>
          <div className={styles.mega_menu_child}><div><img src="/icon-yaritori.png"></img></div></div>
          <div className={styles.mega_menu_child}><div><img src="/icon-my-menu.png"></img></div></div>
        </div>
      </footer>
    </div>
  )
}
