import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type initialProps = {
  value: Array<number>
}

const initialState: initialProps = {
  value: [],
}

const compareListStore = createSlice({
  name: "compareList",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload)
    },
  },
})

export const { increment } =
  compareListStore.actions

export default compareListStore.reducer
