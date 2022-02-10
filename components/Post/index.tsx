import { FC } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface props {
  theme: boolean;
  logo: string;
  logobg: string;
  position: string;
  postedAt: string;
  contract: string;
  company: string;
  location: string;
}

const Post: FC<props> = ({
  theme,
  logo,
  logobg,
  position,
  postedAt,
  contract,
  company,
  location,
}) => {
  const link = location.split("");
  const href = link.map((item) => (item === " " ? "+" : item)).join("");

  return (
    <div className={clsx(styles.container, !theme && styles.dark)}>
      <div className={styles.logo} style={{ backgroundColor: logobg }}>
        <img src={logo} />
      </div>

      <div className={styles.information}>
        <p>
          {postedAt} &#x2022; {contract}
        </p>

        <p className={styles.position}>{position}</p>

        <p className={styles.company}>{company}</p>
      </div>

      <a
        className={styles.location}
        href={`https://www.google.com/search?client=?-b-1-d&q=${href}`}
      >
        {location}
      </a>
    </div>
  );
};

export default Post;
