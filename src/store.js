import {
  configureStore 
} from '@reduxjs/toolkit'
import personalWebsiteAxios from './redux/personalWebsiteAxiosSlice'
import frontMissionAxiosSlice from './redux/frontMissionAxiosSlice'
import showTransparentOverlaySlice from './redux/showTransparentOverlaySlice'

export const store = configureStore({
  reducer: {
    personalWebsiteData: personalWebsiteAxios,
    frontMissionData: frontMissionAxiosSlice,
    showTransparentOverlay: showTransparentOverlaySlice,
  },
})