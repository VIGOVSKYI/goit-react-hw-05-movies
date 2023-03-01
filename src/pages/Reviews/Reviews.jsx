import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { fetchReview } from '../../pages/shared/servises/movies-api.js';

const Reviews = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setLoading(true);
        const data = await fetchReview(id);
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReview();
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
      {items.length === 0 ? (
        <span>We don't have any reviews for this movie.</span>
      ) : (
        <ul>
          {items.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Autor: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
