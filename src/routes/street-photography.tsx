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
        {[...Array(4).keys()].map((k) => {
          return (
            <div className='col' key={k}>
              {photos.map((p, idx) => {
                if (idx % 4 === k) 
                  return <FlickrImg key={p.id} handleClick={() => setActivePhoto(p)} {...p} />;
              })}
            </div>
          );
        })}
      </div>
      <GalleryDialog photo={activePhoto} handleClose={() => setActivePhoto(null)}  />
    </>
  );
}

type FlickrImgProps = FlickrImgInSet & {
  handleClick: () => void;
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

type GalleryDialogProps = {
  photo: FlickrImgInSet | null;
  handleClose: () => void;
}

function GalleryDialog({ photo, handleClose }: GalleryDialogProps) {
  let dialogAttr: { open?: boolean } = {};
  if (photo !== null) {
    dialogAttr.open = true;
  }

  return (
    <dialog {...dialogAttr} onClick={handleClose}>
      <button onClick={handleClose}>Close</button>
      {photo && <img src={photo.largeUrl} alt={photo.title} onClick={(e) => {e.stopPropagation()}}/>}
    </dialog>
  );
}