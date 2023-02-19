import { React } from 'react';
import {
  ImageGalleryItemStld,
  ImageGalleryImageStld,
} from 'components/ImageGallery/ImageGallery.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ImageGalleryItemStld>
      <ImageGalleryImageStld src={src} alt={alt} />
    </ImageGalleryItemStld>
  );
};
