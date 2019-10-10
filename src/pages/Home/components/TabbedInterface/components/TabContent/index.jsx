import React from 'react';

import {connect} from 'tools/StateProvider';

import {startTesting, stopTesting} from 'ducks/testing';

import './styles.css';

class TabContent extends React.Component {
  state = {
    content: 'Tab Content',
    isEditting: false
  };

  startEditting = () => {
    this.setState({isEditting: true});
  };

  saveEdit = () => {
    this.setState({isEditting: false});
  };

  changeContent = event => {
    this.setState({content: event.target.value});
  };

  render() {
    return (
      <div className={`tabContent ${this.props.isActive && 'active'}`}>
        {!this.state.isEditting && (
          <React.Fragment>
            <div className="textContainer">
              <pre>{this.state.content}</pre>
            </div>
            <div className="buttonsContainer">
              <button onClick={this.startEditting}>Edit</button>
            </div>
          </React.Fragment>
        )}
        {this.state.isEditting && (
          <React.Fragment>
            <div className="textContainer">
              <textarea
                onChange={this.changeContent}
                value={this.state.content}></textarea>
            </div>
            <div className="buttonsContainer">
              <button onClick={this.saveEdit}>Save</button>
            </div>
          </React.Fragment>
        )}
        <div>State here: testing: {this.props.testing ? 'true' : 'false'}</div>
        <button onClick={this.props.startTesting}>Start testing</button>
        <button onClick={this.props.stopTesting}>Stop testing</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    testing: state.testing
  };
};

const mapDispatchToProps = {
  startTesting,
  stopTesting
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabContent);
