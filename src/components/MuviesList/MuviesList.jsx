import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './muviesList.module.css';

const MuviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, name }) => (
    <Link
      key={id}
      to={`/movie/${id}`}
      state={{ from: location }}
      className={styles.moviesItemLink}
    >
      <li className={styles.moviesItem}>
        <p>{title || name}</p>
      </li>
    </Link>
  ));

  return <ul className={styles.moviesList}>{elements}</ul>;
};

export default MuviesList;

MuviesList.defaultProps = {
  items: [],
};

MuviesList.prototypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
