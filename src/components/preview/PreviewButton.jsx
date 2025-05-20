import React from "react";
import { FileSearch } from "lucide-react";

export default function PreviewButton({ onClick, isDarkMode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
        isDarkMode
          ? "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30"
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }`}
    >
      <FileSearch className="h-3.5 w-3.5 mr-1.5" />
      Preview Document
    </button>
  );
}
