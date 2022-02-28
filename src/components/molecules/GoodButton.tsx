import React, { useState, VFC } from 'react'
import { goodStatusVar } from '../../../cache'
import { css } from '@emotion/css'
import Button from '../atoms/button'

const goodButton = css`
  margin-bottom: 10px;
`

interface Props {
  id: string
}
const GoodButton: VFC<Props> = (props) => {
  const { id } = props
  const [goodStatus, setGoodStatus] = useState(goodStatusVar()[id] || false)

  const onClickGoodButton = () => {
    goodStatusVar()[id] = !goodStatus
    setGoodStatus(!goodStatus)
  }
  return (
    <div className={goodButton}>
      {!goodStatus && (
        <Button
          onClick={onClickGoodButton}
          text="いいね!!"
          buttonType="primary"
        ></Button>
      )}
      {goodStatus && (
        <Button
          onClick={onClickGoodButton}
          text="いいね済み"
          buttonType="done"
        ></Button>
      )}
    </div>
  )
}
export default GoodButton
