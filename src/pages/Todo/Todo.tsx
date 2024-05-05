import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MyRadioGroup } from '@/components/UI/MyRadioGroup/MyRadioGroup';
import { TodoList } from '@/components/TodoList/TodoList';
import { TodoForm } from '@/components/TodoForm/TodoForm';
import { TotalTasks } from '@/components/TotalTasks/TotalTasks';
import { INITIAL_NEW_TODO_VALUE, FILTER_ITEMS, INITIAL_FILTER_VALUE } from '@/constans/todo';
import { TodoListType, ShowFilterValueType } from '@/types/todo';

import styles from './Todo.module.scss';

export const Todo = () => {
  const STORAGE_LIST = localStorage.getItem('todoList');
  const INITIAL_TODOS_LIST = (STORAGE_LIST && JSON.parse(STORAGE_LIST)) ?? [];
  const [todoList, setTodoList] = useState<TodoListType>(INITIAL_TODOS_LIST);
  const [titleValue, setTitleValue] = useState(INITIAL_NEW_TODO_VALUE);
  const [showFilterValue, setShowFilterValue] = useState<ShowFilterValueType>(INITIAL_FILTER_VALUE);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const handleTodoAdd = () => {
    setTodoList([...todoList, { id: uuidv4(), title: titleValue, completed: false }]);
    setTitleValue(INITIAL_NEW_TODO_VALUE);
  };

  const handleFilterValue = (e: React.ChangeEvent<HTMLInputElement> & { target: { value: ShowFilterValueType } }) => {
    setShowFilterValue(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={styles.todo}>
      <TodoForm titleValue={titleValue} handleTitleChange={handleTitleChange} handleTodoAdd={handleTodoAdd} />
      <MyRadioGroup items={FILTER_ITEMS} handleFilterValue={handleFilterValue} />
      <TotalTasks count={todoList.length} />
      <TodoList todoList={todoList} setTodoList={setTodoList} showFilterValue={showFilterValue} />
    </div>
  );
};
