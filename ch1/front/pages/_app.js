import * as React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";

export default function NodeBird({ Component }) {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.min.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
}

NodeBird.propTypes = {
  Component: PropTypes.elementType,
};
