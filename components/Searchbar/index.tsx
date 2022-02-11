import styles from "./index.module.scss";
import clsx from "clsx";
import { Dispatch, SetStateAction, FC } from "react";

interface Props {
  theme: boolean;
  setTitle: Dispatch<SetStateAction<string>>;
  setPlace: Dispatch<SetStateAction<string>>;
  fullTime: boolean;
  setFullTime: Dispatch<SetStateAction<boolean>>;
  filter: boolean;
  setFilter: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<Props> = ({
  theme,
  setTitle,
  setPlace,
  fullTime,
  setFullTime,
  filter,
  setFilter,
}) => {
  return (
    <nav className={clsx(styles.searchBar, !theme && styles.dark)}>
      <div className={styles.search}>
        <svg className={styles.magnifyingGlass}>
          <g className={styles.glass}>
            <circle r="9" cx="9" cy="9" />
            <circle r="6" cx="9" cy="9" />
          </g>

          <g className={styles.handle}>
            <path d="M14,14 L17,17" />
            <path d="M16.201,15.239 L17.281,15.231 L15.231,17.281 L15.239,16.201" />
            <path d="M23,23 L16.256,16.256" />
          </g>
        </svg>

        <input
          type="text"
          placeholder="Filter by title..."
          onChange={(event) => setTitle(event.target.value)}
        />

        <div className={styles.icons}>
          <button className={styles.filterIcon} onClick={() => setFilter(true)}></button>
          <button className={styles.glassIcon}></button>
        </div>
      </div>

      <div
        className={clsx(styles.container, filter && styles.open)}
        onClick={() => {
          setFilter(false);
        }}
      >
        <div className={styles.filter} onClick={(event) => event.stopPropagation()}>
          <div className={styles.location}>
            <svg className={styles.pin}>
              <path d="M8.5,24 L15,15 A 8.2 8.2 0 1 0 2 15 Z" />
              <circle r="3" cx="8.5" cy="10" />
            </svg>
            <input
              type="text"
              placeholder="Filter by location..."
              onChange={(event) => setPlace(event.target.value)}
            />
          </div>

          <div className={styles.fullTime}>
            <div className={styles.check}>
              <input
                type="checkbox"
                id="full-time"
                checked={fullTime}
                onClick={() => setFullTime(!fullTime)}
              />
              <label htmlFor="full-time">
                <div className={styles.box}>
                  <svg className={styles.mark}>
                    <path strokeWidth="2" fill="none" d="M6.5,13 L10,16.5 L18,8" />
                  </svg>
                </div>
                <p>
                  Full Time&nbsp;<span className={styles.only}>Only</span>
                </p>
              </label>
            </div>
            <button
              className={styles.search}
              onClick={() => {
                setFilter(false);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
