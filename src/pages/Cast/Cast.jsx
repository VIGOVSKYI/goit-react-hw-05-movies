import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../pages/shared/servises/movies-api.js';
import { ColorRing } from 'react-loader-spinner';

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
      <ul>
        {items?.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              src={profile_path ? (`https://image.tmdb.org/t/p/w500/${profile_path}`) : (`http://placehold.it/50x75/`)}
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
