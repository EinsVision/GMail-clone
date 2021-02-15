import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';

export default configureStore({
  reducer: {
    mail: mailReducer, // 바꿔야 한다.
  },
});
