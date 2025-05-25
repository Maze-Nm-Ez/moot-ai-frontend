import { useState } from "react";
import {
  MessageSquare,
  Upload,
  Clock,
  ChevronLeft,
  ChevronRight,
  Plus,
  User,
  BookOpen,
  FileText,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({
  activeTab,
  setActiveTab,
  createNewChat,
  chatHistory,
  selectChat,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}) {
  return (
    <div
      className={`bg-gray-50 text-gray-900 transition-all duration-300 flex flex-col shadow-lg border-r border-gray-200 ${
        isSidebarCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Top section with logo and collapse button */}
      <div className="flex items-center p-4 border-b border-gray-200">
        {!isSidebarCollapsed && (
          <div className="flex items-center flex-grow">
            <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-cyan-600 h-9 w-9 shadow-inner shadow-cyan-400/10">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="ml-2.5">
              <h1 className="text-lg font-bold tracking-tight text-gray-900">
                Moot AI
              </h1>
              <div className="text-[9px] text-cyan-600 -mt-1 font-medium">
                Mooting Practice Assistant
              </div>
            </div>
          </div>
        )}
        {isSidebarCollapsed && (
          <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-cyan-600 h-8 w-8 mx-auto shadow-inner shadow-cyan-400/10">
            <Shield className="h-4 w-4 text-white" />
          </div>
        )}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="text-gray-500 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-100 ml-2"
        >
          {isSidebarCollapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      </div>

      {/* New chat button */}
      <button
        onClick={createNewChat}
        className="flex items-center mx-3 my-3 p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-md shadow-cyan-500/20 text-white"
      >
        <Plus className="h-4 w-4" />
        {!isSidebarCollapsed && (
          <span className="ml-2 font-medium text-sm">New Mooting Session</span>
        )}
      </button>

      {/* Navigation menu */}
      <nav className="flex-grow py-3">
        <ul className="space-y-1 px-2">
          <li>
            <button
              onClick={() => setActiveTab("newsection")}
              className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                activeTab === "newsection"
                  ? "bg-cyan-100 text-cyan-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <MessageSquare
                className={`h-4 w-4 ${
                  activeTab === "newsection" ? "text-cyan-600" : ""
                }`}
              />
              {!isSidebarCollapsed && (
                <span className="ml-3 text-sm">Mooting Session</span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("history")}
              className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                activeTab === "history"
                  ? "bg-cyan-100 text-cyan-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Clock
                className={`h-4 w-4 ${
                  activeTab === "history" ? "text-cyan-600" : ""
                }`}
              />
              {!isSidebarCollapsed && (
                <span className="ml-3 text-sm">History</span>
              )}
            </button>
          </li>
        </ul>

        {/* Recent chats */}
        {!isSidebarCollapsed && (
          <div className="mt-5 px-3">
            <h3 className="px-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Recent Conversations
            </h3>
            <ul className="space-y-1">
              {chatHistory.slice(0, 3).map((chat) => (
                <li key={chat.id}>
                  <button
                    onClick={() => selectChat(chat.id)}
                    className="w-full flex items-center p-2 text-left text-xs text-gray-600 rounded-md hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded bg-gray-200 group-hover:bg-gray-300 transition-colors">
                      <MessageSquare className="h-3 w-3 text-cyan-600" />
                    </div>
                    <span className="ml-2 truncate flex-grow">
                      {chat.title}
                    </span>
                    <span className="ml-1 text-[9px] text-gray-400">
                      {chat.messages}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="mt-3 px-3">
        <button
          onClick={() => setActiveTab("case_library")}
          className={`w-full flex items-center p-2 rounded-lg transition-colors ${
            activeTab === "case_library"
              ? "bg-cyan-100 text-cyan-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <BookOpen
            className={`h-4 w-4 ${
              activeTab === "case_library" ? "text-cyan-600" : ""
            }`}
          />
          {!isSidebarCollapsed && (
            <span className="ml-3 text-sm">Case Library</span>
          )}
        </button>
      </div>

      <div className="my-1 px-3">
        <button
          onClick={() => setActiveTab("achivements")}
          className={`w-full flex items-center p-2 rounded-lg transition-colors ${
            activeTab === "achivements"
              ? "bg-cyan-100 text-cyan-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <BookOpen
            className={`h-4 w-4 ${
              activeTab === "achivements" ? "text-cyan-600" : ""
            }`}
          />
          {!isSidebarCollapsed && (
            <span className="ml-3 text-sm">Achievements</span>
          )}
        </button>
      </div>

      {/* User profile section */}
      <div className="border-t border-gray-200 p-3">
        <div className="flex items-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-2 rounded-full shadow-inner shadow-gray-200/10">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full border border-gray-200"></div>
          </div>
          {!isSidebarCollapsed && (
            <div className="ml-2.5 overflow-hidden">
              <p className="text-xs font-medium text-gray-900 truncate">
                Sarah Johnson, Esq.
              </p>
              <p className="text-[10px] text-gray-500 truncate">
                legal@johnson-associates.com
              </p>
            </div>
          )}
          {!isSidebarCollapsed && (
            <div className="ml-auto flex space-x-1">
              <button className="text-gray-500 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <Settings className="h-3 w-3" />
              </button>
              <button className="text-gray-500 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <LogOut className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}