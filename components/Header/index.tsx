import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import NextLink from "next/link";

interface Props {
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<Props> = ({ setTheme }) => {
  const [slider, setSlider] = useState<null | boolean>(null);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") === "true");
    setSlider(localStorage.getItem("theme") === "false");
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.items}>
        <NextLink href="/" passHref>
          <a>devjobs</a>
        </NextLink>

        <div className={clsx(styles.mode, slider === null && styles.hidden)}>
          <svg className={styles.sun}>
            <circle r="5" cx="10" cy="10" fill="white" />
            <g className={styles.rays}>
              <g className={styles.vertical}>
                <path stroke="white" strokeWidth="1.22" strokeLinecap="round" d="M10,0.62 V3" />
                <path stroke="white" strokeWidth="1.22" strokeLinecap="round" d="M10,19.38 V17" />
              </g>

              <g className={styles.horizontal}>
                <path stroke="white" strokeWidth="1.22" strokeLinecap="round" d="M0.8,10 H3" />
                <path stroke="white" strokeWidth="1.22" strokeLinecap="round" d="M19.2,10 H17" />
              </g>

              <g className={styles["bl-to-tr"]}>
                <path
                  stroke="white"
                  strokeWidth="1.22"
                  strokeLinecap="round"
                  d="M3,16.7 L4.82,14.98"
                />
                <path
                  stroke="white"
                  strokeWidth="1.22"
                  strokeLinecap="round"
                  d="M17,3.3 L15.18,5.02"
                />
              </g>

              <g className={styles["br-to-tl"]}>
                <path
                  stroke="white"
                  strokeWidth="1.22"
                  strokeLinecap="round"
                  d="M3,3.3 L4.82,5.02"
                />
                <path
                  stroke="white"
                  strokeWidth="1.22"
                  strokeLinecap="round"
                  d="M17,16.7 L15.18,14.98"
                />
              </g>
            </g>
          </svg>

          <button
            className={styles.slider}
            onClick={() => {
              setSlider(!slider);
              setTimeout(
                () =>
                  setTheme((theme) => {
                    localStorage.setItem("theme", `${!theme}`);
                    return !theme;
                  }),
                200
              );
            }}
          >
            <div className={clsx(styles.shown, styles[slider ? "dark" : "light"])}></div>
          </button>

          <svg className={styles.moon}>
            <circle fill="white" cx="10" cy="10" r="6" />
            <circle fill="#939BF4" cx="11.8" cy="8.85" r="4" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
