import React from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import SignInFun from "../SignIn/Signin";

function ToolbarMenu() {
  const leftContents = (
    <React.Fragment>
      <nav className="card flex justify-content-center">
        <a href="/">
          {" "}
          <Button label="Home" className="mr-2 " text />
        </a>
        <a href="/Ecourses">
          <Button label="Courses" className="mr-2" text />
        </a>
        <a href="https://bobbyhadz.com">
          <Button label="About" className="mr-2" text />
        </a>
        <a href="https://bobbyhadz.com">
          {" "}
          <Button label="Contact" className="mr-2" text />
        </a>
      </nav>
    </React.Fragment>
  );

  const rightContents = (
    // Fragment = lets you group elements without a wrapper node.
    <React.Fragment>
      <nav>
        <Button icon="pi pi-heart" className="mr-2" text />
        <Button icon="pi pi-bell" className="mr-2" text />

        <Button
          icon="pi pi-sign-in"
          className="p-button-danger"
          title="Sign in"
          variant="text"
          text
          // onClick={() => setVisible(true)}
        >
          Sign in
        </Button>
      </nav>
    </React.Fragment>
  );

  return <Toolbar left={leftContents} right={rightContents} />;
}

export default ToolbarMenu;
