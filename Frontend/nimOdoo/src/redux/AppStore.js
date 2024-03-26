import { configureStore } from '@reduxjs/toolkit'
import AppSlice from './Slices/AppSlice'

export default configureStore({
  reducer: {
    AppGlobals: AppSlice,
  },
})