import React from "react";
import MemeCard from "./MemeCard";

export default function MemeGrid({ memes, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} onClick={() => onSelect(meme)} />
      ))}
    </div>
  );
}
