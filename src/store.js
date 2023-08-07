import {
  configureStore 
} from '@reduxjs/toolkit'
import personalWebsiteAxios from './redux/personalWebsiteAxiosSlice'
import frontMissionAxiosSlice from './redux/frontMissionAxiosSlice'
import showTransparentOverlaySlice from './redux/showTransparentOverlaySlice'
import showOpenAnimSlice from './redux/showOpenAnimSlice'

export const store = configureStore({
  reducer: {
    personalWebsiteData: personalWebsiteAxios,
    frontMissionData: frontMissionAxiosSlice,
    showTransparentOverlay: showTransparentOverlaySlice,
    showOpenAnim: showOpenAnimSlice,
  },
})