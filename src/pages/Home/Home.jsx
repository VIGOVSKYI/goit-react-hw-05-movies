import { useState, useEffect } from 'react';
import { fetchMovieTrending } from '../shared/servises/movies-api.js';
import { ColorRing } from 'react-loader-spinner';
import MuviesList from '../../components/MuviesList/MuviesList';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieTrending();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [setItems, setError, setLoading]);

  return (
    <>
      {error && <p>error</p>}
      {loading && (
        <div>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      )}
      <MuviesList items={items} />
    </>
  );
};
export default Home;
