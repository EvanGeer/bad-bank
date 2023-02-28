import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
// import '../node_modules/@syncfusion/ej2-icons/styles/material.css'
// import "../node_modules/@syncfusion/ej2/fluent.css";
import "../node_modules/@syncfusion/ej2-base/styles/fluent.css";
// import "../node_modules/@syncfusion/ej2-react-navigations/styles/material.css";

function App() {
  let dockBar: SidebarComponent;
  // Toggle(Open/Close) the Sidebar
  function toggleClick() {
    dockBar.toggle();
  }
  return (
    <div className="control-section">
      <div id="wrapper">
        {/* Initializing the Sidebar component */}
        <SidebarComponent
          id="dockSidebar"
          ref={(Sidebar) => (dockBar = Sidebar as SidebarComponent)}
          enableDock={true}
          dockSize="72px"
          width="180px"
          showBackdrop={true}
          style={{background:"grey"}}
        >
          <div className="dock bg-dark">
            <ul>
              <li className="sidebar-item" id="toggle" onClick={toggleClick}>
                <span className="e-icons e-expand e-large" />
                <span className="e-text" title="menu">
                  Menu :)
                </span>
              </li>
              <li className="sidebar-item">
                <span className="e-icons e-home e-large" />
                <span className="e-text" title="home">
                  Home
                </span>
              </li>
              <li className="sidebar-item">
                <span className="e-icons e-profile e-large" />
                <span className="e-text" title="profile">
                  Profile
                </span>
              </li>
              <li className="sidebar-item">
                <span className="e-icons e-info e-large" />
                <span className="e-text" title="info">
                  Info
                </span>
              </li>
              <li className="sidebar-item">
                <span className="e-icons e-settings e-large" />
                <span className="e-text" title="settings">
                  Settings
                </span>
              </li>
            </ul>
          </div>
        </SidebarComponent>
        <div>
          <div className="icon-bar">
            <span className="e-icons e-cut"></span>
            <span className="e-icons e-copy"></span>
            <span className="e-icons e-paste"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
