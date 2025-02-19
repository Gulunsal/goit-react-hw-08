import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContact } from "./operations";
import { logout } from "../auth/operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    status: "idle",
    items: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchContact.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = "failed fetching";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default contactSlice.reducer;
