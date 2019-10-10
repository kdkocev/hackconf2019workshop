import React from 'react';

import {connect} from 'tools/StateProvider';
import {initializeForm, initialize, change} from 'ducks/reduxForms';

export const ReduxFormsContext = React.createContext();

export const reduxForm = ({form, onSubmit}) => Component => {
  class Wrapper extends React.Component {
    componentDidMount() {
      this.props.initializeForm({formName: form});
    }

    getFieldValue = fieldName => {
      return this.props.fieldValues && this.props.fieldValues[fieldName];
    };

    contextValue = {
      initialize: fieldName =>
        this.props.initialize({formName: form, fieldName}),
      onChange: ({fieldName, value}) =>
        this.props.change({formName: form, fieldName, value}),
      getValue: this.getFieldValue
    };

    render() {
      return (
        <ReduxFormsContext.Provider value={this.contextValue}>
          <Component {...this.props} />
        </ReduxFormsContext.Provider>
      );
    }
  }

  const mapStateToProps = (state, props) => {
    return {
      fieldValues: state.forms && state.forms[form] && state.forms[form].fields
    };
  };

  const mapDispatchToProps = {
    initializeForm,
    initialize,
    change
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};
