import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

import { IModalType } from '../types/types';

const modalRoot = document.querySelector('#modal-root')!;

const Modal = ({ children, closeModal }: IModalType) => {
  useEffect(() => {
    window.addEventListener('keydown', keyboardListener);

    return () => {
      window.removeEventListener('keydown', keyboardListener);
    };
  }, []);

  const keyboardListener = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return createPortal(
    <div className="Overlay">
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
