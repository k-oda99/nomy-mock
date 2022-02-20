import { memo, VFC } from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

interface Props {
}

export const GroupCardWide: VFC<Props> = memo(() => {
  return (
    <>
      <Link href="/group-detail">
        <div className={styles.pick_up}>
          <div className={styles.pick_up_img}>
            <div>
              <img src="/user1.png" />
              <div className={styles.pick_up_user_profile}>
                <span>あかね</span>
                <span>(25)</span>
                <br/>
                <span>歯科助手</span>
              </div>
            </div>
            <div>
              <img src="/user2.png" />
              <div className={styles.pick_up_user_profile}>
                <span>かな</span>
                <span>(27)</span>
                <br/>
                <span>広告営業</span>
              </div>
            </div>
            <div>
              <img src="/user3.png" />
              <div className={styles.pick_up_user_profile}>
                <span>ゆり</span>
                <span>(25)</span>
                <br/>
                <span>美容師</span>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <span>金土日祝</span>
            <span>ほか</span>&nbsp;
            <span>渋谷/恵比寿</span>
          </div>
        </div>
      </Link>
    </>
  )
})
