import React, { useState, VFC } from 'react'
import Layout from '../../components/organisms/Layout'
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
import { CHAT_GROUP_TYPE_KEYS } from '../../constants/chatGroupType'
import UserIcons from '../../components/organisms/UserIcons'
import { OWN_GROUP_DATA } from '../../constants/ownGroupData'
import { USER_ICONS_COMPONENT_TYPES } from '../../constants/componentTypes'
import Link from 'next/link'

const Chat: VFC = () => {
  // const { data } = useGetGroups()
  const data = OWN_GROUP_DATA
  const groupLeaders = []
  groupLeaders.push(data[0].users[0])
  groupLeaders.push(data[0].matchedGroups[0].users[0])
  selectedMegaMenuItemKeyVar(MEGA_MENU_ITEM_KEYS[2])
  const [selectedChatGroupType, setSelectedChatGroupType] = useState(
    CHAT_GROUP_TYPE_KEYS[0]
  )

  const isSelectedMatch = selectedChatGroupType === CHAT_GROUP_TYPE_KEYS[0]
  const isSelectedGroup = selectedChatGroupType === CHAT_GROUP_TYPE_KEYS[1]
  const isSelectedFriend = selectedChatGroupType === CHAT_GROUP_TYPE_KEYS[2]
  return (
    <Layout title="nomy">
      <Box sx={{ width: '100vw' }}>
        <Grid container alignItems="center" style={{ height: '60px' }}>
          <Grid
            item
            xs={4}
            onClick={() => setSelectedChatGroupType(CHAT_GROUP_TYPE_KEYS[0])}
          >
            <Box
              sx={{
                borderBottom: isSelectedMatch ? 2 : 1,
                pb: 1,
                borderColor: '#1C0208',
              }}
            >
              <Typography
                align="center"
                sx={{ fontWeight: isSelectedMatch ? '600' : '500' }}
              >
                マッチ
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            onClick={() => setSelectedChatGroupType(CHAT_GROUP_TYPE_KEYS[1])}
          >
            <Box
              sx={{
                borderBottom: isSelectedGroup ? 2 : 1,
                pb: 1,
                borderColor: '#1C0208',
              }}
            >
              <Typography
                align="center"
                sx={{ fontWeight: isSelectedGroup ? '600' : '500' }}
              >
                グループ
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            onClick={() => setSelectedChatGroupType(CHAT_GROUP_TYPE_KEYS[2])}
          >
            <Box
              sx={{
                borderBottom: isSelectedFriend ? 2 : 1,
                pb: 1,
                borderColor: '#1C0208',
              }}
            >
              <Typography
                align="center"
                sx={{ fontWeight: isSelectedFriend ? '600' : '500' }}
              >
                友だち
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <List
          sx={{ height: '80px', mt: '-25px' }}
          component="nav"
          aria-label="mailbox folders"
        >
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
                      }}
                      secondary="さん"
                    ></ListItemText>
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
          <Divider />
          <ListItem button divider>
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
                    }}
                    secondary="さん"
                  ></ListItemText>
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
                secondary="14:17"
                sx={{ color: '#1C0208', opacity: '0.4', textAlign: 'right' }}
              />
            </Stack>
          </ListItem>
          <ListItem button>
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
                    }}
                    secondary="さん"
                  ></ListItemText>
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
                secondary="19:31"
                sx={{ color: '#1C0208', opacity: '0.4', textAlign: 'right' }}
              />
            </Stack>
          </ListItem>
          <Divider sx={{ mt: 1 }} />
        </List>
      </Box>
    </Layout>
  )
}

export default Chat
