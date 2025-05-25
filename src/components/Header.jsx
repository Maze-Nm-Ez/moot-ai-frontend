import { HelpCircle, Settings } from "lucide-react";

export default function Header({
  activeTab,
  setActiveTab,
  currentChatId,
  chatHistory,
}) {
  // Get the current chat title
  const getCurrentChatTitle = () => {
    if (currentChatId === "current") return "Untitled Chat";
    const chat = chatHistory.find((c) => c.id === currentChatId);
    return chat ? chat.title : "Chat";
  };

  // Get the title based on active tab
  const getTitle = () => {
    switch (activeTab) {
      case "chat":
        return getCurrentChatTitle();
      case "achivements":
        return "Achivements";
      case "case_library":
        return "Case Library";
      case "history":
        return "Chat History";
      default:
        return "Moot AI";
    }
  };

  return (
    <header
      className="px-6 py-3 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between"
    >
      <h1 className="text-xl font-semibold text-gray-900">{getTitle()}</h1>

      <div className="flex items-center space-x-3">
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          title="Help"
        >
          <HelpCircle size={20} />
        </button>

        <button
          className="p-2 rounded-full hover:bg-gray-100"
          title="Settings"
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}