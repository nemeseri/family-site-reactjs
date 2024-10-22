import { useEffect, useRef } from "react";

type GalleryDialogProps = {
  photo: FlickrImgInSet | null;
  handleClose: React.MouseEventHandler<HTMLDialogElement>;
  handleKeys: React.KeyboardEventHandler<HTMLDialogElement>;
}

export default function GalleryDialog({ photo, handleClose, handleKeys }: GalleryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = !!photo;

  useEffect(() =>{
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);
  return (
    <dialog onClick={handleClose} onKeyDown={handleKeys} ref={dialogRef}>
      <button>Close</button>
      {photo && <img src={photo.largeUrl} alt={photo.title} onClick={(e) => {e.stopPropagation()}}/>}
    </dialog>
  );
}