import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pets: [],
}

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPetsRedux: (state, action) => {
      state.pets = action.payload
    },
  }
})

export const { setPetsRedux } = petsSlice.actions
export default petsSlice.reducer