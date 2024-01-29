import { configureStore } from '@reduxjs/toolkit';
import theme from './theme/themeSlice';

// Configure and create the Redux store
export default configureStore({
    reducer: {
        theme,
    },
});
