import React, { useState, VFC } from 'react'
import { css } from '@emotion/css'
import GoodButton from '../Common/GoodButton'
import { GROUP_DETAIL_COMPONENT_TYPES } from '../../../constants/componentTypes'
import ThanksButton from '../Common/ThanksButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

type Props = {
  groupId: string
  componentType: string
  onClickCreateGroupButton: () => void
}

const GroupDetailFooter: VFC<Props> = (props) => {
  const { groupId, componentType, onClickCreateGroupButton } = props
  const [isCreateGroup, setIsCreateGroup] = useState(false)
  const onClickArrow = () => {
    setIsCreateGroup(!isCreateGroup)
  }
  return (
    <footer className={styles.footer}>
      {!isCreateGroup ? (
        <>
          <div className={styles.footerUserIcon}>
            <div>
              <img src="/user5-circle.png" />
            </div>
            <div>
              <img src="/user6-circle.png" />
            </div>
            <div>
              <img src="/user7-circle.png" />
            </div>
          </div>
          <div className={styles.footerDescription}>
            <span>金土日祝 夜 ほか 渋谷/恵比寿 男性側 ¥10,000/人</span>
          </div>
          {componentType === GROUP_DETAIL_COMPONENT_TYPES[0] ||
          componentType === GROUP_DETAIL_COMPONENT_TYPES[1] ? (
            <GoodButton groupId={groupId} />
          ) : (
            <ThanksButton groupId={groupId} />
          )}
          <div onClick={onClickArrow} className={styles.arrowRightIcon}>
            <ArrowForwardIosIcon />
          </div>
        </>
      ) : (
        <>
          <div onClick={onClickArrow} className={styles.arrowLeftIcon}>
            <ArrowBackIosIcon />
          </div>
          <div onClick={onClickCreateGroupButton} className={styles.plusIcon}>
            <AddCircleOutlineIcon />
          </div>
        </>
      )}
    </footer>
  )
}

const styles = {
  footer: css`
    width: 100%;
    height: 179px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.5);
    position: relative;
  `,
  footerUserIcon: css`
    display: flex;
    margin-top: 15px;
    > div {
      margin-right: 2vw;
    }
  `,
  footerDescription: css`
    font-size: 0.7rem;
    margin-top: -10px;
  `,
  arrowRightIcon: css`
    position: absolute;
    top: 45%;
    right: 10px;
  `,
  arrowLeftIcon: css`
    position: absolute;
    top: 45%;
    left: 10px;
  `,
  plusIcon: css`
    margin: 70px;
    > svg {
      width: 40px;
      height: 40px;
    }
  `,
}

export default GroupDetailFooter
