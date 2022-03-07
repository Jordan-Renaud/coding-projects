import Link from "next/link";
import { useRouter } from "next/router";
import WriteUp from "../src/components/WriteUp";
import { writeUpContent } from "src/data";
import "src/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <header className="toolbar">
        {router.pathname
          .split("/")
          .reduce((previous, currentPath) => {
            if (previous.length === 0)
              return [{ name: "jordan-renaud", link: "/" }];

            const lastLink = previous[previous.length - 1].link;
            return [
              ...previous,
              {
                name: currentPath,
                link: (lastLink + "/" + currentPath).replace("//", "/"),
              },
            ];
          }, [])
          .map(({ name, link }) => {
            return (
              <>
                <Link href={link} key={link}>
                  <a className="link">{name}</a>
                </Link>
                <span>/</span>
              </>
            );
          })}
      </header>
      <Component {...pageProps} />
      {writeUpContent.map((content) => {
        if (`/coding-projects/${content.pagePath}` === router.pathname) {
          return <WriteUp key={content.title} content={content} />;
        }
      })}
      <footer>
        {router.pathname !== "/coding-projects" && (
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
