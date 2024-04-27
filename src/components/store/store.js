import { configureStore } from '@reduxjs/toolkit'
import booksSlice from '../slice/booksSlice'

export const store = configureStore({
  reducer: {
    books: booksSlice
  },
})