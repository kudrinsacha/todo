import { useState } from 'react';

import { TodoListType, TodoType } from '@/types/todo';
import { INITIAL_IS_EDIT } from '@/constans/todo';

import styles from './TodoListItem.module.scss';

type TodoListItemProps = {
  todo: TodoType;
  setTodoList: React.Dispatch<React.SetStateAction<TodoListType>>;
};

export const TodoListItem = ({ todo, setTodoList }: TodoListItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(INITIAL_IS_EDIT);
  const [titleValue, setTitleValue] = useState<string>(todo.title);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
    setTitleValue(todo.title);
  };

  const handleCheck = () => {
    setTodoList((prev: TodoListType) =>
      prev.map((task) => {
        if (task.id === todo.id) {
          return { ...task, completed: !task.completed };
        }
        return { ...task };
      })
    );
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const handleRemove = () => {
    setTodoList((prev: TodoListType) => prev.filter((task) => task.id !== todo.id));
  };

  const handleSave = () => {
    if (titleValue !== todo.title) {
      setTodoList((prev: TodoListType) =>
        prev.map((task) => {
          if (task.id === todo.id) {
            return { ...task, title: titleValue };
          }
          return { ...task };
        })
      );
    }
    setIsEdit(INITIAL_IS_EDIT);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todoSection}>
        {!isEdit ? (
          <label htmlFor={todo.id} className={styles.todoTitle}>
            <input type="checkbox" id={todo.id} defaultChecked={todo.completed} onChange={handleCheck} className={styles.todoCheck} />
            {todo.title}
          </label>
        ) : (
          <label htmlFor={todo.id} className={styles.todoTitle}>
            <input type="text" id={todo.id} defaultValue={titleValue} onChange={handleTitleChange} className={styles.todoInput} />
          </label>
        )}
      </div>
      <div className={styles.todoSection}>
        <button onClick={handleEdit} className={styles.todoBtn}>
          {!isEdit ? 'edit' : 'cancel'}
        </button>
        {!isEdit ? (
          <button onClick={handleRemove} className={styles.todoBtn}>
            delete
          </button>
        ) : (
          <button onClick={handleSave} disabled={titleValue === ''} className={styles.todoBtn}>
            save
          </button>
        )}
      </div>
    </div>
  );
};
