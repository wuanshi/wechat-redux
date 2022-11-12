import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

import compareListReducer from "./CompareListSlice/index"

import storage from "./storage"

const persistConfig = {
  key: "root",
  storage: storage,
}

const reducers = combineReducers({
  compareList: compareListReducer,
})

const _persistReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: _persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
