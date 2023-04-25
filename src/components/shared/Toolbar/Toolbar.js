import React from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

function ToolbarMenu() {
  const leftContents = (
    <React.Fragment>
      <Button label="Home" className="mr-2" />
      <Button label="Courses" className="mr-2" />
      <Button label="About" className="mr-2" />
    </React.Fragment>
  );

  const rightContents = (
    // Fragment = lets you group elements without a wrapper node.
    <React.Fragment>
      <nav>
        <Button icon="pi pi-heart" className="mr-2" />
        <Button icon="pi pi-bell" className="mr-2" />

        <Button
          icon="pi pi-sign-in"
          className="p-button-danger"
          title="Sign in"
          variant="text"
        >
          Sign in
        </Button>
      </nav>
    </React.Fragment>
  );

  return <Toolbar left={leftContents} right={rightContents} />;
}

export default ToolbarMenu;
