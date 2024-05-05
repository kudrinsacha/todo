export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoListType = TodoType[];

export type ShowFilterValueType = 'all' | 'active' | 'completed';

export type ShowFilterType = { value: ShowFilterValueType; label: string; checked: boolean }[];
