import { Tab, Nav } from "react-bootstrap";
import React, { useState } from "react";

const CONVERSATIONS_KEY = "Conversations";
const CONTACTS_KEY = "Contacts  ";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  return (
    <div style={{ maxWidth: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>
              {CONVERSATIONS_KEY}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>{CONTACTS_KEY}</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
            
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
