import React, { FC, useState, VFC } from 'react'
import Layout from '../../components/organisms/Layout/Layout'
// import { useGetGroups } from '../hooks'
// import { css } from '@emotion/css'
import { MEGA_MENU_ITEM_KEYS } from '../../constants/megaMenuItems'
import { selectedMegaMenuItemKeyVar } from '../../store/cache'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import {
  CHAT_GROUP_TYPE_KEYS,
  CHAT_GROUP_TYPE_LABELS,
} from '../../constants/chatGroupType'
import UserIcons from '../../components/organisms/Common/UserIcons'
import { OWN_GROUP_DATA } from '../../constants/ownGroupData'
import { USER_ICONS_COMPONENT_TYPES } from '../../constants/componentTypes'
import Link from 'next/link'
import { Group } from '../../types/Group'
import { User } from '../../types/User'

const Chat: VFC = () => {
  // const { data } = useGetGroups()
  const data = OWN_GROUP_DATA
  const groupLeaders: User[] = []
  groupLeaders.push(data[0].users[0])
  groupLeaders.push(data[0].matchedGroups[0].users[0])
  selectedMegaMenuItemKeyVar(MEGA_MENU_ITEM_KEYS[2])
  const [selectedChatGroupType, setSelectedChatGroupType] = useState(
    CHAT_GROUP_TYPE_KEYS[0]
  )

  return (
    <Layout title="nomy">
      <Box sx={{ width: '100vw' }}>
        <Grid container alignItems="center" style={{ height: '60px' }}>
          {CHAT_GROUP_TYPE_LABELS.map((label, index) => (
            <ChatGroupTab
              key={index}
              selectedChatGroupType={selectedChatGroupType}
              index={index}
              onClickChatGroupTab={setSelectedChatGroupType}
            >
              {label}
            </ChatGroupTab>
          ))}
        </Grid>
        <List
          sx={{ height: '80px', mt: '-25px' }}
          component="nav"
          aria-label="mailbox folders"
        >
          {data[0].matchedGroups.map((matchedGroup) => (
            <>
              {' '}
              <ChatGroupListItem
                key={matchedGroup.id}
                data={data}
                groupLeaders={groupLeaders}
              />
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Layout>
  )
}

type Props = {
  selectedChatGroupType: string
  index: number
  onClickChatGroupTab: React.Dispatch<React.SetStateAction<string>>
}

const ChatGroupTab: FC<Props> = (props) => {
  const { selectedChatGroupType, index, onClickChatGroupTab, children } = props
  const isSelected = selectedChatGroupType === CHAT_GROUP_TYPE_KEYS[index]
  return (
    <Grid
      item
      xs={4}
      onClick={() => onClickChatGroupTab(CHAT_GROUP_TYPE_KEYS[index])}
    >
      <Box
        sx={{
          borderBottom: isSelected ? 2 : 1,
          pb: 1,
          borderColor: '#1C0208',
        }}
      >
        <Typography
          align="center"
          sx={{ fontWeight: isSelected ? '600' : '500' }}
        >
          {children}
        </Typography>
      </Box>
    </Grid>
  )
}

type Props2 = {
  data: Group[]
  groupLeaders: User[]
}

const ChatGroupListItem: VFC<Props2> = (props) => {
  const { data, groupLeaders } = props
  return (
    <ListItem button sx={{ p: 2 }}>
      <Link
        href={{ pathname: `/chat/[groupId]`, query: data[0]?.id }}
        as={`/chat/${data[0]?.id}`}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <UserIcons
            componentType={USER_ICONS_COMPONENT_TYPES[1]}
            users={groupLeaders}
          />
          <Stack>
            <Stack direction="row">
              <ListItemText
                primary="あかね かな ゆり"
                sx={{ color: '#1C0208', textAlign: 'left', mt: 2, ml: 2 }}
              />
              <ListItemText
                sx={{
                  fontSize: '0.8rem',
                  color: '#1C0208',
                  textAlign: 'left',
                  mt: 2,
                  ml: -1,
                }}
                secondary="さん"
              />
            </Stack>
            <ListItemText
              secondary="昨日は有り難うございま…"
              sx={{
                color: '#1C0208',
                opacity: '0.4',
                textAlign: 'left',
                mt: -1,
                ml: 2,
              }}
            />
          </Stack>
          <ListItemText
            secondary="17:23"
            sx={{ color: '#1C0208', opacity: '0.4', textAlign: 'right' }}
          />
        </Stack>
      </Link>
    </ListItem>
  )
}

export default Chat
