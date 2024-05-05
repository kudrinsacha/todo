import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/pages/Layout/Layout';
import { Home } from '@/pages/Home/Home';
import { Todo } from '@/pages/Todo/Todo';
import { NotFound } from '@/pages/NotFound/NotFound';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todolist" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
