import React, { VFC } from 'react'
import Button from '../atoms/Button'

type ButtonObjType = {
  label: string
  buttonType: string
  additionalStyles?: { [key: string]: string }
}
type Props = {
  buttonItemList: ButtonObjType[]
}
const ButtonGroup: VFC<Props> = (props) => {
  const { buttonItemList } = props
  return (
    <>
      {buttonItemList.map((item, index) => (
        <Button
          key={index}
          buttonType={item.buttonType}
          additionalStyles={item.additionalStyles}
        >
          {item.label}
        </Button>
      ))}
    </>
  )
}

export default ButtonGroup
