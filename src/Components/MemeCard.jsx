import React from "react";

export default function MemeCard({ meme, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer overflow-hidden flex flex-col"
    >
      <img
        src={meme.url}
        alt={meme.name}
        className="object-cover w-full h-40 sm:h-48"
      />
      <div className="p-2 text-center">
        <p className="text-gray-800 font-semibold truncate">{meme.name}</p>
      </div>
    </div>
  );
}
