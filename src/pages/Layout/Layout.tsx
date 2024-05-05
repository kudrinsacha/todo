import { Link, Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Link to="/">Home</Link>
        <Link to="todolist">TodoList</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
