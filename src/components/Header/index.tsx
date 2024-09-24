import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const carrinhoItem = useSelector(
    (state: RootReducer) => state.carrinho.produtos
  )
  const totalPreco = carrinhoItem.reduce(
    (acc, produtos) => acc + produtos.preco,
    0.0
  )
  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>
          {carrinhoItem.reduce(
            (acc, item) => (item.favorito ? acc + 1 : acc),
            0
          )}{' '}
          favoritos
        </span>
        <img src={cesta} />
        <span>
          {carrinhoItem.length} itens, valor total: R${paraReal(totalPreco)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
