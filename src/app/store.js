//redux store instance will be created thanks to this
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//store need reducers to dispatch actions to update the state
//each feature will have different reducers, hence counter feature will have counterReducer
export default configureStore({
    reducer:{
        counter: counterReducer,//specify the counterReducer for the counter feature, will be used to update state.counter, kinda like state and setState in react
    }
});