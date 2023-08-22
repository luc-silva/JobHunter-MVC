import { Coin } from "phosphor-react";

export const jobPage = () => {
  return (
    <main>
      <section>
        <div>
          <div>Engenheiro de Software Júnior</div>
          <div>
            <a>Empresa ABC</a>
            <strong>São Paulo</strong>
          </div>
        </div>
        <div>
          <div className="job-misc-item">
            <div className="job-misc-item__main">
              <Coin color="var(--btn-color)" size={18} />
              <strong>Salário:</strong>
            </div>
            <p>à combinar</p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
};
