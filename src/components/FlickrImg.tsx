type FlickrImgProps = FlickrImgInSet & {
  handleClick: () => void;
}

export default function FlickrImg({ title, thumbUrl, largeUrl, handleClick }: FlickrImgProps) {
  return <a 
    target='_blank'
    title={title}
    href={largeUrl} 
    onClick={(e) => {
      e.preventDefault();
      handleClick();
    }}>
      <img src={thumbUrl} alt={title} />
    </a>;
}