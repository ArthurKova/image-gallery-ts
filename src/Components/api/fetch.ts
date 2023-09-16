import axios from 'axios';
const KEY = '38777949-9fd3a86c95b2ce83099656e1b';

const galleryFetch = async (
  currentRequest: string,
  page: number
): Promise<[]> => {
  try {
    const responce = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${currentRequest}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return responce.data.hits;
  } catch (error: any) {
    return error;
  }
};

export default galleryFetch;
