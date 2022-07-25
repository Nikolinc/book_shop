import { BookNewsType } from '../../types/responce'
import { request } from './config'

export const BookGet = () =>
  request<BookNewsType>({
    method: 'get',
    url: `/book`,
  })
