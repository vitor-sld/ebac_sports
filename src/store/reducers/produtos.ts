import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
  favorito?: boolean
}
type PropsProdutos = {
  produtos: Produto[]
}
const initialState: PropsProdutos = {
  produtos: []
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
      } else {
        return state
      }
    },
    favoritar: (state, action: PayloadAction<number>) => {
      const indexFavoritado = state.produtos.findIndex((item) => {
        item.id === action.payload ? action.payload : false
      })
      if (indexFavoritado) {
        state.produtos[indexFavoritado].favorito =
          !state.produtos[indexFavoritado].favorito
      }
    }
  }
})

export const { AdicionarCarrinho, favoritar } = carrinhoReducer.actions
export default carrinhoReducer.reducer
