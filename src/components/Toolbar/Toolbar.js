import React, { useState } from "react";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import SignInFun from "../SignIn/Signin";
import { Dialog } from "primereact/dialog";
import { Menubar } from "primereact/menubar";
// import "./Toolbar.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import { useVisibilityService, useLoginService } from "./toolbar.service";

// function ToolbarMenu() {
export default function ToolbarMenu() {
  // const [visible, setVisible] = useState(false);
  const { visible, setVisibility, toggleVisibility } = useVisibilityService();

  const show = () => {
    setVisibility(true);
  };

  const hide = () => {
    setVisibility(false);
  };

  const login = () => {
    setLogingState(true);
  };

  const logout = () => {
    setLogingState(false);
  };

  const navigate = useNavigate();

  const { isLoggedIn, setLogingState } = useLoginService();
  // track login status
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const items = [
    {
      command: () => {
        navigate("/");
      },
      label: "Home",
    },
    {
      label: "E-Courses",
      icon: "pi pi-fw pi-file",
      items: [
        // Unis
        {
          label: "Universities",
          icon: "pi pi-building",
          items: [
            {
              command: () => {
                navigate("/singleEcourse");
              },
              label: "Single Ecourse",
              icon: "pi pi-building ",
            },
            // {
            //   url: "/settings",
            //   label: "Settings",
            //   icon: "pi pi-building ",
            // },
            // ,
            {
              command: () => {
                navigate("/profile");
              },
              label: "User Profile",
              icon: "pi pi-building ",
            },
            {
              command: () => {
                navigate("/addecourse");
              },
              label: "Add Course",
              icon: "pi pi-building ",
            },

            {
              command: () => {
                navigate("/uniprofile");
              },
              label: "Uni Profile",
              icon: "pi pi-building ",
            },
            ,
            {
              url: "/ecourses",
              label: "PADA",
              icon: "pi pi-building ",
            },
            ,
            {
              url: "/ratings",
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
          url: "/ecourses/ecoursemainpage",
          label: "Ecourses Main page Field",
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

  const test = () => {
    console.log("dfdf");
  };

  const start = (
    <img alt="logo" src="/images/UNIPI.jpg" height="40" className="mr-2"></img>
  );
  const end = (
    // Fragment = lets you group elements without a wrapper node.
    <React.Fragment>
      {/* <nav> */}
      {isLoggedIn && (
        <>
          {/* <a href="/favorites"> */}
          <Button icon="pi pi-heart" className="mr-2" text />
          {/* </a> */}
          {/* <a href="/profile"> */}
          <Button icon="pi pi-user" className="mr-2" text />
          {/* </a> */}
        </>
      )}

      {!isLoggedIn && (
        <Button
          label="Sign In"
          icon="pi pi-sign-in"
          className="p-button-danger"
          title="Sign in"
          variant="text"
          text
          onClick={() => show()}
        />
      )}

      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => hide()} // Pass onHide function to close the dialog
      >
        {/* Pass the onSignIn and onHide callbacks to SignInFun */}
        <SignInFun onSignIn={() => login()} onHide={() => hide()} />
      </Dialog>
      {/* </nav> */}
    </React.Fragment>
  );

  // const end2 = [
  // {
  //   // label: "Favorites",
  //   icon: "pi pi-heart",
  // },
  //   {
  //     // label: "notification",
  //     icon: "pi pi-bell",
  //   },
  //   {
  //     label: "Sign In",
  //     icon: "pi pi-sign-in",
  //   },
  // ];

  return (
    <div className="card  ">
      <Menubar model={items} start={start} end={end} item={test()} />
    </div>
  );
}

{
  /* <Button
            label="Show"
            icon="pi pi-external-link"
            onClick={() => setVisible(true)}
          /> */
}
