import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AppNavbar from '../components/AppNavbar';
import Card from "../components/Cards/Cards"


const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <AppNavbar />
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink>
          className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          My Trips
          </NavLink>
          <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Saved Trips
          </NavLink>
        </NavItem>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          
        </TabPane>
      </TabContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="2">
          <Card />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Dashboard;