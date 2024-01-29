import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    // Create a Redux slice for theme management
    name: 'theme',
    initialState: {
        darkMode: false,
    },
    reducers: {
        // toggles darkmode
        toggleTheme: state => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const selectDarkMode = state => state.theme.darkMode;
export default themeSlice.reducer;
