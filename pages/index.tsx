import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { productState } from "../recoilAtom/language";
import Product from "../components/Product";
import { Axios } from "axios";
import { GetStaticProps } from "next";
import Status from "../components/Status";
import Collection from "../components/Collection";

export default function Home({ list }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Head>
        <title>안녕</title>
      </Head>

      <RecoilRoot>
        <Header />
        <Status />
        <Collection />
        <Product list={list} />
      </RecoilRoot>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await fetch(API_URL);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  console.log(data[2]);
  return {
    props: { list: data },
  };
};
