import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageStructure = ({ children }: { children?: JSX.Element }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <noscript>You need to enable Javascript</noscript>
      </head>
      <body>
        <main className="app">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__pages">{children}</div>
          <footer className="app__footer">
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
};
