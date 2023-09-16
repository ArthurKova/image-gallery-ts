import { ReactNode } from 'react';

export interface onClick {
  onLoadMoreClick: () => void;
}

interface Data {
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

export interface Props {
  data: Data;
}

export interface IModalType {
  children: ReactNode;
  closeModal: () => void;
}

export interface IUserSubmit {
  onSubmit: (value: string) => void;
}

interface ModalData {
  img?: string;
  alt?: string;
}

export interface IInitialState {
  modal: ModalData;
}

export interface IGallery {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
  user_id: number;
}
