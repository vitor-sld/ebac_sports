import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const carrinhoItem = useSelector(
    (state: RootReducer) => state.carrinho.produtos
  )
  const totalPreco = carrinhoItem.reduce(
    (acc, produtos) => acc + produtos.preco,
    0.0
  )
  const produtoFavoritado = useSelector(
    (state: RootReducer) => state.favoritor.itens
  )
  const totalFavoritado = produtoFavoritado.length
  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{totalFavoritado} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinhoItem.length} itens, valor total: R${paraReal(totalPreco)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
