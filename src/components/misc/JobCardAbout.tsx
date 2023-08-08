import { Briefcase, Coin, CreditCard, Gear } from "phosphor-react";

export const JobCardAbout = () => {
  return (
    <>
      <div className="job-misc-item">
        <div className="job-misc-item__main">
          <Briefcase color="var(--btn-color)" size={18} />
          <strong>Tipo:</strong>
        </div>
        <p>Remoto</p>
      </div>
      <div className="job-misc-item">
        <div className="job-misc-item__main">
          <Coin color="var(--btn-color)" size={18} />
          <strong>Salário:</strong>
        </div>
        <p>à combinar</p>
      </div>
      <div className="job-misc-item">
        <div className="job-misc-item__main">
          <Gear color="var(--btn-color)" size={18} />
          <strong>Área de atuação: </strong>
        </div>
        <p>Marketing e correlatas </p>
      </div>
      <div className="job-misc-item">
        <div className="job-misc-item__main">
          <CreditCard color="var(--btn-color)" size={18} />
          <strong>Beneficios:</strong>
        </div>
        <p>Vale Transporte, Vale Refeição</p>
      </div>
    </>
  );
};
