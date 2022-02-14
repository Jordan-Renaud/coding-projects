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
        <h2 className="name link">Jordan Renaud</h2>
        <h2>/coding-projects</h2>
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
      </footer>
    </>
  );
}

export default MyApp;
