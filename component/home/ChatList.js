import React from 'react'

function ChatList({title, children}) {
  return (
    <div className="flex flex-nowrap overflow-x-scroll mb-6  outer-wrapper">
                {children}
            </div>
  )
}

export default ChatList