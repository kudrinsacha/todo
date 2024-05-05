import { ShowFilterType } from '../types/todo';

export const FILTER_ITEMS: ShowFilterType = [
  { value: 'all', label: 'Show All Tasks', checked: true },
  { value: 'active', label: 'Show Active Tasks', checked: false },
  { value: 'completed', label: 'Show completed Tasks', checked: false },
];

export const INITIAL_NEW_TODO_VALUE = '';
export const INITIAL_IS_EDIT = false;
export const INITIAL_FILTER_VALUE = 'all';
