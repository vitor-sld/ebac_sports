import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/produtos'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})
export type RootReducer = ReturnType<typeof store.getState>
export default store
