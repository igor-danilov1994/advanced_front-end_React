import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeReadonly: (state) => {
            state.readonly = false;
        },
        changeProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancel: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.error = undefined;
                    state.data = action.payload;
                    state.form = action.payload;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            })

        // updateProfileData
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.error = undefined;
                    state.data = action.payload;
                    state.form = action.payload;
                },
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Ошибка';
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
