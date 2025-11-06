import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
import taskReducer from './taskSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
    user: userReducer
  }
});

export default store;
