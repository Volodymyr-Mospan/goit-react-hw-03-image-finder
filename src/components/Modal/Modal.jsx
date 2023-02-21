import { Overlay, ModalStl } from 'components/Modal/Modal.styled';

export const Modal = ({ src, alt, onClick }) => {
  return (
    <Overlay onClick={onClick}>
      <ModalStl>
        <img src={src} alt={alt} />
      </ModalStl>
    </Overlay>
  );
};
