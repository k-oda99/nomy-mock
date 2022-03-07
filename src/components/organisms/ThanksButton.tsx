import React, { VFC } from 'react'
import { thanksStatusVar } from '../../store/cache'
import { css } from '@emotion/css'
import Button from '../atoms/Button'
import { useReactiveVar } from '@apollo/client'

type Props = {
  groupId: string
}

const ThanksButton: VFC<Props> = (props) => {
  const { groupId } = props
  const thanksStatusObj = useReactiveVar(thanksStatusVar)
  const thanksStatus = thanksStatusObj[groupId]

  const handleClickThanksButton = () => {
    thanksStatusObj[groupId] = !thanksStatus
    thanksStatusVar({ ...thanksStatusObj })
  }
  return (
    <div className={thanksButton}>
      {!thanksStatus && (
        <Button onClick={handleClickThanksButton} buttonType="primary">
          ありがとう!!
        </Button>
      )}
      {thanksStatus && (
        <Button onClick={handleClickThanksButton} buttonType="light">
          ありがとう済み
        </Button>
      )}
    </div>
  )
}

const thanksButton = css`
  margin-bottom: 10px;
`

export default ThanksButton
