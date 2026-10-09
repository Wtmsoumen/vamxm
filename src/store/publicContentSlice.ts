import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPublicService, getPublicServices, getPublicSettings } from "@/lib/publicApi";

type AsyncValue = { data: unknown | null; status: "idle" | "loading" | "succeeded" | "failed" };
type PublicContentState = {
  services: AsyncValue;
  settings: AsyncValue;
  serviceDetails: Record<string, AsyncValue>;
};

const emptyValue = (): AsyncValue => ({ data: null, status: "idle" });
const initialState: PublicContentState = {
  services: emptyValue(),
  settings: emptyValue(),
  serviceDetails: {},
};

export const fetchPublicServices = createAsyncThunk(
  "publicContent/fetchServices",
  async () => getPublicServices(),
  { condition: (_, { getState }) => (getState() as { publicContent: PublicContentState }).publicContent.services.status === "idle" },
);

export const fetchPublicSettings = createAsyncThunk(
  "publicContent/fetchSettings",
  async () => getPublicSettings(),
  { condition: (_, { getState }) => (getState() as { publicContent: PublicContentState }).publicContent.settings.status === "idle" },
);

export const fetchPublicService = createAsyncThunk(
  "publicContent/fetchService",
  async (slug: string) => ({ slug, data: await getPublicService(slug) }),
  { condition: (slug, { getState }) => {
    const status = (getState() as { publicContent: PublicContentState }).publicContent.serviceDetails[slug]?.status;
    return !status || status === "idle";
  } },
);

const publicContentSlice = createSlice({
  name: "publicContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicServices.pending, (state) => { state.services.status = "loading"; })
      .addCase(fetchPublicServices.fulfilled, (state, action) => { state.services.status = "succeeded"; state.services.data = action.payload; })
      .addCase(fetchPublicServices.rejected, (state) => { state.services.status = "failed"; })
      .addCase(fetchPublicSettings.pending, (state) => { state.settings.status = "loading"; })
      .addCase(fetchPublicSettings.fulfilled, (state, action) => { state.settings.status = "succeeded"; state.settings.data = action.payload; })
      .addCase(fetchPublicSettings.rejected, (state) => { state.settings.status = "failed"; })
      .addCase(fetchPublicService.pending, (state, action) => {
        state.serviceDetails[action.meta.arg] = { data: null, status: "loading" };
      })
      .addCase(fetchPublicService.fulfilled, (state, action) => {
        state.serviceDetails[action.payload.slug] = { data: action.payload.data, status: "succeeded" };
      })
      .addCase(fetchPublicService.rejected, (state, action) => {
        state.serviceDetails[action.meta.arg] = { data: null, status: "failed" };
      });
  },
});

export default publicContentSlice.reducer;
