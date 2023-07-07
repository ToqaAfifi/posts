import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    post: {},
    toast: {
      error: false,
      message: ''
    }
  },
  reducers: {
    getPostsList: (state, action) => {
      state.list = action.payload
    },
    getPostDetails: (state, action) => {
      state.post = action.payload
    },
    deletePost: (state, action) => {
      state.list = state.list.filter(post => post.id !== action.payload)
    },
    getToastStatus: (state, action) => {
      state.toast = action.payload
    }
  }
})

export const postsReducer = postsSlice.reducer
export const { getPostsList, getPostDetails, deletePost, getToastStatus } = postsSlice.actions
