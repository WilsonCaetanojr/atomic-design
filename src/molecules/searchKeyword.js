import React from "react";
import Input from "../atoms/input";
import Button from "../atoms/button";

const SearchKeyword = () => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <Input />
      <Button>Pesquisar</Button>
    </form>
  );
};

export default SearchKeyword;
