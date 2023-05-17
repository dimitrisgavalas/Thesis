import React, { useState } from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import SignInFun from "../SignIn/Signin";
import { Dialog } from "primereact/dialog";
import { Menubar } from "primereact/menubar";
// import "./Toolbar.css";

// function ToolbarMenu() {
export default function ToolbarMenu() {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      url: "/",
      label: "Home",
      // icon: "pi pi-fw pi-power-off",
    },
    {
      label: "E-Courses",
      icon: "pi pi-fw pi-file",
      items: [
        // Unis
        {
          url: "/ecourses",
          label: "Universities",
          icon: "pi pi-building",
          // items: [
          //   {
          //     label: "Unipi",
          //     icon: "pi pi-building ",
          //   },
          //   {
          //     label: "EMP",
          //     icon: "pi pi-building ",
          //   },
          //   ,
          //   {
          //     label: "EKPA",
          //     icon: "pi pi-building ",
          //   },
          //   ,
          //   {
          //     label: "PADA",
          //     icon: "pi pi-building ",
          //   },
          //   ,
          //   {
          //     label: "OPA",
          //     icon: "pi pi-building ",
          //   },
          // ],
        },
        {
          separator: true,
        },
        // Fields
        {
          url: "/ecourses/ecoursemainpage",
          label: "Field",
          icon: "pi pi-book ",
          // items: [
          //   {
          //     label: "Mathematics",
          //     icon: "pi pi-book ",
          //   },
          //   {
          //     label: "Physics",
          //     icon: "pi pi-book ",
          //   },
          //   ,
          //   {
          //     label: "Programming",
          //     icon: "pi pi-book ",
          //   },
          //   ,
          //   {
          //     label: "Linguistics",
          //     icon: "pi pi-book ",
          //   },
          //   ,
          //   {
          //     label: "Physics",
          //     icon: "pi pi-book ",
          //   },
          // ],
        },
        {
          separator: true,
        },
      ],
    },
    {
      url: "/about",
      label: "About",
    },
    ,
    {
      url: "/contact",
      label: "Contact",
    },
  ];

  const start = (
    <img alt="logo" src="/images/UNIPI.jpg" height="40" className="mr-2"></img>
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
    <div className="card  ">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
