import React, { FC } from 'react'
import { css } from '@emotion/css'

type BaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type OwnProps = {
  buttonType: string
}
type Props = BaseProps & OwnProps

const Button: FC<Props> = (props) => {
  const { buttonType, ...rest } = props
  return (
    <button
      {...rest}
      className={
        buttonType === 'primary'
          ? styles.primaryButton
          : buttonType === 'secondary'
          ? styles.secondaryButton
          : styles.lightButton
      }
    />
  )
}

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

const styles = {
  primaryButton: css`
    ${button}
    background: #c63f5a;
    color: #fff;
  `,
  secondaryButton: css`
    ${button}
    background: #efefef;
    color: #b3b3b3;
  `,
  lightButton: css`
    ${button}
    background: rgba(198, 63, 90, 0.08);
    color: #c63f5a;
  `,
}

export default Button
