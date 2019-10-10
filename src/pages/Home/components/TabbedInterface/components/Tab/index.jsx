import React from 'react';

import {connect} from 'tools/StateProvider';
import {formFieldSelector} from 'ducks/reduxForms';

import './styles.css';

const Tab = ({label, onClick, isActive, onDeleteTab, subtext}) => {
  return (
    <div className={`tab ${isActive && 'active'}`}>
      <div className="tab__label" onClick={e => onClick(label)}>
        {label} {subtext}
      </div>
      <div className="tab__remove" onClick={e => onDeleteTab(label)}>
        x
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    subtext: formFieldSelector('tabContentForm', 'subtext', state)
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);
