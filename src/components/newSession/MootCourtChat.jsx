import React, { useState, useEffect, useRef } from 'react';

const ROLE_STYLES = {
  judge: 'bg-purple-50 border-purple-200 text-purple-900',
  judge2: 'bg-indigo-50 border-indigo-200 text-indigo-900',
  judge3: 'bg-green-50 border-green-200 text-green-900',
  prosecution: 'bg-red-50 border-red-200 text-red-900',
  appellant: 'bg-orange-50 border-orange-200 text-orange-900',
  system: 'bg-gray-50 border-gray-200 text-gray-600 italic',
  user: 'bg-blue-50 border-blue-200 text-blue-900'
};

const ROLE_PREFIXES = {
  judge: 'Judge 1',
  judge2: 'Judge 2',
  judge3: 'Judge 3',
  prosecution: 'Attorney General',
  appellant: 'Appellant (Jude Jayamaha)',
  system: 'Court Clerk',
  user: 'Defense Counsel'
};

export default function MootCourtChat({ script, onShowScore }) {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isWaitingForUser, setIsWaitingForUser] = useState(false);
  const [chatFinished, setChatFinished] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  // Initialize chat with first message
  useEffect(() => {
    if (script && script.length > 0) {
      // Show first message immediately
      setMessages([script[0]]);
      setCurrentIndex(1);
      // Set waiting for user input
      setIsWaitingForUser(true);
    }
  }, [script]);

  const handleNextMessage = async (index = currentIndex) => {
    if (!script || index >= script.length) {
      console.log("handleNextMessage: chatFinished set to true (script end)");
      setChatFinished(true);
      return;
    }

    const nextMessage = script[index];
    if (nextMessage.role === 'user') {
      setIsWaitingForUser(true);
      setUserInput('');
      inputRef.current?.focus();
      return;
    }

    setIsWaitingForUser(false);

    // Show thinking effect for judge, judge2, judge3, prosecution, appellant
    if (["judge", "judge2", "judge3", "prosecution", "appellant"].includes(nextMessage.role)) {
      setIsThinking(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsThinking(false);
    }

    setMessages(prev => [...prev, nextMessage]);
    setCurrentIndex(index + 1);

    if (index + 1 < script.length && script[index + 1].role !== 'user') {
      setTimeout(() => handleNextMessage(index + 1), 0);
    } else {
      setIsWaitingForUser(true);
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = {
      ...script[currentIndex],
      content: userInput.trim()
    };
    setMessages(prev => [...prev, userMessage]);
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setUserInput('');
    setIsWaitingForUser(false);

    if (nextIndex >= script.length) {
      console.log("handleUserSubmit: chatFinished set to true (nextIndex >= script.length)");
      setChatFinished(true);
      return;
    }
    // Use the nextIndex directly
    handleNextMessage(nextIndex);
  };

  const renderMessage = (message) => {
    if (!message || !message.content) return null;
    
    const style = ROLE_STYLES[message.role] || ROLE_STYLES.system;
    const prefix = ROLE_PREFIXES[message.role] || '';

    return (
      <div key={message.id} className={`mb-4 p-4 rounded-lg border ${style}`}>
        {prefix && <div className="font-semibold mb-1">{prefix}:</div>}
        <div>{message.content}</div>
      </div>
    );
  };

  // Check if it's user's turn
  const isUserTurn = currentIndex < script.length && script[currentIndex]?.role === 'user';

  // Add this component for the 3-dot typing indicator
  const TypingBubble = () => (
    <div className="flex items-center gap-1 mb-4 p-4 rounded-lg border bg-gray-50 border-gray-200 w-fit">
      <span className="dot bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></span>
      <span className="dot bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
      <span className="dot bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
      <style>{`
        .dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 4px;
        }
        .animate-bounce {
          animation: bounce 1s infinite alternate;
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );

  return (
    <div className="flex flex-col h-[80vh] bg-white rounded-lg shadow-lg">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(renderMessage)}
        {isThinking && <TypingBubble />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form – always visible (for debugging) */}
      <div className="border-t border-blue-200 bg-blue-50 p-4">
         <form onSubmit={handleUserSubmit} className="max-w-4xl mx-auto">
           <div className="flex flex-col gap 2">
             {/* Prompt */}
             <div className={`text-sm font-medium mb-1 ${isUserTurn ? 'text-blue-800' : 'text-gray-400'}`}> 
               {isUserTurn
                 ? (script[currentIndex]?.prompt || 'Enter your response as Defense Counsel...')
                 : 'Please wait for your turn...'}
             </div>
             {/* Input Area */}
             <div className=" flex gap 2">
               <input
                 ref={inputRef}
                 type="text"
                 value={userInput}
                 onChange={(e) => setUserInput(e.target.value)}
                 placeholder="Type your response..."
                 className={`flex-1 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white text-gray-900 placeholder-gray-500 ${isUserTurn ? 'border-blue-300 focus:ring-blue-500 focus:border-transparent' : 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                 autoFocus={isUserTurn}
                 disabled={!isUserTurn}
               />
               <button
                 type="submit"
                 disabled={!isUserTurn || !userInput.trim()}
                 className={`px-6 py-3 rounded-lg font-medium transition-colors shadow-sm ${isUserTurn ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
               >
                 Send
               </button>
             </div>
             {/* Helper Text */}
             <div className={`text-xs mt-1 ${isUserTurn ? 'text-blue-600' : 'text-gray-400'}`}> 
               {isUserTurn ? 'Press Enter to send your response' : ''}
             </div>
           </div>
         </form>
       </div>
       {/* Score button (small, modern inline) below the input bar – with blue background */}
       <div className="border-t border-blue-200 bg-blue-50 p-2 flex justify-center">
         <button
           className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm font-medium shadow hover:bg-blue-700 transition-colors"
           onClick={() => (typeof onShowScore === 'function' ? onShowScore() : null)}
         >
           See Your Score
         </button>
       </div>
    </div>
  );
} 