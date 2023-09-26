import { useState } from "react";

export function useVisibilityService() {
  const [visible, setVisible] = useState(false);

  const setVisibility = (value) => {
    setVisible(value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return {
    visible,
    setVisibility,
    toggleVisibility,
  };
}

export function useLoginService() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogingState = (value) => {
    setIsLoggedIn(value);
  };

  return {
    isLoggedIn,
    setLogingState,
  };
}
