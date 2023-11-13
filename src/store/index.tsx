import { configureStore } from "@reduxjs/toolkit";
// home 模块的reducer
import counterReducer from "./home";
import aboutReducer from "./about";
// 创建sotre 的组合子模块
const store = configureStore({
    reducer: {
        counter: counterReducer,
        about: aboutReducer,
    }
});
// 从存储本身推断“RootState”和“AppDispatch”类型
export type RootState = ReturnType<typeof store.getState>
// 推断类型：｛counter:counterState｝
export type AppDispatch = typeof store.dispatch
export default store;