import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => action.payload,
    },
});

export const { setFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filter;
export default filtersSlice.reducer;