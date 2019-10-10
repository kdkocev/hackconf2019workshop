import React from 'react';

import avatar from 'assets/images/avatar.ico';

import './styles.css';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="name">
          Notebook
        </div>
        <div className="profile">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
            <div className="tabsCount">
              0
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;