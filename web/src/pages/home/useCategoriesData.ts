interface Category {
  id: number;
  name: string;
}

export const useCategoriesData = () => {
  return [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Pop' },
    { id: 3, name: 'Sock' },
    { id: 4, name: 'Stop' },
  ] as Category[];
};
