import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, updateProfileData } from 'entities/Profile';
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';

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
        changeReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        changeProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
            state.validateError = undefined;
        },
        cancel: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateError = undefined;
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
                    state.validateError = undefined;
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
                state.validateError = undefined;
                state.readonly = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.validateError = undefined;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readonly = true;
                },
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload ?? [
                    ValidateProfileError.INCORRECT_DATA,
                ];
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
