import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <header className="toolbar">
        <h2>Coding-Projects/</h2>
        <h2 className="name link">Jordan Renaud</h2>
      </header>
      <Component {...pageProps} />
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
