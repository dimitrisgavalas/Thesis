import React, { useState } from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import SignInFun from "../SignIn/Signin";
import { Dialog } from "primereact/dialog";
import Contact from "../../pages/Contact/Contact";
import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";

export default function BasicDemo() {
  const items = [
    {
      label: "Home",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "E-Courses",
      // icon: "pi pi-fw pi-file",
      items: [
        // Unis
        {
          label: "Universities",
          icon: "pi pi-building",
          items: [
            {
              label: "Unipi",
              icon: "pi pi-building ",
            },
            {
              label: "EMP",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "EKPA",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "PADA",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "OPA",
              icon: "pi pi-building ",
            },
          ],
        },
        {
          separator: true,
        },
        // Fields
        {
          label: "Field",
          icon: "pi pi-book pi-plus",
          items: [
            {
              label: "Mathematics",
              icon: "pi pi-book ",
            },
            {
              label: "Physics",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Programming",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Linguistics",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Physics",
              icon: "pi pi-book ",
            },
          ],
        },
        {
          separator: true,
        },
      ],
    },
    {
      label: "About",
      icon: "pi pi-fw pi-power-off",
    },
    ,
    {
      label: "Contact",
      icon: "pi pi-fw pi-power-off",
    },
  ];
  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
}

import React from "react";
import { Menubar } from "primereact/menubar";

export default function TemplateDemo() {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      label: "Home",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "E-Courses",
      // icon: "pi pi-fw pi-file",
      items: [
        // Unis
        {
          label: "Universities",
          icon: "pi pi-building",
          items: [
            {
              label: "Unipi",
              icon: "pi pi-building ",
            },
            {
              label: "EMP",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "EKPA",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "PADA",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "OPA",
              icon: "pi pi-building ",
            },
          ],
        },
        {
          separator: true,
        },
        // Fields
        {
          label: "Field",
          icon: "pi pi-book pi-plus",
          items: [
            {
              label: "Mathematics",
              icon: "pi pi-book ",
            },
            {
              label: "Physics",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Programming",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Linguistics",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Physics",
              icon: "pi pi-book ",
            },
          ],
        },
        {
          separator: true,
        },
      ],
    },
    {
      label: "About",
      icon: "pi pi-fw pi-power-off",
    },
    ,
    {
      label: "Contact",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
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

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import SignInFun from "../SignIn/Signin";
import { Dialog } from "primereact/dialog";
import Contact from "../../pages/Contact/Contact";
import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";

// function ToolbarMenu() {
export default function ToolbarMenu() {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      label: "Home",
      url: "home",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "E-Courses",
      // icon: "pi pi-fw pi-file",
      items: [
        // Unis
        {
          label: "Universities",
          icon: "pi pi-building",
          items: [
            {
              label: "Unipi",
              icon: "pi pi-building ",
            },
            {
              label: "EMP",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "EKPA",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "PADA",
              icon: "pi pi-building ",
            },
            ,
            {
              label: "OPA",
              icon: "pi pi-building ",
            },
          ],
        },
        {
          separator: true,
        },
        // Fields
        {
          label: "Field",
          icon: "pi pi-book ",
          items: [
            {
              label: "Mathematics",
              icon: "pi pi-book ",
            },
            {
              label: "Physics",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Programming",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Linguistics",
              icon: "pi pi-book ",
            },
            ,
            {
              label: "Physics",
              icon: "pi pi-book ",
            },
          ],
        },
        {
          separator: true,
        },
      ],
    },
    {
      label: "About",
    },
    ,
    {
      label: "Contact",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
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
          // header="Header"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <SignInFun />
        </Dialog>
      </nav>
    </React.Fragment>
  );

  const end2 = [
    {
      // label: "Favorites",
      icon: "pi pi-heart",
    },
    {
      // label: "notification",
      icon: "pi pi-bell",
    },
    {
      label: "Sign In",
      icon: "pi pi-sign-in",
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
// na valw to menu mesa se ena router

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
        <a href="/ecourses">
          <Button label="Courses" className="mr-2" text />
        </a>
        <a href="/about">
          <Button label="About" className="mr-2" text />
        </a>
        <a href="/contact">
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
