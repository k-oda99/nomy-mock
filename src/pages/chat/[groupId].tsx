import React, { useState, VFC } from 'react'
// import { useRouter } from 'next/dist/client/router'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from '@chatscope/chat-ui-kit-react'
import LowerLevelLayout from '../../components/organisms/Layout/LowerLevelLayout'
import UserIcons from '../../components/organisms/Common/UserIcons'
import { useRouter } from 'next/router'
import { useGetMatchedChatGroup } from '../../hooks'
import { User } from '../../types/User'
import { USER_ICONS_COMPONENT_TYPES } from '../../constants/componentTypes'

const MESSAGE_DATA = [
  {
    message:
      'マッチングおめでとうございます！\n男性代表者は「候補日」「候補エリア」を送ってください。',
    comingOrGoing: 'incoming',
    avatarSrc: '/bot-icon.png',
  },
]
const ChatRoom: VFC = () => {
  const router = useRouter()
  const groupId = router.query.groupId as string
  const group = useGetMatchedChatGroup(groupId)
  const groupMember: User[] = group?.users.concat(group.matchedGroups[0].users)

  const [messageListState, setMessageListState] = useState(MESSAGE_DATA)

  const onSendMessage = async (message) => {
    const messageObj = {
      message,
      comingOrGoing: 'outgoing',
      avatarSrc: '/user5-circle.png',
    }
    const messageList = [...messageListState]
    messageList.push(messageObj)
    setMessageListState(messageList)

    if (message == 'スケジュール') {
      const messageObj = {
        message: '日時を擦り合わせましょう',
        comingOrGoing: 'incoming',
        avatarSrc: '/bot-icon.png',
      }
      messageList.push(messageObj)
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setMessageListState(messageList)
  }

  return (
    <LowerLevelLayout>
      <UserIcons
        componentType={USER_ICONS_COMPONENT_TYPES[0]}
        users={groupMember}
        additionalIconStyles={{ width: '36px', height: '36px' }}
      ></UserIcons>
      <div style={{ position: 'relative', height: '100vh' }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messageListState.map((messageObj, index) => (
                <Message
                  key={index}
                  model={{
                    message: messageObj.message,
                    sentTime: 'just now',
                    sender: 'Joe',
                    direction: messageObj.comingOrGoing,
                  }}
                >
                  <Avatar src={messageObj.avatarSrc} name="bot-logo" />
                </Message>
              ))}
            </MessageList>
            <MessageInput
              placeholder="メッセージを入力"
              onSend={(textContent) => onSendMessage(textContent)}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </LowerLevelLayout>
  )
}

export default ChatRoom
