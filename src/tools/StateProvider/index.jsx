import React from "react";

const StateContext = React.createContext();

const reducer = (action, state) => {
  switch (action.type) {
    case "startTesting":
      return { ...state, testing: true };
    case "stopTesting":
      return { ...state, testing: false };
  }

  return state;
};

class StateProvider extends React.Component {
  state = {};

  dispatch = action => {
    this.setState(reducer(action, this.state));
  };

  getSharedContext = () => {
    return {
      sharedState: this.state,
      dispatch: this.dispatch
    };
  };

  render() {
    return (
      <StateContext.Provider value={this.getSharedContext()}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

export { StateProvider, StateContext };
