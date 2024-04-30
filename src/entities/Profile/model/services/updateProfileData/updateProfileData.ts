import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfile(getState())?.form;

    try {
        const response = await extra.api.put<Profile>('/profile', formData);

        return response.data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
