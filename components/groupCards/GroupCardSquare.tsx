import { memo, VFC } from 'react'
import styles from '../../styles/Home.module.css'
import { ImageContainer } from './squareCardContents/ImageContainer'
import { Description } from './squareCardContents/Description'
import { group } from '../../types/group'
import Link from 'next/link'

interface Props {
  group: group
}

export const GroupCardSquare: VFC<Props> = memo((props) => {
  const { group } = props
  return (
    <>
      <Link key={group.id} href={`/groups/${group.id}`}>
        <div className={styles.recommend}>
          <ImageContainer group={group} />
          <Description />
        </div>
      </Link>
    </>
  )
})
