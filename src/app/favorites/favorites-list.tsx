"use client";

import { useEffect, useState } from "react";
import { CloudinaryImage } from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";

export default function FavoritesList({ images }: { images: SearchResult[] }) {
  const [results, setResults] = useState(images);

  useEffect(() => {
    setResults(images);
  }, [images]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {results.map((result) => (
          <CloudinaryImage
            path="/favorites"
            key={result.public_id}
            imageData={result}
            width="400"
            height="300"
            alt="an image of something"
            onUnfavorited={(toRemove: SearchResult) => {
              setResults((cur) =>
                cur.filter((c) => c.public_id !== toRemove.public_id)
              );
            }}
          />
        ))}
      </div>
    </>
  );
}
