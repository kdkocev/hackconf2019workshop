import React from 'react';

import {reduxForm} from 'tools/reduxForms';
import Field from 'components/Field';

const onSubmit = (values, dispatch, props) => {};

class TabContentForm extends React.Component {
  render() {
    return (
      <form>
        <Field component="input" name="subtext" />
      </form>
    );
  }
}

export default reduxForm({form: 'tabContentForm', onSubmit})(TabContentForm);
