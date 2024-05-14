import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiScrollSchema } from '../types/UiScroll';

const initialState: UiScrollSchema = {
    scroll: {},
};

export const UiScrollSlice = createSlice({
    name: 'uiScroll',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: UiScrollActions } = UiScrollSlice;
export const { reducer: UiScrollReducer } = UiScrollSlice;
