import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/produtos'
import api from '../services/api'
import favoritoSlice from './reducers/favorito'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritor: favoritoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
export type RootReducer = ReturnType<typeof store.getState>
export default store
