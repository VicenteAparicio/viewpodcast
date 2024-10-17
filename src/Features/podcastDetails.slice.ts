import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/store";
import { TPodcast } from "../Models/TPodcast";

type detailsAlbumState = {
    detailsAlbum: TPodcast
}

const initialState: detailsAlbumState = {
    detailsAlbum: {
        albumData: {
            name: '',
            src: '',
            author: '',
            description: '',
            podcastId: '',
        },
        listOfEpisodes: []
    }
}

const podcastDetailsSlice = createSlice({
    name: 'detailsAlbum',
    initialState,
    reducers: {
        addDetails: (state, action: PayloadAction<TPodcast>) => {
            state.detailsAlbum = action.payload
        }
    }
})

export const {
    addDetails
} = podcastDetailsSlice.actions;

export const getDataSelector = (state: RootState) => state.details;

export default podcastDetailsSlice.reducer;