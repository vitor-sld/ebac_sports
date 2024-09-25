import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type PropsProdutos = {
  produtos: Produto[]
  favoritos: Produto[]
}
const initialState: PropsProdutos = {
  produtos: [],
  favoritos: []
}

const carrinhoReducer = createSlice({
  name: 'ContagemCarrinho',
  initialState,
  reducers: {
    AdicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const estaArmazenado = state.produtos.some((item) =>
        item.id === action.payload.id ? true : false
      )
      if (!estaArmazenado) {
        state.produtos.push(action.payload)
      }
    }
  }
})

export const { AdicionarCarrinho } = carrinhoReducer.actions
export default carrinhoReducer.reducer
