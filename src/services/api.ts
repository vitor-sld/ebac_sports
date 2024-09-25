import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/api/ebac_sports',
      // Transformando a resposta da API para adicionar a propriedade 'favorito'
      transformResponse: (response: Produto[]) => {
        return response.map((produto) => ({
          ...produto,
          favorito: false // Adiciona a propriedade 'favorito' com valor 'false'
        }))
      }
    })
  })
})

export const { useGetProdutosQuery } = api

export default api
