import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentsFormSchema } from 'feature/addNewComment';

const initialState: AddNewCommentsFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
    // builder
    //     .addCase(loginByUsername.pending, (state) => {
    //         state.isLoading = true;
    //         state.error = undefined;
    //     })
    //     .addCase(loginByUsername.fulfilled, (state) => {
    //         state.isLoading = false;
    //         state.error = undefined;
    //     })
    //     .addCase(loginByUsername.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload ?? 'Ошибка';
    //     });
    },
});

export const { actions: newCommentActions } = addCommentFormSlice;
export const { reducer: newCommentReducer } = addCommentFormSlice;
