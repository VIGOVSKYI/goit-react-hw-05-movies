import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';
import items from './items.js';

const NavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.navigationLink} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.navigationList}>{elements}</ul>;
};

export default NavBar;
