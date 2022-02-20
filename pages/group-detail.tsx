import { useState, VFC } from 'react'
import styles from '../styles/GroupDetail.module.css'
import Link from 'next/link'

const Home: VFC = () => {
  const [goodStatus, setGoodStatus] = useState(false)

  const onClickGoodButton = () => {
    setGoodStatus(!goodStatus)
  }
  return (
    <div className={styles.container}>
      {!goodStatus && <button onClick={onClickGoodButton} className={styles.good_button}>いいね！！</button>}
      {goodStatus && <button onClick={onClickGoodButton} className={styles.good_done_button}>いいね済み</button>}
      <Link href="/">
        <button className={styles.back_button}>戻る</button>
      </Link>
    </div>
  )
}
export default Home
