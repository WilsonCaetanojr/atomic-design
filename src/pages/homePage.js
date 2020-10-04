import React from "react";
import { Route } from "react-router-dom";

const NodePage = () => {
  return (
    <div>
      <img src="designPattern.png" alt="DesignPattern" style={{ width: 500 }} />
      <h2>
        Design Patterns ou padrões de projetos são soluções generalistas para
        problemas recorrentes durante o desenvolvimento de um software. Não se
        trata de um framework ou um código pronto, mas de uma definição de alto
        nível de como um problema comum pode ser solucionado.
      </h2>
    </div>
  );
};

export default <Route component={NodePage} path="/" key="home" exact />;
