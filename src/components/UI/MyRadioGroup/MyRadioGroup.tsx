import { ShowFilterValueType } from '@/types/todo';

import styles from './MyRadioGroup.module.scss';

type MyRadioGroupProps = {
  items: { value: ShowFilterValueType; label: string; checked: boolean }[];
  handleFilterValue: (e: React.ChangeEvent<HTMLInputElement> & { target: { value: ShowFilterValueType } }) => void;
};

export const MyRadioGroup = ({ items, handleFilterValue }: MyRadioGroupProps) => {
  return (
    <div className={styles.radioGroup}>
      {items.map((item) => (
        <div className={styles.radioGroupeElem} key={item.value}>
          <input
            onChange={handleFilterValue}
            type="radio"
            id={item.value}
            value={item.value}
            name="showTodos"
            defaultChecked={item.checked}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};
