import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/store";
import { TPoster } from "../Models/TPodcast";

type PodcastState = {
    podcastsList: TPoster[]
}

const initialState: PodcastState = {
    podcastsList: []
}

const podcastSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
        addPodcasts: (state, action: PayloadAction<TPoster[]>) => {
            state.podcastsList = action.payload
        },

    }
})

export const {
    addPodcasts
} = podcastSlice.actions;

export const getDataSelector = (state: RootState) => state.podcasts;

export default podcastSlice.reducer;