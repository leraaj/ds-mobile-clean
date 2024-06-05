import React, { useState } from "react";

const useToggle = () => {
  const [toggle, setToggler] = useState(false);
  const toggler = () => {
    setToggler(!toggle);
  };
  return { toggle, toggler };
};

export default useToggle;
