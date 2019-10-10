import React from 'react';

import {mainReducer} from 'ducks';

const StateContext = React.createContext();

class StateProvider extends React.Component {
  state = {};

  componentDidMount() {
    const previousState = window.localStorage.getItem('applicationState');

    console.log(JSON.parse(previousState));

    if (previousState) {
      this.setState(JSON.parse(previousState));
    }
  }

  dispatch = action => {
    this.setState(mainReducer(this.state, action));
  };

  getSharedContext = () => ({
    sharedState: this.state,
    dispatch: this.dispatch
  });

  render() {
    return (
      <StateContext.Provider value={this.getSharedContext()}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class Wrapper extends React.Component {
    actionsDispatchedToProps = dispatch => {
      const actionsDispatched = {};

      Object.keys(mapDispatchToProps).forEach(actionName => {
        actionsDispatched[actionName] = actionParams =>
          dispatch(mapDispatchToProps[actionName](actionParams));
      });

      return actionsDispatched;
    };

    render() {
      return (
        <StateContext.Consumer>
          {({sharedState, dispatch}) => (
            <Component
              {...this.props}
              {...mapStateToProps(sharedState, this.props)}
              {...this.actionsDispatchedToProps(dispatch)}
              dispatch={dispatch}
            />
          )}
        </StateContext.Consumer>
      );
    }
  }

  return Wrapper;
};

export {StateProvider, connect};
