import React from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

function ToolbarMenu() {
  const rightContents = (
    // Fragment = lets you group elements without a wrapper node.
    <React.Fragment>
      <Button icon="pi pi-heart" className="mr-2" />
      <Button icon="pi pi-bell" className="p-button-success" />
      <Button
        icon="pi pi-sign-in"
        className="p-button-danger"
        title="Sign in"
        variant="text"
      />
    </React.Fragment>
  );

  const leftContents = (
    <React.Fragment>
      <Button label="Menu" className="mr-2" />
      <Button label="Courses" className="p-button-success" />
      <Button label="About" className="p-button-success" />
    </React.Fragment>
  );
  return <Toolbar left={leftContents} right={rightContents} />;
}

export default ToolbarMenu;
