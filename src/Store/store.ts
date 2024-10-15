// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import podcasts from '../Features/podcast.slice';
import details from '../Features/podcastDetails.slice';
const Store = configureStore({
    reducer: {
        podcasts,
        details
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;

export default Store;