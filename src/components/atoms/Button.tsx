import React, { VFC } from 'react'
import { css } from '@emotion/css'

const button = css`
  width: 156px;
  height: 50px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
`
const primaryButton = css`
  ${button}
  background: #c63f5a;
  color: #fff;
`

const secondaryButton = css`
  ${button}
  background: #efefef;
  color: #b3b3b3;
`

const doneButton = css`
  ${button}
  background: rgba(198, 63, 90, 0.08);
  color: #c63f5a;
`

interface Props {
  onClick
  text: string
  buttonType: string
}

const Button: VFC<Props> = (props) => {
  const { onClick, text, buttonType } = props
  return (
    <button
      onClick={onClick}
      className={
        buttonType === 'primary'
          ? primaryButton
          : buttonType === 'secondary'
          ? secondaryButton
          : doneButton
      }
    >
      {text}
    </button>
  )
}
export default Button
