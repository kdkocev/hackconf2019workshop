import React from 'react';

import {connect} from 'tools/StateProvider';

import avatar from 'assets/images/avatar.ico';

import './styles.css';

class Navigation extends React.Component {
  saveState = () => {
    window.localStorage.setItem(
      'applicationState',
      JSON.stringify(this.props.applicationState)
    );
  };

  render() {
    const tabsCount = this.props.tabsCount;
    return (
      <div className="navigation">
        <div className="name">Notebook</div>
        <button onClick={this.saveState}>Save state</button>
        <div className="profile">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
            <div className="tabsCount">{tabsCount}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {tabsCount: state.tabsCount, applicationState: state};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
