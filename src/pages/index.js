import React from "react";
import { Main } from "../components/Main/Main";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet title="NEARDROP"></Helmet>
      <Main />
    </>
  );
};

export default IndexPage;
