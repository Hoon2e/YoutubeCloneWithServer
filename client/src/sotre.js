import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './_reducers/index'
import promiseMiddleware from "redux-promise";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, promiseMiddleware, ...getDefaultMiddleware()],
})

export default store