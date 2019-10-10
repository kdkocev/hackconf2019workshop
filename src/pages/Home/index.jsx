import React from "react";

import TabbedInterface from "./components/TabbedInterface";
import backgroundImage from "assets/images/forest-wallpaper.jpg";
import Navigation from "components/Navigation";

import "./styles.css";

class Home extends React.Component {
  render() {
    return (
      <div
        className="Home"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navigation />
        <div className="headerImage"></div>
        <div className="content">
          <TabbedInterface />
        </div>
      </div>
    );
  }
}

export default Home;
