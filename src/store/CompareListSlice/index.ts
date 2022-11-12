import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type UnivProps = {
  udg_id: number
  udg_name: string
}

type initialProps = {
  value: Array<UnivProps>
}

const initialState: initialProps = {
  value: [],
}

const compareListStore = createSlice({
  name: "compareList",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<UnivProps>) => {
      // 当个数大于等于3个，且该学校不在其中
      if (
        state.value.length >= 3 &&
        !state.value.some((item) => item.udg_id == action.payload.udg_id)
      ) {
        state.value = [
          ...state.value
            .filter((item) => item.udg_id !== action.payload.udg_id)
            .slice(0, 3),
          action.payload,
        ]
      } else if (
        state.value.some((item) => item.udg_id == action.payload.udg_id)
      ) {
        // 选中学校不做处理
      } else {
        state.value = [
          action.payload,
          ...state.value.filter(
            (item) => item.udg_id !== action.payload.udg_id,
          ),
        ]
      }
    },
  },
})

export const { increment } =
  compareListStore.actions

export default compareListStore.reducer
