// Navigation toolbar
import React, { useState } from "react";
import { Button } from "primereact/button";
import SignInFun from "../SignIn/Signin";
import { Dialog } from "primereact/dialog";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { useVisibilityService, useLoginService } from "./toolbar.service";

export default function ToolbarMenu() {
  const { visible, setVisibility } = useVisibilityService();
  const [isUniversityUser, setIsUniversityUser] = useState(false);

  // control the visibility of the login dialog.
  const show = () => {
    setVisibility(true);
  };

  // control the visibility of the login dialog.
  const hide = () => {
    setVisibility(false);
  };

  // used to manage the user's login state.
  const login = () => {
    setLogingState(true);
  };

  // const logout = () => {
  //   setLogingState(false);
  // };

  function refreshPage() {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);
  }
  const navigate = useNavigate();

  const { isLoggedIn, setLogingState } = useLoginService();
  // track login status
  const items = [
    {
      command: () => {
        navigate("/");
      },
      label: "Home",
    },
    {
      command: () => {
        navigate("/ecourses/ecoursemainpage");
      },
      label: "E-Courses",
    },
    {
      command: () => {
        navigate("/about");
      },
      label: "About",
    },
    ,
    {
      command: () => {
        navigate("/contact");
      },
      label: "Contact",
    },
  ];

  const test = () => {
    // console.log("Test");
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
          <Button
            icon="pi pi-heart"
            className="mr-2"
            text
            onClick={() => navigate("/favorites")} // Use navigate to change the route
          />
          <Button
            icon="pi pi-user"
            className="mr-2"
            text
            onClick={() =>
              navigate(isUniversityUser ? "/uniprofile" : "/profile")
            } // Use navigate to change the route
          />
          <Button
            icon="pi pi-sign-out red"
            className="mr-2 "
            severity="danger"
            text
            onClick={refreshPage}
          />
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
        <SignInFun
          onSignIn={(value) => {
            login();
            setIsUniversityUser(value);
          }}
          onHide={() => hide()}
        />
      </Dialog>
      {/* </nav> */}
    </React.Fragment>
  );

  return (
    <div className="card  ">
      <Menubar model={items} start={start} end={end} item={test()} />
    </div>
  );
}
