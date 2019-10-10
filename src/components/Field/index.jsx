import React from 'react';

import {ReduxFormsContext} from 'tools/reduxForms';

const getComponent = component => ({value, onChange}) => {
  if (typeof component === 'string') {
    switch (component) {
      case 'input':
        return <input value={value} onChange={onChange} />;
      default:
        throw new Error(`${component} is not a valid field type`);
    }
  } else {
    return component;
  }
};

class Field extends React.Component {
  Component = getComponent(this.props.component);

  render() {
    const {name, component, initialValue} = this.props;
    const ComponentObject = this.Component;

    return (
      <ReduxFormsContext.Consumer>
        {({initialize, onChange, getValue}) => (
          <ComponentObject
            value={getValue(name)}
            onChange={e => onChange({fieldName: name, value: e.target.value})}
          />
        )}
      </ReduxFormsContext.Consumer>
    );
  }
}

export default Field;
