import Link from "next/link";
import { useRouter } from "next/router";
import WriteUp from "./WriteUp";
import { writeUpContent } from "./data";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <header className="toolbar">
        <a
          href="https://jordan-renaud.netlify.app/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          jordan-renaud
        </a>
        <span>/</span>
        <Link href="/">
          <a className="link">coding-projects</a>
        </Link>
      </header>
      <Component {...pageProps} />
      {writeUpContent.map((content) => {
        if (`/projects/${content.pagePath}` === router.pathname) {
          return <WriteUp key={content.title} content={content} />;
        }
      })}
      <footer>
        {router.pathname !== "/" && (
          <Link href="/">
            <a className="link">Back to home</a>
          </Link>
        )}
        <p className="watermark">Jordan Renaud 2022</p>
      </footer>
    </>
  );
}

export default MyApp;
