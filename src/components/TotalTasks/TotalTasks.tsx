import styles from './TotalTasks.module.scss';

type TotalTasksProps = {
  count: number;
};

export const TotalTasks = ({ count }: TotalTasksProps) => {
  return <div className={styles.totalTasks}>Total tasks: {count}</div>;
};
