import React from 'react';

import './styles.css';

const Tab = ({label, onClick, isActive, onDeleteTab}) => {
  return (
    <div className={`tab ${isActive && "active"}`}>
      <div className="tab__label" onClick={e => onClick(label)}>
        {label}
      </div>
      <div className="tab__remove" onClick={e => onDeleteTab(label)}>
        x
      </div>
    </div>
  )
}

export default Tab;