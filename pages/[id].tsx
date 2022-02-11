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

  return (
    <>
      <Head />
      <div className={clsx(styles.jobPage, !theme && styles.dark)}>
        <Header theme={theme} setTheme={setTheme} />

        <main className={styles.main}>
          <div className={styles.company}>
            <div
              className={styles.logo}
              style={{ backgroundColor: logoBackground }}
            >
              <img src={logo} />
            </div>

            <div className={styles.nameLink}>
              <p className={styles.name}>{company}</p>
              <a className={styles.link} href={website}>{`${name
                .join("")
                .toLowerCase()}.com`}</a>
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
                <p className={styles.location}>{location}</p>
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
                    {requirements.items.map((item) => (
                      <li>
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
                    {role.items.map((item) => (
                      <li>
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
