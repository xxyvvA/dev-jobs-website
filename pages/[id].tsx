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

const JobPage: NextPage<Props> = ({
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
  const [theme, setTheme] = useState(true);

  const name = company.split("").filter((item) => item !== " ");
  const link = location.split("");
  const href = link.map((item) => (item === " " ? "+" : item)).join("");

  return (
    <>
      <Head title={`${company} - ${position}`} />
      <div className={clsx(styles.jobPage, !theme && styles.dark)}>
        <Header setTheme={setTheme} />

        <main className={styles.main}>
          <div className={styles.company}>
            <div className={styles.logo} style={{ backgroundColor: logoBackground }}>
              <img src={logo} alt={`${company} logo`} />
            </div>

            <div className={styles.nameLink}>
              <p className={styles.name}>{company}</p>
              <a className={styles.link} href={website}>{`${name.join("").toLowerCase()}.com`}</a>
            </div>

            <a className={styles.site} href={website}>
              <button>Company Site</button>
            </a>
          </div>

          <div className={styles.content}>
            <div className={styles.jobHeader}>
              <div className={styles.information}>
                <p className={styles.infoTime}>
                  {postedAt} &#x2022; {contract}
                </p>
                <p className={styles.position}>{position}</p>
                <a
                  className={styles.location}
                  href={`https://www.google.com/search?client=?-b-1-d&q=${href}`}
                >
                  {location}
                </a>
              </div>
              <a className={styles.apply} href={apply}>
                <button>Apply Now</button>
              </a>
            </div>

            <div className={styles.jobInfo}>
              <p className={styles.description}>{description}</p>

              <div className={clsx(styles.requirements, styles.info)}>
                <h3 className={styles.section}>Requirements</h3>
                <div className={styles.container}>
                  <p>{requirements.content}</p>
                  <ul>
                    {requirements.items.map((item, index) => (
                      <li key={index}>
                        <span className={styles.bulletPoint}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={clsx(styles.task, styles.info)}>
                <h3 className={styles.section}>What You Will Do</h3>
                <div className={styles.container}>
                  <p>{role.content}</p>
                  <ul>
                    {role.items.map((item, index) => (
                      <li key={index + 10}>
                        <span className={styles.bulletPoint}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.info}>
              <p className={styles.position}>{position}</p>
              <p className={styles.text}>So Digital Inc.</p>
            </div>

            <a href={apply}>
              <button>Apply Now</button>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default JobPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const job = data.find((devJob) => devJob.id === Number(context.query.id));
  return {
    props: job,
  };
}
