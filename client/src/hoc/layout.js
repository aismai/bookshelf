import React from "react";

const Layout = props => {
  return (
    <div>
      Header
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
