import { useState, useEffect } from 'react';
import { fetchMovieTrending } from '../shared/servises/movies-api.js';
import Loading from '../../pages/shared/Loading/Loading';
import MuviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [items, setItems] = useState(null);
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
          <Loading />
        </div>
      )}
      {items && <MuviesList items={items} />}
    </>
  );
};
export default Home;
