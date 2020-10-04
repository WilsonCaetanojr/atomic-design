import React from "react";
import { Route } from "react-router-dom";

const ReactPage = () => {
  return (
    <div>
      <img src="react.jpg" alt="React" style={{ width: 500 }} />
      <h2>
        O React é uma biblioteca JavaScript de código aberto com foco em criar
        interfaces de usuário em páginas web. É mantido pelo Facebook,
        Instagram, outras empresas e uma comunidade de desenvolvedores
        individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb,
        SeatGeek, HelloSign, Walmart e outros.
      </h2>
    </div>
  );
};

export default <Route component={ReactPage} path="/react" key="react" />;
