import Link from "next/link";
import LinkTile from "src/components/home-page/LinkTile";
import { useRouter } from "next/router";
import WriteUp from "../src/components/WriteUp";
import { writeUpContent, icons } from "src/data";
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
        {router.pathname === "/" && (
          <div className="link-container">
            {icons.map((icon) => (
              <LinkTile
                key={icon.title}
                iconLink={icon.link}
                icon={icon.icon}
                iconTitle={icon.title}
              />
            ))}
          </div>
        )}
        <p className="watermark">Jordan Renaud 2022</p>
      </footer>
    </>
  );
}

export default MyApp;
