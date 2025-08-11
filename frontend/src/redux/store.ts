import { configureStore, createSlice } from "@reduxjs/toolkit";

const dummySlice = createSlice({
  name: "dummy",
  initialState: { value: "Hello" },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
