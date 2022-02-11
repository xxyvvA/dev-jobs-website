import { FC } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import NextLink from "next/link";
import Link from "next/link";

interface Props {
  id: number;
  theme: boolean;
  logo: string;
  logobg: string;
  position: string;
  postedAt: string;
  contract: string;
  company: string;
  location: string;
}

const Post: FC<Props> = ({
  id,
  theme,
  logo,
  logobg,
  position,
  postedAt,
  contract,
  company,
  location,
}) => {
  return (
    <Link href={`/${id}`}>
      <a className={clsx(styles.container, !theme && styles.dark)}>
        <div className={styles.logo} style={{ backgroundColor: logobg }}>
          <img src={logo} alt={`${company} logo`} />
        </div>

        <div className={styles.information}>
          <p>
            {postedAt} &#x2022; {contract}
          </p>

          <p className={styles.position}>{position}</p>

          <p className={styles.company}>{company}</p>
        </div>

        <p className={styles.location}>{location}</p>
      </a>
    </Link>
  );
};

export default Post;
