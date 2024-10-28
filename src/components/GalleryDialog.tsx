import { useEffect, useState, useRef } from "react";

type GalleryDialogProps = {
  photo: FlickrImgInSet | null;
  handleClose: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

export default function GalleryDialog({ photo, handleClose, handleNext, handlePrevious }: GalleryDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = !!photo;

  useEffect(() =>{
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    setIsLoading(true);
  }, [photo]);

  function handleKeys(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    }
  }

  return (
    <dialog onClick={handleClose} onKeyDown={handleKeys} ref={dialogRef} className={isLoading ? 'loading' : ''}>
      <button className='close'>Close</button>
      
      <button className='left-arrow' onClick={e => {
        e.stopPropagation();
        handlePrevious();
      }}>Go Left</button>
      
      <button className='right-arrow' onClick={e => {
        e.stopPropagation();
        handleNext();
      }}>Go Right</button>

      {photo && 
        <img src={photo.largeUrl} 
          key={photo.id} 
          alt={photo.title} 
          title={photo.title} 
          onClick={(e) => e.stopPropagation()}
          onLoad={() => setIsLoading(false)}
      />}
      <div className='loader'></div>
    </dialog>
  );
}