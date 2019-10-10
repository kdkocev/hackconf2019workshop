import React from 'react';

import TabbedInterface from './components/TabbedInterface';
import backgroundImage from 'assets/images/forest-wallpaper.jpg';

import './styles.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="navigation">
          navigation
        </div>
        <div className="headerImage">
        </div>
        <div className="content">
          <TabbedInterface />
        </div>
      </div>
    )
  }
}

export default Home;