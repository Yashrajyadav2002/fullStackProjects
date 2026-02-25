import React from 'react'

function Message() {
  return (

    <>
      <div className='p-4'>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
        </div>

        <h1>This is the chat section </h1>

        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-accent">
            That's never been done in the history of the Jedi.
          </div>
        </div>

      </div>

    </>
  )
}

export default Message