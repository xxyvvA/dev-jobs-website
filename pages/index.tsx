import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import clsx from "clsx";

const Home: NextPage = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <>
      <Head />
      <div className={styles.home}>
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
};

export default Home;
