import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div>
      <div>Oops !</div>
      <div>
        Page not found, go to{' '}
        <Link className={styles.link} to="/">
          Home
        </Link>
      </div>
    </div>
  );
};
