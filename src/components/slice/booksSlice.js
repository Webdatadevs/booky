import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoadingBooks: false,
  booksData: [],
  saveBookData: localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites')) : [] ||  [], 
  basket: localStorage.getItem('shop') ? JSON.parse(localStorage.getItem('shop')) : [] || []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    isLoadingBooks(state){
        state.isLoadingBooks = true
    },
    getBooksData(state, action){
        state.booksData = action.payload
        state.isLoadingBooks = false
    },
    getSaveBookData(state, action){
      const existingBookIndex = state.saveBookData.findIndex(item => +item.id === +action.payload.id);
        if(action.payload.id){
          if (existingBookIndex === -1) {
            state.saveBookData.push(action.payload);
          } else {
            state.saveBookData.splice(existingBookIndex, 1);
          }
          localStorage.setItem('favorites', JSON.stringify(state.saveBookData));
      }
    },
    getBasketBookData(state, action){
      const existingBookIndex = state.basket.findIndex(item => +item.id=== + action.payload.id);
        if(existingBookIndex === -1){
          state.basket.push(action.payload);
        }
        localStorage.setItem('shop', JSON.stringify(state.basket));
      },
      getBasketBookDataDelete(state, action){
        const existingBookIndex = state.basket.findIndex(item => +item.id=== + action.payload.id);
          state.basket.splice(existingBookIndex, 1)
          localStorage.setItem('shop', JSON.stringify(state.basket))
        }
  },
})

export const { getBooksData, isLoadingBooks, getSaveBookData, getBasketBookData, getBasketBookDataDelete } = booksSlice.actions

export default booksSlice.reducer