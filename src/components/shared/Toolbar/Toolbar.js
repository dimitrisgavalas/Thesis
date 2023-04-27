import React from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

function ToolbarMenu() {
  const leftContents = (
    <React.Fragment>
      <nav className="card flex justify-content-center">
        <a href="/">
          {" "}
          <Button label="Home" className="mr-2" />
        </a>
        <a href="/Ecourses">
          <Button label="Courses" className="mr-2" />
        </a>
        <a href="https://bobbyhadz.com">
          <Button label="About" className="mr-2" />
        </a>
        <a href="https://bobbyhadz.com">
          {" "}
          <Button label="Contact" className="mr-2" />
        </a>
      </nav>
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
