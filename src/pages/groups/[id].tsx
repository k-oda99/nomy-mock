import React, { useState, VFC } from 'react'
import Link from 'next/link'
import styles from '../../styles/GroupDetail.module.css'
import { goodStatusVar } from '../../../cache'
import { useRouter } from 'next/dist/client/router'

const GroupDetail: VFC = () => {
  const router = useRouter()
  const id = router.query.id as string
  const [goodStatus, setGoodStatus] = useState(goodStatusVar()[id] || false)

  const onClickGoodButton = () => {
    goodStatusVar()[id] = !goodStatus
    setGoodStatus(!goodStatus)
  }
  return (
    <div className={styles.container}>
      {!goodStatus && (
        <button onClick={onClickGoodButton} className={styles.good_button}>
          いいね！！
        </button>
      )}
      {goodStatus && (
        <button onClick={onClickGoodButton} className={styles.good_done_button}>
          いいね済み
        </button>
      )}
      <Link href="/">
        <button className={styles.back_button}>戻る</button>
      </Link>
    </div>
  )
}
export default GroupDetail
