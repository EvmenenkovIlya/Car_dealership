import { Car } from '../../models/car';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface ComparisonPage {
  items: Car[];
}

const initialState: ComparisonPage = {
  items: [],
};

const сomparisonPageSlice = createSlice({
  name: 'сomparisonPage',
  initialState,
  reducers: {
    toggleToСomparison: (state, action: PayloadAction<Car>) => {
      const inList = state.items.find((item) => item.id === action.payload.id);
      if (!inList) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    clearСomparison: (state) => {
      state.items = [];
    },
  },
});

export const { toggleToСomparison, clearСomparison } = сomparisonPageSlice.actions;

export const selectСomparisonItems = (state: RootState) => state.сomparisonPage.items;
export const selectСomparisonItemsCount = (state: RootState) => state.сomparisonPage.items.length;

export const сomparisonPageReducer = сomparisonPageSlice.reducer;
