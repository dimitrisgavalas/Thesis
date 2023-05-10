import React, { useState } from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import SignInFun from "../SignIn/Signin";
import { Dialog } from "primereact/dialog";
import Contact from "../../pages/Contact/Contact";
import { Link } from "react-router-dom";

function ToolbarMenu() {
  const [visible, setVisible] = useState(false);

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
        <a href={<Contact />}>
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
          label="Sign In"
          icon="pi pi-sign-in"
          className="p-button-danger"
          title="Sign in"
          variant="text"
          //to text vgazei to xrwma mesa apo to button
          text
          onClick={() => setVisible(true)}
        />
        {/* <Button
          label="Show"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        /> */}
        <Dialog
          header="Header"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <SignInFun />
        </Dialog>
      </nav>
    </React.Fragment>
  );

  return <Toolbar left={leftContents} right={rightContents} />;
}

export default ToolbarMenu;
// na valw to menu mesa se ena router
