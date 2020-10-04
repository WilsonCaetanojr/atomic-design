import React from "react";
import { Route } from "react-router-dom";

const AtomicPage = () => {
  return (
    <div>
      <img src="atomic.png" alt="Atomic" style={{ width: 800 }} />
      <h2>
        O Atomic Design é uma metodologia que nos ajuda a pensar na interface do
        usuário (UI) de maneira hierarquia e reforça a importancia da qualidade
        de pattern libraries eficazes, e apresenta técnicas para otimizar o
        fluxo de trabalho do design e desenvolvimento em equipe. O Atomic Design
        também detalha o que acontece durante a criação e manutenção de sistemas
        de design, permitindo a implementação de UIs com mais consistência e
        qualidade.
      </h2>
    </div>
  );
};

export default <Route component={AtomicPage} path="/atomic" key="atomic" />;
