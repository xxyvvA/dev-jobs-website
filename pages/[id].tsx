import { useState, useRef } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import clsx from "clsx";
import data from "../data.json";

interface Props {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Requirements;
}

interface Requirements {
  content: string;
  items: string[];
}

const Home: NextPage<Props> = ({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
  website,
  apply,
  description,
  requirements,
  role,
}) => {
  return (
    <>
      <Head />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const job = data.find((devJob) => devJob.id === Number(context.query.id));
  return {
    props: job,
  };
}
