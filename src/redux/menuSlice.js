import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MENU_API_URL = 'https://ymagyn-76ef3-default-rtdb.europe-west1.firebasedatabase.app/products.json';

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async () => {
  const response = await axios.get(MENU_API_URL);
  return response.data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
