import { GithubLogo, LinkedinLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__main">
        <p>
          Projeto feito por Lucas Santos utilizando ReactJS, Express, Nest e
          Prisma.
        </p>
      </div>
      <div className="app-footer__external">
        <a href="">
          <LinkedinLogo size={30} />
        </a>
        <a href="">
          <GithubLogo size={30} />
        </a>
      </div>
    </footer>
  );
};
