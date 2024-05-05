import { useMemo } from 'react';
import { TodoListItem } from '@/components/TodoListItem/TodoListItem';
import { TodoType, TodoListType, ShowFilterValueType } from '@/types/todo';

import styles from './TodoList.module.scss';

type TodoListProps = {
  todoList: TodoListType;
  setTodoList: React.Dispatch<React.SetStateAction<TodoListType>>;
  showFilterValue: ShowFilterValueType;
};

export const TodoList = ({ todoList, setTodoList, showFilterValue }: TodoListProps) => {
  const filteredList = useMemo(() => {
    switch (showFilterValue) {
      case 'all':
        return todoList;
      case 'active':
        return todoList.filter((task) => !task.completed);
      case 'completed':
        return todoList.filter((task) => task.completed);
      default:
        return [];
    }
  }, [todoList, showFilterValue]);

  return (
    <div className={styles.todoList}>
      {filteredList.map((todo: TodoType) => (
        <TodoListItem todo={todo} key={todo.id} setTodoList={setTodoList} />
      ))}
    </div>
  );
};
