import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Profile } from 'entities/Profile';
import { validateProfile } from 'entities/Profile/model/services/validateProfile/validateProfile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());
    const error = validateProfile(formData);

    if (error.length) return rejectWithValue(error);

    try {
        const response = await extra.api.put<Profile>('/profile', formData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue([ValidateProfileError.INCORRECT_DATA]);
    }
});
