import { useEffect, useState, useRef } from "react";

type GalleryDialogProps = {
  photo: FlickrImgInSet | null;
  handleClose: React.MouseEventHandler<HTMLDialogElement>;
  handleKeys: React.KeyboardEventHandler<HTMLDialogElement>;
}

export default function GalleryDialog({ photo, handleClose, handleKeys }: GalleryDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <dialog onClick={handleClose} onKeyDown={handleKeys} ref={dialogRef} className={isLoading ? 'loading' : ''}>
      <button>Close</button>
      <div className='img-skeleton'></div>
      {photo && 
        <img src={photo.largeUrl} 
          key={photo.id} 
          alt={photo.title} 
          title={photo.title} 
          onClick={(e) => e.stopPropagation()}
          onLoad={() => setIsLoading(false)}
      />}
    </dialog>
  );
}