import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './features/video/videoSlice'
import userReducer from './features/user/userSlice'
import viewReducer from './features/view/viewSlice'

export default configureStore({
  reducer: {
    videoList: videoReducer,
    user: userReducer,
    view: viewReducer
  }
})