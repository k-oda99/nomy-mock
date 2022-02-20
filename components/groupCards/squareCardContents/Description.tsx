import { ChangeEvent, FormEvent, memo, VFC } from 'react'
import styles from '../../../styles/Home.module.css'

interface Props {
}

export const Description: VFC<Props> = memo(() => {
  return (
    <>
      <div className={styles.description}>
        <span>金土日祝</span>
        <span>ほか</span>
        <br/>
        <span>渋谷/恵比寿</span>
      </div>
    </>
  )
})
