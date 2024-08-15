import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './features/video/videoSlice'

export default configureStore({
  reducer: {
    videoList: videoReducer
  }
})