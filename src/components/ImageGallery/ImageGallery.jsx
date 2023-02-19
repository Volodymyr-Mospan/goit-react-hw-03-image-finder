import { React } from 'react';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem';
import { ImageGalleryStld } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ImageGalleryStld>
        {images.map(image => {
          return (
            <ImageGalleryItem
              src={image.webformatURL}
              alt={image.tags}
              key={image.id}
            />
          );
        })}
      </ImageGalleryStld>
    </div>
  );
};
