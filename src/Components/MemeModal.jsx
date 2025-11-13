import React from "react";

export default function MemeModal({ meme, onClose }) {
  const copyUrl = () => {
    navigator.clipboard.writeText(meme.url);
    alert("Meme URL copied! 📋");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-4 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
        <img
          src={meme.url}
          alt={meme.name}
          className="rounded-xl mb-4 w-full object-contain max-h-[60vh]"
        />
        <p className="text-gray-700 font-semibold mb-2 text-center">{meme.name}</p>
        <button
          onClick={copyUrl}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-2xl transition"
        >
          Copy Meme URL
        </button>
      </div>
    </div>
  );
}
