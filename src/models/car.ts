export interface Car {
  id: number;
  name: string;
  price: number;
  date: string;
  image: string;
  inFavorites: boolean;
  inComparison: boolean;
}
export const items: Car[] = [
  {
    id: 1,
    name: 'First car',
    price: 100,
    date: '15-07',
    image: '',
    inFavorites: false,
    inComparison: false,
  },
  {
    id: 2,
    name: 'Second car',
    price: 200,
    date: '16-07',
    image: '',
    inFavorites: false,
    inComparison: false,
  },
];
