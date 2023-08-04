"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
