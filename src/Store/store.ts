import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from '../Features/podcast.slice';
import detailsReducer from '../Features/podcastDetails.slice';
import filterReducer from '../Features/filter.slice';
import loaderReducer from '../Features/loader.slice';

const Store = configureStore({
    reducer: {
        podcasts: podcastsReducer,
        details: detailsReducer,
        filter: filterReducer,
        loader: loaderReducer,
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;

export default Store;