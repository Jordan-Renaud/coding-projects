import Link from "next/link";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="toolbar">
        <h2>Coding-Projects/</h2>
        <h2 className="name link">Jordan Renaud</h2>
      </header>
      <Component {...pageProps} />
      <footer>
        <Link href="/">
          <a className="link">Back to home</a>
        </Link>
      </footer>
    </>
  );
}

export default MyApp;
