import React from 'react';

import NewTabButton from './components/NewTabButton';
import Tab from './components/Tab';
import TabContent from './components/TabContent';

import './styles.css';

class TabbedInterface extends React.Component {
  
  state = {
    tabs: [{label: 'tab 1'}, {label: 'tab 2'}],
    selectedTab: 'tab 1'
  }

  changeTab = newTab => {
    this.setState({selectedTab: newTab});
  }

  createNewTab = newTabLabel => {
    if(this.state.tabs.filter(tab => tab.label === newTabLabel).length > 0) {
      console.log("Tab with that label already exists");
    } else {
      this.setState({tabs: [...this.state.tabs, {label: newTabLabel}]});
    }

  }

  deleteTab = tabLabel => {
    const tabsWithoutTheRemovedOne = this.state.tabs.filter(tab => tab.label !== tabLabel)
    this.setState({tabs: tabsWithoutTheRemovedOne})
  }

  render() {
    return (
      <div className="tabbedInterface">
        <div className="tabsContainer">
          {this.state.tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              onClick={this.changeTab}
              isActive={tab.label === this.state.selectedTab}
              onDeleteTab={this.deleteTab}
             />
          ))}
          <NewTabButton onNewTabCreate={this.createNewTab} />
        </div>
        {this.state.tabs.map((tab, index) => (
          <TabContent key={tab.label} isActive={tab.label === this.state.selectedTab} />
        ))}
      </div>
    )
  }
}

export default TabbedInterface;