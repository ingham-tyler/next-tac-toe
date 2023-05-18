import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        <h1>Hello and Welcome to Next Tac Toe!</h1>
        <h3>Tic tac toe built for the web with NextJS 13.</h3>
      </div>
      <div className={styles.content}>
        <p>
          This site was designed and developed by Tyler Ingham. The source code
          is available here on{" "}
          <a
            href="https://github.com/ingham-tyler/next-tac-toe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <a type="button" href="/">
        <button>Back</button>
      </a>
    </div>
  );
}
