import { css } from '@emotion/css'
import React, { memo, VFC } from 'react'

type Props = {
  cardType: string
  isMan: boolean
}
const CARD_TYPE_KEYS = ['narrow', 'wide']
const GroupCardDescription: VFC<Props> = memo(function Description(props) {
  const { cardType, isMan } = props
  return (
    <div className={styles.description}>
      <span>金土日祝</span>
      <span>ほか</span>&nbsp;
      {cardType === CARD_TYPE_KEYS[0] && <br />}
      <span>渋谷/恵比寿</span>
      {isMan && (
        <>
          <br /> <span>男性側</span>&nbsp;
          <span>¥10,000</span>
        </>
      )}
    </div>
  )
})

const styles = {
  description: css`
    width: 100%;
    text-align: left;
    font-size: 0.5rem;
    padding: 1vw 0 1vw 3vw;
  `,
}

export default GroupCardDescription
