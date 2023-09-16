import { useState, useEffect, MouseEvent } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal';
import galleryFetch from '../api/fetch';
import { IInitialState, IGallery } from '../types/types';

const initialState: IInitialState = {
  modal: {},
};

const ImageGallery = ({ request }: { request: string }) => {
  const [gallery, setGallery] = useState<IGallery[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (request === '') {
      return;
    }

    setPage(1);
    setTimeout(() => {
      galleryFetch(request, page).then(response => {
        setGallery(response);
      });
    }, 1000);
  }, [request]);

  useEffect(() => {
    if (request === '') {
      return;
    }

    setPage(1);
    setTimeout(() => {
      galleryFetch(request, page).then(response => {
        setGallery(response);
      });
    }, 1000);
  }, [request]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    galleryFetch(request, page).then(response => {
      setGallery(prevState => [...prevState, ...response]);
    });
  }, [page]);

  useEffect(() => {
    if (modal) {
      window.addEventListener('click', galleryPageKeyboardClose);
    }

    return () => {
      window.removeEventListener('click', galleryPageKeyboardClose);
    };
  }, [modal]);

  const onLoadMoreClick = (): void => {
    setPage(prevState => prevState + 1);
  };

  const galleryPageKeyboardClose = (e: MouseEvent | any): void => {
    if (e.currentTarget.tagName !== 'IMG') {
      toggleModal();
    }
  };

  const onImageModalOpen = (e: MouseEvent) => {
    const {
      alt,
      dataset: { img },
    } = e.target as HTMLImageElement;
    initialState.modal = { alt, img };
    toggleModal();
  };

  const toggleModal = () => setModal(prev => !prev);

  // markup

  if (gallery.length > 0) {
    return (
      <>
        <ul className="ImageGallery" onClick={onImageModalOpen}>
          {gallery.map(data => (
            <ImageGalleryItem data={data} key={data.id + data.user_id} />
          ))}
        </ul>
        <Button onLoadMoreClick={onLoadMoreClick} />
        {modal && (
          <Modal closeModal={toggleModal}>
            <img src={initialState.modal.img} alt={initialState.modal.alt} />
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <h1 className="page-title">What are we going to look for?</h1>
    </>
  );
};

export default ImageGallery;

// if (initialState.status === STATUS.DONE) {
//   return (
//     <>
//       <ul className="ImageGallery" onClick={onImageModalOpen}>
//         {gallery.map(data => (
//           <ImageGalleryItem data={data} key={data.id} />
//         ))}
//       </ul>
//       <Button onLoadMoreClick={onLoadMoreClick} />
//       {modal && (
//         <Modal closeModal={toggleModal}>
//           <img src={initialState.modal.img} alt={initialState.modal.alt} />
//         </Modal>
//       )}
//     </>
//   );
// }
// if (initialState.status === STATUS.EMPTY) {
//   return <h1>Enter your request</h1>;
// }
// if (initialState.status === STATUS.PENDING) {
//   return <Loader />;
// }

//  <>
//    <ul className="ImageGallery" onClick={onImageModalOpen}>
//      {gallery.map(data => (
//        <ImageGalleryItem data={data} key={data.id} />
//      ))}
//    </ul>
//    <Button onLoadMoreClick={onLoadMoreClick} />
//    {modal && (
//      <Modal closeModal={toggleModal}>
//        <img src={initialState.modal.img} alt={initialState.modal.alt} />
//      </Modal>
//    )}
//  </>;
