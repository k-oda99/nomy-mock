import { memo, VFC } from 'react'
import styles from '../../../styles/Home.module.css'
import { Image } from './Image'
import { group } from '../../../types/group'

interface Props {
  group: group
}

export const ImageContainer: VFC<Props> = memo((props) => {
  const { group } = props
  const users = group.users
  if (users.length !== 3) return (
    <>
      <div className={styles.recommend_img}>
        {users.map(user => <Image user={user} />)}
      </div>
    </>
  )

  return (
    <>
      <div className={styles.recommend_img}>
        <div className={styles.recommend_img_wrapper}>
          {users.slice(0, 2).map(user => <Image user={user} />)}
        </div>
        <div>
          <Image user={users[2]} />
        </div>
      </div>
    </>
  )
})
