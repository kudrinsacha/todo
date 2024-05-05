import styles from './TodoForm.module.scss';

type TodoFormProps = {
  titleValue: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTodoAdd: () => void;
};

export const TodoForm = ({ titleValue, handleTitleChange, handleTodoAdd }: TodoFormProps) => {
  return (
    <div className={styles.todoAdd}>
      <input type="text" value={titleValue} onChange={handleTitleChange} className={styles.todoInput} />
      <button onClick={handleTodoAdd} disabled={titleValue === ''} className={styles.todoBtn}>
        Add
      </button>
    </div>
  );
};
