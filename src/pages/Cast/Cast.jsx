import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../pages/shared/servises/movies-api.js';
import Loading from '../../pages/shared/Loading/Loading';

const Cast = () => {
  const { id } = useParams();

  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesCast = async () => {
      try {
        setLoading(true);
        const data = await fetchCast(id);
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesCast();
  }, [id]);

  return (
    <>
      {error && <p>error</p>}
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      <ul>
        {items?.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `https://placehold.it/50x75/`
              }
              alt={name}
              width="100"
            />
            <h4 className="cast-name">{name}</h4>
            <span className="cast-character">Character: {character}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
