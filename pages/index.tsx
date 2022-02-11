import { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Post from "../components/Post";
import SearchBar from "../components/Searchbar";
import clsx from "clsx";
import data from "../data.json";

const Home: NextPage = () => {
  const [theme, setTheme] = useState(true);
  const [filter, setFilter] = useState(false);

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [fullTime, setFullTime] = useState(false);

  return (
    <>
      <Head />
      <div className={clsx(styles.home, !theme && styles.dark)}>
        <Header theme={theme} setTheme={setTheme} />
        <main className={styles.main}>
          <SearchBar
            theme={theme}
            setTitle={setTitle}
            setPlace={setPlace}
            fullTime={fullTime}
            setFullTime={setFullTime}
            filter={filter}
            setFilter={setFilter}
          />

          <div className={styles.content}>
            {data.map((post) => {
              if (
                post.company.toLowerCase().includes(title.toLowerCase()) &&
                post.location.toLowerCase().includes(place.toLowerCase())
              ) {
                if (fullTime && post.contract === "Full Time") {
                  return (
                    <Post
                      theme={theme}
                      logo={post.logo}
                      logobg={post.logoBackground}
                      position={post.position}
                      postedAt={post.postedAt}
                      contract={post.contract}
                      company={post.company}
                      location={post.location}
                    />
                  );
                } else if (!fullTime) {
                  return (
                    <Post
                      theme={theme}
                      logo={post.logo}
                      logobg={post.logoBackground}
                      position={post.position}
                      postedAt={post.postedAt}
                      contract={post.contract}
                      company={post.company}
                      location={post.location}
                    />
                  );
                }
              }
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
