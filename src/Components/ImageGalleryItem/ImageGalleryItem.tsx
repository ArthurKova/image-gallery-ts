import './ImageGalleryItem.css';
import { Props } from '../types/types';

const ImageGalleryItem = ({ data }: Props) => {
  const { largeImageURL, webformatURL, tags } = data;

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        data-img={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
