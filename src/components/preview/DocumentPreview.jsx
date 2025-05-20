import React, { useState, useEffect } from "react";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";

export default function DocumentPreview({
  document,
  highlightedParts,
  onClose,
  isDarkMode,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Set total pages based on document content
    if (document && document.content) {
      // This is a simplified example - actual page calculation would depend on your document structure
      const estimatedPages = Math.ceil(document.content.length / 3000);
      setTotalPages(Math.max(1, estimatedPages));
    }
  }, [document]);

  const handleDownload = () => {
    // Create a blob from the document content
    const blob = new Blob([document.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const a = document.createElement("a");
    a.href = url;
    a.download = document.title || "document.txt";
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Content with highlighted sections
  const renderContent = () => {
    if (!document || !document.content) return <p>No content available</p>;

    if (!highlightedParts || highlightedParts.length === 0) {
      return <div className="whitespace-pre-wrap">{document.content}</div>;
    }

    // Sort highlights by their position in the text
    const sortedHighlights = [...highlightedParts].sort(
      (a, b) => a.startOffset - b.startOffset
    );

    // Create content pieces with highlights
    let lastIndex = 0;
    const contentPieces = [];

    sortedHighlights.forEach((highlight, index) => {
      // Add text before highlight
      if (highlight.startOffset > lastIndex) {
        contentPieces.push(
          <span key={`pre-${index}`}>
            {document.content.substring(lastIndex, highlight.startOffset)}
          </span>
        );
      }

      // Add highlighted text
      contentPieces.push(
        <span
          key={`highlight-${index}`}
          className={`${
            isDarkMode ? "bg-yellow-600/40" : "bg-yellow-200"
          } rounded px-0.5`}
        >
          {document.content.substring(
            highlight.startOffset,
            highlight.endOffset
          )}
        </span>
      );

      lastIndex = highlight.endOffset;
    });

    // Add remaining text after last highlight
    if (lastIndex < document.content.length) {
      contentPieces.push(
        <span key="remaining">{document.content.substring(lastIndex)}</span>
      );
    }

    return <div className="whitespace-pre-wrap">{contentPieces}</div>;
  };

  // Handle pagination
  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isDarkMode ? "bg-black/80" : "bg-gray-500/80"
      }`}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden flex flex-col ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-2xl`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-4 py-3 border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div>
            <h2
              className={`font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {document?.title || "Document Preview"}
            </h2>
            <p
              className={`text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {document?.category} • {document?.section || "Full Document"}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className={`p-2 rounded-full hover:${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
              title="Download Document"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-full hover:${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
              title="Close Preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex-grow overflow-auto p-5 ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {renderContent()}
        </div>

        {/* Footer with pagination */}
        <div
          className={`flex items-center justify-between px-4 py-2 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`p-1.5 rounded-full ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : `hover:${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-1.5 rounded-full ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : `hover:${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
