import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { postsReducer, postsSlice } from "./slices/postsSlice";
import saga from "./saga/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga);

export const postsActions = postsSlice.actions;
