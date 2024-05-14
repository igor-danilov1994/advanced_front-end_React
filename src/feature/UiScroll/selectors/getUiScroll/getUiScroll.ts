import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getUiScroll = (state: StateSchema) => state.uiScroll?.scroll;

// use reselect
export const getUiScrollByPath = createSelector(
    getUiScroll,
    (_: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0,
);
