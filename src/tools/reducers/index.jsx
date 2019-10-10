export const combineReducers = reducersList => (state, action) => {
  return reducersList.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  );
};
