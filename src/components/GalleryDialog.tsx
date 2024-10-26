import { useEffect, useState, useRef } from "react";

type GalleryDialogProps = {
  photo: FlickrImgInSet | null;
  handleClose: React.MouseEventHandler<HTMLDialogElement>;
  handleKeys: React.KeyboardEventHandler<HTMLDialogElement>;
}

export default function GalleryDialog({ photo, handleClose, handleKeys }: GalleryDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const timeoutRef = useRef<number | undefined>();
  const isOpen = !!photo;

  useEffect(() =>{
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    // delay the loader animation to prevent flicker on fast img loads
    if (isLoading) {
      timeoutRef.current = window.setTimeout(() => {
        if (dialogRef.current) {
          dialogRef.current.classList.add('loading');
        }
      }, 200);
    } else {
      if (dialogRef.current) {
        dialogRef.current.classList.remove('loading');
      }
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
  }, [photo]);

  return (
    <dialog onClick={handleClose} onKeyDown={handleKeys} ref={dialogRef}>
      <button>Close</button>
      <div className='loader'></div>
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