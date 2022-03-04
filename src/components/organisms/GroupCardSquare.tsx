import React, { memo, VFC } from 'react'
import styles from '../../styles/Home.module.css'
import { ImageContainer } from './ImageContainer'
import { Description } from './Description'
import { group } from '../../types/Group'
import Link from 'next/link'

interface Props {
  group: group
}

export const GroupCardSquare: VFC<Props> = memo(function GroupCardSquare(
  props
) {
  const { group } = props
  return (
    <Link
      href={{ pathname: `/groups/[id]`, query: group.id }}
      as={`/groups/${group?.id}`}
    >
      <div className={styles.recommend}>
        <ImageContainer group={group} />
        <Description />
      </div>
    </Link>
  )
})
