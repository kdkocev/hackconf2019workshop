const START_TESTING = 'startTesting';
const STOP_TESTING = 'stopTesting';

export const startTesting = () => ({
  type: START_TESTING
});

export const stopTesting = () => ({
  type: STOP_TESTING
});

export const reducer = (state, action) => {
  switch (action.type) {
    case START_TESTING:
      return {
        ...state,
        testing: true
      };

    case STOP_TESTING:
      return {
        ...state,
        testing: false
      };
    default:
      return state;
  }
};
