import { Car } from '../../models/car';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface FavoritesPage {
  items: Car[];
  minPrice: number;
  maxPrice: number;
}

const initialState: FavoritesPage = {
  items: [],
  minPrice: 0,
  maxPrice: 100000,
};

const favoritesPageSlice = createSlice({
  name: 'favoritesPage',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Car>) => {
      state.items.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Car>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesPageSlice.actions;

export const selectFavoritesItems = (state: RootState) => state.favoritesPage.items;
export const selectFavoritesItemsCount = (state: RootState) => state.favoritesPage.items.length;

export const favoritesPageReducer = favoritesPageSlice.reducer;
