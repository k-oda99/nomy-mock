import React, { useEffect, useState, VFC } from 'react'
import UserIcons from '../Common/UserIcons'
import ProfileDetail from './ProfileDetail'
import Profile from './Profile'
import { css } from '@emotion/css'
import LowerLevelLayout from '../Layout/LowerLevelLayout'
import GroupDetailFooter from './GroupDetailFooter'
import {
  useGetPickUpGroup,
  useGetRecommendGroup,
  useGetGoodGroup,
} from '../../../hooks'
import {
  GROUP_DETAIL_COMPONENT_TYPES,
  USER_ICONS_COMPONENT_TYPES,
} from '../../../constants/componentTypes'
import { Box, Modal, Typography } from '@mui/material'
import Button from '../../atoms/Button'
import ButtonGroup from '../../molecules/ButtonGroup'

type Props = {
  groupId: string
  componentType: string
}
const GroupDetail: VFC<Props> = (props) => {
  const { groupId, componentType } = props
  const data =
    componentType === GROUP_DETAIL_COMPONENT_TYPES[0]
      ? useGetPickUpGroup(groupId)
      : componentType === GROUP_DETAIL_COMPONENT_TYPES[1]
      ? useGetRecommendGroup(groupId)
      : useGetGoodGroup(groupId)
  const users = data?.users

  const user = users ? users[0] : { id: '' }
  const [selectedUser, setSelectedUser] = useState(user.id)
  useEffect(() => {
    setSelectedUser(user.id)
  }, [user.id])

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <LowerLevelLayout>
        <div className={styles.content}>
          <UserIcons
            componentType={USER_ICONS_COMPONENT_TYPES[0]}
            users={users}
            selectedUser={selectedUser}
            onChangeUserId={setSelectedUser}
          />
          {data?.users.map(
            (user) =>
              user.id === selectedUser && <Profile key={user.id} user={user} />
          )}
          <ProfileDetail />
        </div>
        <GroupDetailFooter
          groupId={groupId}
          componentType={componentType}
          onClickCreateGroupButton={handleOpen}
        />
      </LowerLevelLayout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modal}>
          <div>
            <div>集まりやすい時間帯</div>
            <div className={styles.buttonGroup}>
              <ButtonGroup
                buttonItemList={[
                  {
                    label: '平日 昼',
                    buttonType: 'primary',
                    additionalStyles: {
                      width: '140px',
                      height: '40px',
                      fontSize: '14px',
                      margin: '10px',
                    },
                  },
                  {
                    label: '平日 夜',
                    buttonType: 'light',
                    additionalStyles: {
                      width: '140px',
                      height: '40px',
                      fontSize: '14px',
                      margin: '10px',
                    },
                  },
                  {
                    label: '金土日祝 昼',
                    buttonType: 'light',
                    additionalStyles: {
                      width: '140px',
                      height: '40px',
                      fontSize: '14px',
                      margin: '10px',
                    },
                  },
                  {
                    label: '金土日祝 夜',
                    buttonType: 'light',
                    additionalStyles: {
                      width: '140px',
                      height: '40px',
                      fontSize: '14px',
                      margin: '10px',
                    },
                  },
                ]}
              />
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <Button buttonType={'primary'}>この内容で作成</Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

const styles = {
  content: css`
    flex: 1;
    overflow-y: scroll;
  `,
  modal: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  buttonGroup: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
}

const style = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 390,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default GroupDetail
