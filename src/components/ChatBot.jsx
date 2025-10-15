import React, { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { messages as defaultMessages } from '../lib/ChatBot_Handler'
import { sendChatMessage } from '../lib/sendChatBotResponse'

const Chatbot = ({ onClose, isOpen }) => {
  const [msgList, setMsgList] = useState(
    JSON.parse(localStorage.getItem("Hack_Chat_msg") || JSON.stringify(defaultMessages))
  )

  // console.log("chat msggss:", localStorage.getItem("Hack_Chat_msg"))
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgList])

  const TypingIndicator = () => (
    <div className="flex space-x-1 px-3 py-2 bg-gray-200 rounded-full w-fit">
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  )

  const handleSend = async () => {
    if (!input.trim()) return

    const newMsg = { message: input.trim(), user: true }
    setMsgList(prev => [...prev, newMsg])
    setInput('')
    const typingMsg = { message: '', user: false, isTyping: true }
    setMsgList(prev => [...prev, typingMsg])

    try {
      const botReply = await sendChatMessage(input)
      let currentText = ''
      setMsgList(prev => prev.filter(msg => !msg.isTyping))
      const typeLetters = (i = 0) => {
        if (i < botReply.length) {
          currentText += botReply[i]
          setMsgList(prev => [
            ...prev.filter(msg => !msg.isTyping),
            { message: currentText, user: false, isTyping: true },
          ])
          setTimeout(() => typeLetters(i + 1), 20)
        } else {
          setMsgList(prev => [
            ...prev.filter(msg => !msg.isTyping),
            { message: botReply, user: false },
          ])
          localStorage.setItem(
            "Hack_Chat_msg",
            JSON.stringify([...msgList, newMsg, { message: botReply, user: false }])
          )
        }
      }
      typeLetters()
    } catch (error) {
      setMsgList(prev => [
        ...prev.filter(msg => !msg.isTyping),
        { message: 'Error: ' + error.message, user: false },
      ])
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white/20 backdrop-blur-2xl 
      rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden 
      transition-all duration-700 ${isOpen ? "w-[90vw] md:w-[60vw] h-[85vh] md:h-[80vh] opacity-100" : "w-0 h-0 opacity-0"
        }`}
    >
      <div className="flex justify-between px-8 items-center p-4 border-b bg-[#090D17]/90 text-white">
        <h3 className="text-lg font-semibold">AI Assistant</h3>
        <button
          onClick={onClose}
          className="hover:text-red-600 hover:rotate-90 transition-all duration-500 text-red-500"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
        {msgList.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.user ? 'justify-end' : 'justify-start'} opacity-100 transition-opacity duration-200`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm ${msg.user
                ? 'bg-blue-600 text-white rounded-br-none'
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
            >
              {msg.isTyping && msg.message === '' ? (
                <TypingIndicator />
              ) : (
                msg.message
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t text-black bg-white/70 backdrop-blur-md flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 rounded-lg flex items-center justify-center transition-all duration-200"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

export default Chatbot
