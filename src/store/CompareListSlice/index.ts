import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type initialProps = {
  value: number
}

const initialState: initialProps = {
  value: 0,
}

const compareListStore = createSlice({
  name: "compareList",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment } =
  compareListStore.actions

export default compareListStore.reducer
