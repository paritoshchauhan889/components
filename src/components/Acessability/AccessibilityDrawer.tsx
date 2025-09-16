"use client";

import {
  X,
  Contrast,
  Link as LinkIcon,
  Type,
  TextCursorInput,
  AlignJustify,
  Maximize,
  Minimize,
  MousePointer,
  ImageOff,
  Expand,
  Minimize2,
} from "lucide-react";

interface Props {
  onClose: () => void;
}

const AccessibilityDrawer = ({ onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-auto mr-10 w-[400px] bg-white text-gray-800 shadow-2xl z-50 rounded-lg p-5 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="font-semibold text-lg">Accessibility Options</h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Color Contrast */}
          <div>
            <h3 className="font-medium text-sm mb-3">Color Contrast</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Contrast className="w-6 h-6" />
                <span className="text-xs">High</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Type className="w-6 h-6" />
                <span className="text-xs">Normal</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <LinkIcon className="w-6 h-6" />
                <span className="text-xs">Highlight Links</span>
              </button>
            </div>
          </div>

          {/* Text Size */}
          <div>
            <h3 className="font-medium text-sm mb-3">Text Size</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Maximize className="w-6 h-6" />
                <span className="text-xs">Increase</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Minimize className="w-6 h-6" />
                <span className="text-xs">Decrease</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Type className="w-6 h-6" />
                <span className="text-xs">Normal</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <TextCursorInput className="w-6 h-6" />
                <span className="text-xs">Spacing</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <AlignJustify className="w-6 h-6" />
                <span className="text-xs">Line Height</span>
              </button>
            </div>
          </div>

          {/* Other Options */}
          <div>
            <h3 className="font-medium text-sm mb-3">Other Options</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <ImageOff className="w-6 h-6" />
                <span className="text-xs">Hide Images</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <MousePointer className="w-6 h-6" />
                <span className="text-xs">Big Cursor</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Expand className="w-6 h-6" />
                <span className="text-xs">Full Screen</span>
              </button>
              <button className="flex flex-col items-center gap-1 px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm">
                <Minimize2 className="w-6 h-6" />
                <span className="text-xs">Exit Full Screen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityDrawer;
