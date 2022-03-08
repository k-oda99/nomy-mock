import React, { useState, VFC } from 'react'
// import { useRouter } from 'next/dist/client/router'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react'

const ChatRoom: VFC = () => {
  // const router = useRouter()
  // const groupId = router.query.groupId as string

  const [messageListState, setMessageListState] = useState([])

  const onSendMessage = (message) => {
    const messageList = [...messageListState]
    messageList.push(message)
    setMessageListState(messageList)
  }

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: 'just now',
                sender: 'Joe',
              }}
            />
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: 'just now',
                sender: 'Joe',
                direction: 'outgoing',
              }}
            />
            {messageListState.map((message, index) => (
              <Message
                key={index}
                model={{
                  message: message,
                  sentTime: 'just now',
                  sender: 'Joe',
                  direction: 'outgoing',
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={(textContent) => onSendMessage(textContent)}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default ChatRoom
