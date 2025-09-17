import { useState, useEffect, useRef } from "react";
import { Shield, Trophy } from "lucide-react";
import MessageList from "./chat/MessageList";
import ChatInput from "./chat/ChatInput";

export default function ChatView({
  messages,
  setMessages,
  fetchDocumentDetails,
  setActiveTab,
}) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Mock user stats for gamification (replace with real data from backend)
  const userStats = {
    xp: 800,
    duelsWon: 4,
    duelsLost: 2,
  };

  // Handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate API response delay
    setTimeout(() => {
      // Add system response with source documents
      const systemResponse = {
        id: Date.now() + 1,
        role: "system",
        content: generateSampleResponse(input),
        sources: [
          {
            title: "NDA Agreement v2.1",
            section: "Section 4.2 - Data Sharing",
            relevance: 0.89,
          },
          {
            title: "Third Party Data Policy",
            section: "Compliance Requirements",
            relevance: 0.75,
          },
        ],
      };
      setMessages((prev) => [...prev, systemResponse]);
      setIsLoading(false);
    }, 2000);
  };

  // Sample response generator
  const generateSampleResponse = (query) => {
    const responses = [
      "Based on the retrieved documents, specifically Section 4.2 of the NDA Agreement v2.1, data sharing with third parties is permitted under the following conditions: (1) the third party must sign a comparable NDA with confidentiality terms at least as restrictive as NDA X, (2) written approval must be obtained prior to sharing, and (3) a record of all shared data must be maintained. The Third Party Data Policy further specifies that any such sharing requires a Data Processing Addendum when personal information is involved.",
      "According to the legal documents analyzed, the statute of limitations for filing this type of claim is 3 years from the date of discovery. However, the agreement specifically mentions a reduced period of 2 years for contractual disputes in Section 7.3.",
      "The contract does not explicitly address this scenario. While Clause 12.4 covers force majeure events, remote work arrangements due to public health emergencies are not specifically included. I recommend seeking clarification through a formal amendment to the agreement.",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle key press for chat input
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Header Section */}
      <div className="flex-none p-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 shadow-lg shadow-cyan-500/20 mr-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Moot AI Practice Session</h1>
              <p className="text-gray-600 text-sm">Engage in mooting practice with legal document support</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab("case_library")}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 shadow-md shadow-cyan-500/20"
          >
            Browse Case Library
          </button>
        </div>
      </div>

      {/* User Stats Bar */}
      <div className="flex-none p-4 bg-cyan-50 border-b border-cyan-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Trophy className="h-5 w-5 text-cyan-600" />
            <span className="text-sm text-gray-900">
              <span className="font-medium">{userStats.xp} XP</span> | {userStats.duelsWon}W - {userStats.duelsLost}L
            </span>
          </div>
          <button
            onClick={() => setActiveTab("achivements")}
            className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
          >
            View Achievements
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <MessageList
              messages={messages}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
              fetchDocumentDetails={fetchDocumentDetails}
            />
          </div>
          <div className="mt-4">
            <ChatInput
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              handleKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}