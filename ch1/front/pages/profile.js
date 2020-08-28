import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

function profile() {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.min.css"
        />
      </Head>
      <div>
        <AppLayout>프로필</AppLayout>
      </div>
    </>
  );
}

export default profile;
