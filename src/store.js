import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './features/favorites'

export default configureStore({
  reducer: {
    favorites: favoritesReducer
  },
})