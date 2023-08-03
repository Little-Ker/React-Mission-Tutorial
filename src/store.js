import {
  configureStore 
} from '@reduxjs/toolkit'
import personalWebsiteAxios from './redux/personalWebsiteAxiosSlice'
import frontMissionAxiosSlice from './redux/frontMissionAxiosSlice'

export const store = configureStore({
  reducer: {
    personalWebsiteData: personalWebsiteAxios,
    frontMissionData: frontMissionAxiosSlice,
  },
})