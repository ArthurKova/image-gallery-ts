import { useState } from 'react';
import './ImageFinder.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

const ImageFinder = () => {
  const [value, setValue] = useState<string>('');

  const onSubmit = (props: string): void => {
    setValue(props);
  };

  return (
    <div>
      <ToastContainer autoClose={1500} />
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery request={value} />
    </div>
  );
};

export default ImageFinder;
