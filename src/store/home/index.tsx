import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
}
// 初始化状态
const initialState: CounterState = {
  value: 0,
};
// createSlice 创建counter-store
export const counterStore = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 修改状态的方法
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
// 导出action
export const { increment, decrement, incrementByAmount } = counterStore.actions;
// 导出reducer
export default counterStore.reducer;