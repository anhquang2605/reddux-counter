//the logic behind the counter, export counter logics to be used in other files
//collection of redux reducer logic and actions for a single feature in app
//splitting root Redux state object into "slices" of state
//export reducer so that it can be used to specify the reducer for a specific feature in store.js
import { createSlice } from '@reduxjs/toolkit';
//createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects
export const counterSlice = createSlice({
    name: 'counter',//name of the slice which is then paired with the name of the reducer function
    initialState: {//need to have initial state
        value: 0
    },
    //each feature will have sub reducers, for instance counter/increase counter/decrease counter/increaseByAmount
    reducers:{
        increment: (state) => { //calling counterSlice.actions.increment() will call this function and return an action object with type: 'counter/increment'
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            //take in action if we have a payload or other parameter
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state) => state.counter.value)`
  export const selectCount = (state) => state.counter.value
  

export default counterSlice.reducer;//The reducer of counterSlice will know how to response to actions with the type 'counter/increment', 'counter/decrement', and 'counter/incrementByAmount'. and return new state