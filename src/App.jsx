import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import MemeGrid from "./Components/MemeGrid";
import MemeModal from "./Components/MemeModal";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setMemes(data.data.memes);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFiltered([]);
      setHasSearched(false);
      return;
    }
    const q = query.toLowerCase();
    const results = memes.filter((meme) =>
      meme.name.toLowerCase().includes(q)
    );
    setFiltered(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center">
      {/* Centered search section */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mt-20">
        <h1 className="text-5xl font-bold text-red-500 mb-8 text-center "  >
          🤣 Meme Explorer
        </h1>

        {/* Big search bar */}
        <SearchBar onSearch={handleSearch} big />
      </div>

      {/* Meme Grid appears below search bar only after search */}
      {hasSearched && filtered.length > 0 && (
        <div className="mt-12 w-full max-w-6xl px-4">
          <MemeGrid memes={filtered} onSelect={setSelectedMeme} />
        </div>
      )}

      {/* No memes found */}
      {hasSearched && filtered.length === 0 && (
        <p className="text-gray-500 text-xl mt-12 text-center">
          No memes found 😢
        </p>
      )}

      {/* Modal */}
      {selectedMeme && (
        <MemeModal meme={selectedMeme} onClose={() => setSelectedMeme(null)} />
      )}
    </div>
  );
}
