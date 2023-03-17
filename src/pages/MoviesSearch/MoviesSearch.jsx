import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearchQuery } from '../shared/servises/movies-api.js';
import Loading from '../../pages/shared/Loading/Loading';
import SearchForm from '../../components/SearchForm/SearchForm';
import MuviesList from '../../components/MoviesList/MoviesList';

const MoviesSearch = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const data = await fetchMovieBySearchQuery(search);
          setItems(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }
  }, [search, setItems, setError, setLoading]);

  const searchMovies = ({ search }) => {
    setSearchParams({ search });
  };

  return (
    <>
      {error && <p>error</p>}
      <SearchForm onSubmit={searchMovies} />
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {items && <MuviesList items={items} />}
    </>
  );
};

export default MoviesSearch;
