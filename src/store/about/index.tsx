import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AboutState {
    text: string
}

const initialState: AboutState = {
    text: "这是About组件"
};

export const aboutStore = createSlice({
    name: "about",
    initialState,
    reducers: {
        updateText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
});

export const { updateText } = aboutStore.actions;
export  default aboutStore.reducer;