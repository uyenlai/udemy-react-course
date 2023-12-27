const redux = require("redux");

//create Reducer function
const stateReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
//create store
const store = redux.createStore(stateReducer);

//the subcribe between the store and the subcriber
const counterSubcriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubcriber);

//create action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
