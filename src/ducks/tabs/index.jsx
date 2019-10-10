const ADD_TAB = 'addNewTab';
const REMOVE_TAB = 'removeTab';
const SET_TABS_COUNT = 'setTabsCount';

export const addTab = () => ({
  type: ADD_TAB
});

export const removeTab = () => ({
  type: REMOVE_TAB
});

export const setTabsCount = count => ({
  type: SET_TABS_COUNT,
  payload: {
    count
  }
});

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {...state, tabsCount: state.tabsCount + 1};
    case REMOVE_TAB:
      return {...state, tabsCount: state.tabsCount - 1};
    case SET_TABS_COUNT:
      return {...state, tabsCount: action.payload.count};
    default:
      return state;
  }
};
