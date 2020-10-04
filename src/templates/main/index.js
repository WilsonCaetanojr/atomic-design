import React from "react";
import Header from "../../organisms/header";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mt-5">{children}</main>
    </div>
  );
};

export default Main;
