import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://onlymeus.pythonanywhere.com/api";


export const getCategories = createAsyncThunk(
    "main/categories/get",
    async (id,{ rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL}/restaurant/category/`);
        return response.data;
      } catch (error) {
        if (error.response && error.response.data) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
export const getMain = createAsyncThunk(
    "main/maindata/get",
    async (id,{ rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL}/restaurant/restaurant/`);
        return response.data;
      } catch (error) {
        if (error.response && error.response.data) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );




export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        categories: [],
        categoriesLoading: false,
        categoriesError: false,
        mainData: [],
        mainLoading: false,
        mainError: false,
        
    },
    reducers: {},
    extraReducers: (builder) => {
          builder.addCase(getCategories.pending, (state) => {
            state.categoriesLoading = true;
            state.categoriesError = false;
          });
          builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categoriesLoading = false;
            state.categoriesError = false;
            state.categories = action.payload;
          });
          builder.addCase(getCategories.rejected, (state, action) => {
            state.categoriesLoading = false;
            state.categoriesError = action.payload ;
          });
          builder.addCase(getMain.pending, (state) => {
            state.mainLoading = true;
            state.mainError = false;
          });
          builder.addCase(getMain.fulfilled, (state, action) => {
            state.mainLoading = false;
            state.mainError = false;
            state.mainData = action.payload;
          });
          builder.addCase(getMain.rejected, (state, action) => {
            state.mainLoading = false;
            state.mainError = action.payload ;
          });
       
          
         
     
  
      },
})

export const mainReducer = mainSlice.reducer;