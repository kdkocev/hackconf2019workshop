import React from 'react';

import './styles.css';

class NewTabButton extends React.Component {
  state = {
    isEnteringName: false,
    inputText: ""
  }

  startEnteringNewName = () => {
    this.setState({isEnteringName: true});
  }

  changeText = (e) => {
    const ENTER = 13;

    if(e.which === ENTER) {
      this.props.onNewTabCreate(e.target.value);
      this.setState({inputText: "", isEnteringName: false})
    } else {
      this.setState({inputText: e.target.value});
    }
  }

  render() {
    return (
      <div className={`newTabButton ${this.state.isEnteringName && "active"}`} onClick={this.startEnteringNewName}>
        {!this.state.isEnteringName && "+"}
        {this.state.isEnteringName && <input type="text" onKeyDown={this.changeText} />}
      </div>
    )
  }
}

export default NewTabButton