import { createFileRoute } from '@tanstack/react-router'
import '../assets/street-photography.css'
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/street-photography')({
  component: StreetPhotography,
})

type FlickrImgInSet = {
  id: number;
  title: string;
  thumbUrl: string;
  largeUrl: string;
}

type FlickrImgProps = FlickrImgInSet & {
  handleClick: () => void;
}

function StreetPhotography() {
  const [photos, setPhotos] = useState<FlickrImgInSet[]>([]);
  const [activePhoto, setActivePhoto] = useState<FlickrImgInSet | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/flickr/get-street')
      .then(r => r.json())
      .then(d => setPhotos(d));
  }, []);

  return (
    <>
      <div className='gallery'>
        {[...Array(4).keys()].map((i) => {
          return (
            <div className='col' key={i}>
              {photos.map((p, idx) => {
                if (idx % 4 === i) 
                  return <FlickrImg key={p.id} handleClick={() => setActivePhoto(p)} {...p} />;
              })}
            </div>
          );
        })}
      </div>
      <GalleryDialog photo={activePhoto}  />
    </>
  );
}

function FlickrImg({ id, title, thumbUrl, largeUrl, handleClick }: FlickrImgProps) {
  return <a 
    target='_blank'
    href={largeUrl} 
    onClick={(e) => {
      e.preventDefault();
      handleClick();
    }}>
      <img src={thumbUrl} alt={title} />
    </a>;
}

function GalleryDialog({ photo }: { photo: FlickrImgInSet | null }) {
  let dialogAttr: { open?: boolean } = {};
  if (photo !== null) {
    dialogAttr.open = true;
  }

  return (
    <dialog {...dialogAttr}>
      {photo && <img src={photo.largeUrl} alt={photo.title} />}
    </dialog>
  );
}