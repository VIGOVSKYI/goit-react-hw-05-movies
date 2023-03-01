import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { fetchMovieDetails } from '../../pages/shared/servises/movies-api.js';
import styles from './movieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();

  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setItems(data);
      } catch ({ response }) {
        setError(response.dada.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
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
      <button
        type="button"
        onClick={() => {
          navigate(from);
        }}
        className={styles.goBack}
      >
        Go back
      </button>
      <div className={styles.MovieDetailsPage}>
        <div className={styles.detailsImageWrapper}>
          {items?.poster_path && (
            <img
              className={styles.detailsImage}
              src={
                items?.poster_path
                  ? `https://image.tmdb.org/t/p/w400${items?.poster_path}`
                  : `http://placehold.it/300`
              }
              alt={items?.title}
              width="300"
            />
          )}
        </div>
        <div className={styles.detailsContentWrapper}>
          <h2 className={styles.title}>{items?.title}</h2>
          <span className={styles.cardYear}>
            {items?.release_date.slice(0, 4)}
          </span>
          <span className={styles.userScore}>
            User score: {items?.vote_average * 10}%
          </span>
          <h3 className={styles.overViewTitle}>Overview</h3>
          <p className={styles.overView}>{items?.overview}</p>
          <h4 className={styles.genresTitle}>Genres:</h4>

          <ul>
            {items?.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <span className={styles.additionalInformationTitle}>
        Additional information
      </span>

      <Link
        to="cast"
        state={{ from }}
        className={styles.additionalInformationLink}
      >
        Cast
      </Link>
      <Link
        to="reviews"
        state={{ from }}
        className={styles.additionalInformationLink}
      >
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
