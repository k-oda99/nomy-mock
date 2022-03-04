import React, { useState, VFC } from 'react'
import { goodStatusVar } from '../../../cache'
import { css } from '@emotion/css'
import Button from '../atoms/Button'

const goodButton = css`
  margin-bottom: 10px;
`

interface Props {
  groupId: string
}
const GoodButton: VFC<Props> = (props) => {
  const { groupId } = props
  const [goodStatus, setGoodStatus] = useState(
    goodStatusVar()[groupId] || false
  )

  const handleClickGoodButton = () => {
    const goodStatusObj = { ...goodStatusVar() }
    goodStatusObj[groupId] = !goodStatus
    goodStatusVar(goodStatusObj)
    setGoodStatus(!goodStatus)
  }
  return (
    <div className={goodButton}>
      {!goodStatus && (
        <Button onClick={handleClickGoodButton} buttonType="primary">
          いいね!!
        </Button>
      )}
      {goodStatus && (
        <Button onClick={handleClickGoodButton} buttonType="done">
          いいね済み
        </Button>
      )}
    </div>
  )
}
export default GoodButton
