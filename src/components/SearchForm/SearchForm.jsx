import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import initialState from './initialState';

import styles from './searchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handlChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handlSubmit = e => {
    e.preventDefault();
    if (state.search.trim() === '') {
      return alert('Search field is empty');
    }
    const { search } = state;
    onSubmit({ search });
    setState({ ...initialState });
  };

  return (
    <>
      <header className={styles.searchBar}>
        <form onSubmit={handlSubmit} className={styles.form}>
          <button type="submit" className={styles.button}>
            <HiOutlineSearchCircle size="25px" color="blue" />
          </button>

          <input
            value={state.search}
            name="search"
            className={styles.input}
            type="text"
            autoFocus
            placeholder="Search movies"
            onChange={handlChange}
          />
        </form>
      </header>
    </>
  );
};

export default SearchForm;

SearchForm.PropTopse = {
  onSubmit: PropTypes.func.isRequired,
};
