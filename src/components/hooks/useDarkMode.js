import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage(true);
  return [value, setValue];
};
