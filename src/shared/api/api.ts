import axios from 'axios';
import { LOCAL_STORAGE_THEME_KEY } from 'app/provider/ThemeProvider/lib/ThemeContext';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? '',
    },
});
