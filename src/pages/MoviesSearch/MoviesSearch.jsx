import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearchQuery } from '../shared/servises/movies-api.js';
import { ColorRing } from 'react-loader-spinner';
import SearchForm from '../../components/SearchForm/SearchForm';
import MuviesList from '../../components/MuviesList/MuviesList';

const MoviesSearch = () => {
  const [items, setItems] = useState([]);
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
    setItems([]);
  };

  return (
    <>
      {error && <p>error</p>}
      <SearchForm onSubmit={searchMovies} />
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

export default MoviesSearch;
