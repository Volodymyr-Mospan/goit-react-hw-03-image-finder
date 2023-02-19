import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  <ul class="gallery">
    {images.map(image => {
      return <ImageGalleryItem src="" alt="" />;
    })}
  </ul>;
};
