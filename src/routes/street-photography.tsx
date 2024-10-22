
import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef, forwardRef } from 'react';
import GalleryDialog from '../components/GalleryDialog';
import FlickrImg from '../components/FlickrImg';
import '../assets/street-photography.css'

export const Route = createFileRoute('/street-photography')({
  component: StreetPhotography,
})

const API_URL = import.meta.env.VITE_API_URL;

function StreetPhotography() {
  const [photos, setPhotos] = useState<FlickrImgInSet[]>([]);
  const [activePhoto, setActivePhoto] = useState<FlickrImgInSet | null>(null);
  const [error, setError] = useState<boolean>(false);
  const getPhotosUrl = API_URL.concat('/flickr/get-street');

  useEffect(() => {
    async function getFlickrPhotos() {
      try {
        const response = await fetch(getPhotosUrl);
        if (!response.ok) {
          throw new Error(`Can't reach server API.`);
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setPhotos([]);
        setError(true);
      }
    }
    getFlickrPhotos();
  }, []);

  return (
    <>
      <div className='gallery'>
        {error === true && <h4 className='flickr-error'>Can't reach the server API.<br />Please try again later.</h4>}
        {photos.length > 0 && [...Array(4).keys()].map((k) => {
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
      <GalleryDialog 
        photo={activePhoto} 
        handleClose={() => setActivePhoto(null)}
        handleKeys={(e) => {
          e.preventDefault();
          if (e.key === 'Escape') {
            setActivePhoto(null);
          }
        }}  />
    </>
  );
}
