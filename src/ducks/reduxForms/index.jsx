const INITIALIZE_FORM = 'initializeForm';
const INITIALIZE = 'initialize';
const CHANGE = 'change';

export const initializeForm = ({formName}) => ({
  type: INITIALIZE_FORM,
  payload: {
    formName
  }
});

export const initialize = ({formName, fieldName}) => ({
  type: INITIALIZE,
  payload: {
    formName,
    fieldName
  }
});

export const change = ({formName, fieldName, value}) => ({
  type: CHANGE,
  payload: {
    formName,
    fieldName,
    value
  }
});

export const formFieldSelector = (formName, fieldName, state) => {
  return (
    state.forms &&
    state.forms[formName] &&
    state.forms[formName].values[fieldName]
  );
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            fields: [],
            values: {}
          }
        }
      };
    case INITIALIZE:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            ...state.forms[action.payload.formName],
            fields: [
              ...state.forms[action.payload.formName].fields,
              action.payload.fieldName
            ]
          }
        }
      };

    case CHANGE:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.payload.formName]: {
            ...state.forms[action.payload.formName],
            values: {
              ...state.forms[action.payload.formName].values,
              [action.payload.fieldName]: action.payload.value
            }
          }
        }
      };
    default:
      return state;
  }
};
