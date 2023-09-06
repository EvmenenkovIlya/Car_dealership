import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUserSlice';
import { favoritesPageReducer } from '../pages/FavoritesPage/favoritesPageSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    favoritesPage: favoritesPageReducer,
  },
  middleware: [thunk, logger],
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
