import React from "react";
import { Route } from "react-router-dom";

const NodePage = () => {
  return (
    <div>
      <img src="node.png" alt="Node" style={{ width: 500 }} />
      <h2>
        Node.js trata-se de um software open-source, cross-platform, e de um
        runtime de JavaScript que executa código de JavaScript a nível backend e
        frontend.
      </h2>
    </div>
  );
};

export default <Route component={NodePage} path="/node" key="node" />;
