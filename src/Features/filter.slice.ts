import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  searchFilter: string;
}

const initialState: FilterState = {
    searchFilter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchFilter = action.payload;
    },
    clearSearch(state) {
      state.searchFilter = '';
    },
  },
});

export const { setSearch, clearSearch } = filterSlice.actions;
export default filterSlice.reducer;
