import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/store";

type detailsAlbumState = {
    detailsAlbum: any
}

const initialState: detailsAlbumState = {
    detailsAlbum: {}
}

const podcastDetailsSlice = createSlice({
    name: 'detailsAlbum',
    initialState,
    reducers: {
        addDetails: (state, action: PayloadAction<any>) => {
            state.detailsAlbum = action.payload
        }
    }
})

export const {
    addDetails
} = podcastDetailsSlice.actions;

export const getDataSelector = (state: RootState) => state.details;

export default podcastDetailsSlice.reducer;