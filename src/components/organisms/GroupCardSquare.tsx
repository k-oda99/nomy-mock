import React, { memo, VFC } from 'react'
import ImageContainer from './ImageContainer'
import Description from './Description'
import { Group } from '../../types/Group'
import Link from 'next/link'
import { css } from '@emotion/css'

type Props = {
  group: Group
}

const GroupCardSquare: VFC<Props> = memo(function GroupCardSquare(props) {
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

const styles = {
  recommend: css`
    width: 44.5vw;
    text-align: right;
    border-radius: 16px;
    box-shadow: 10px 5px 10px rgba(18, 47, 61, 0.5);
    margin-bottom: 16px;
  `,
}

export default GroupCardSquare
