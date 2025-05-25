import { useState } from "react";
import Header from "./components/Header";
import ChatView from "./components/ChatView";
import UploadView from "./components/UploadView";
import HistoryView from "./components/HistoryView";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [activeTab, setActiveTab] = useState("chat"); // 'chat', 'upload', 'history'
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "system",
      content:
        "Welcome to Legal Intelligence. You can ask questions about your legal documents, and I'll provide answers based on the content you've uploaded.",
    },
  ]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [chatHistory, setChatHistory] = useState([
    {
      id: "chat-1",
      title: "NDA Review Discussion",
      date: "2 May 2025",
      messages: 4,
    },
    {
      id: "chat-2",
      title: "Contract Interpretation",
      date: "30 Apr 2025",
      messages: 7,
    },
    {
      id: "chat-3",
      title: "Legal Compliance Inquiry",
      date: "28 Apr 2025",
      messages: 3,
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState("current");

  // Handle file upload
  const handleFileUpload = (files) => {
    const newFiles = Array.from(files).map((file) => {
      const fileId = `upload-${Date.now()}-${file.name}`;
      setUploadProgress((prev) => ({ ...prev, [fileId]: 0 }));

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = Math.min((prev[fileId] || 0) + 10, 100);
          if (newProgress === 100) clearInterval(interval);
          return { ...prev, [fileId]: newProgress };
        });
      }, 300);

      return { id: fileId, name: file.name, size: file.size, type: file.type };
    });

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  // Remove file
  const removeFile = (id) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  };

  // Select a chat from history
  const selectChat = (chatId) => {
    setCurrentChatId(chatId);
    setActiveTab("chat");

    // For this demo, simulate different messages based on the chat ID
    if (chatId === "chat-1") {
      setMessages([
        {
          id: 1,
          role: "system",
          content: "Welcome to the NDA Review Discussion.",
        },
        {
          id: 2,
          role: "user",
          content: "Can we share data with third parties under NDA X?",
        },
        {
          id: 3,
          role: "system",
          content:
            "Based on Section 4.2 of NDA X, data sharing with third parties is permitted only with prior written consent and when the third party signs a comparable confidentiality agreement.",
          sources: [
            { title: "NDA X", section: "Section 4.2", relevance: 0.92 },
          ],
        },
      ]);
    } else if (chatId === "chat-2") {
      setMessages([
        {
          id: 1,
          role: "system",
          content: "Welcome to Contract Interpretation.",
        },
        {
          id: 2,
          role: "user",
          content:
            "What are our obligations under section 7 of the service contract?",
        },
      ]);
    } else {
      // Reset to default for new chat
      setMessages([
        {
          id: 1,
          role: "system",
          content:
            "Welcome to Legal Intelligence. You can ask questions about your legal documents, and I'll provide answers based on the content you've uploaded.",
        },
      ]);
    }
  };

  // Create new chat
  const createNewChat = () => {
    setCurrentChatId("current");
    setMessages([
      {
        id: 1,
        role: "system",
        content:
          "Welcome to Legal Intelligence. You can ask questions about your legal documents, and I'll provide answers based on the content you've uploaded.",
      },
    ]);
    setActiveTab("chat");
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add this function after the other state variables in App.js

  // Mock function to fetch document details - in real implementation, call your backend
  const fetchDocumentDetails = async (documentId, sourceId) => {
    // In a real implementation, this would be an API call to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: documentId || "doc123",
          title: "Legal Agreement",
          category: "Contract",
          section: "Section 4.2 - Data Sharing",
          content: `This is a sample document content with highlighted sections.
        
                    Section 4.2 - Data Sharing
                            
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis justo eget felis commodo sagittis. Duis nec feugiat magna. Fusce neque nisi, eleifend id tortor ac, luctus ultrices ligula.

                    The following terms govern data sharing with third parties:

                    1. All third parties must sign a comparable confidentiality agreement with terms at least as restrictive as the present agreement.
                    2. Written approval must be obtained from all parties prior to sharing any information covered under this agreement.
                    3. A detailed record of all shared data must be maintained for a period of not less than five (5) years following the date of disclosure.
                    4. When personal information is involved, a Data Processing Addendum is required that complies with all applicable data protection regulations.

                    Violation of these terms constitutes a material breach of this agreement and grounds for immediate termination, as well as legal remedies including but not limited to injunctive relief.`,
          highlightedParts: [
            { startOffset: 191, endOffset: 391 },
            { startOffset: 456, endOffset: 520 },
          ],
        });
      }, 500);
    });
  };

  // Pass this function down to ChatView as a prop

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        createNewChat={createNewChat}
        chatHistory={chatHistory}
        selectChat={selectChat}
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          currentChatId={currentChatId}
          chatHistory={chatHistory}
        />

        <main
          className={`flex-grow flex overflow-hidden ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          {activeTab === "chat" && (
            <ChatView
              messages={messages}
              setMessages={setMessages}
              isDarkMode={isDarkMode}
              currentChatId={currentChatId}
              fetchDocumentDetails={fetchDocumentDetails}
            />
          )}

          {activeTab === "upload" && (
            <UploadView
              uploadedFiles={uploadedFiles}
              uploadProgress={uploadProgress}
              handleFileUpload={handleFileUpload}
              removeFile={removeFile}
              isDarkMode={isDarkMode}
            />
          )}

          {activeTab === "history" && (
            <HistoryView
              chatHistory={chatHistory}
              selectChat={selectChat}
              createNewChat={createNewChat}
              isDarkMode={isDarkMode}
            />
          )}
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
