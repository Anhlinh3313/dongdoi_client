import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  groups: [],
}

export const AppReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDataApp: (state, action) => {
      return {...state, ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDataApp } = AppReducer.actions

export default AppReducer.reducer