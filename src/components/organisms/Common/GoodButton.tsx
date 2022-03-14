import React, { VFC } from 'react'
import { goodStatusVar } from '../../../store/cache'
import { css } from '@emotion/css'
import Button from '../../atoms/Button'
import { useReactiveVar } from '@apollo/client'

type Props = {
  groupId: string
}

const GoodButton: VFC<Props> = (props) => {
  const { groupId } = props
  const goodStatusObj = useReactiveVar(goodStatusVar)
  const goodStatus = goodStatusObj[groupId]

  const handleClickGoodButton = () => {
    goodStatusObj[groupId] = !goodStatus
    goodStatusVar({ ...goodStatusObj })
  }
  return (
    <div className={goodButton}>
      {!goodStatus && (
        <Button onClick={handleClickGoodButton} buttonType="primary">
          いいね!!
        </Button>
      )}
      {goodStatus && (
        <Button onClick={handleClickGoodButton} buttonType="light">
          いいね済み
        </Button>
      )}
    </div>
  )
}

const goodButton = css`
  margin-bottom: 10px;
`

export default GoodButton
