import React from 'react'
import { useChatStore } from '../store/useChatStore'
import { useEffect } from 'react'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeleton/MessageSkeleton'

const ChatContainer = () => {
  const {messages , getMessages , isMessagesLoading, selectedUser} = useChatStore()

  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id,getMessages])
  
  if (isMessagesLoading){
    return(
    <div className='flex-1 flex flex-col orverflow-auto'>
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  )}

  return (
    <div className='flex-1 flex flex-col orverflow-auto'>
      <ChatHeader />

      <p>message.....</p>

      <MessageInput />
      
    </div>
  )
}

export default ChatContainer
