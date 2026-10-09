import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPublicHome } from "@/lib/publicApi";

type HomeState = {
  data: unknown | null;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: HomeState = { data: null, status: "idle" };

export const fetchPublicHome = createAsyncThunk(
  "home/fetchPublicHome",
  async () => getPublicHome(),
  {
    condition: (_, { getState }) => {
      const status = (getState() as { home: HomeState }).home.status;
      return status === "idle";
    },
  },
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicHome.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPublicHome.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPublicHome.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default homeSlice.reducer;
