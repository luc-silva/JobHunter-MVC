import { Bookmark } from "phosphor-react";
import { JobCardAbout } from "./misc/JobCardAbout";

export const JobCard = () => {
  return (
    <div className="job-card">
      <div className="job-card__header">
        <h1>Profissional em ABC</h1>
        <div className="job-card__header__info">
          <p>Empresa ABC</p>
          <strong>São Paulo</strong>
        </div>
      </div>
      <div className="job-card__main">
        <div className="job-card__main__misc">
          <JobCardAbout />
        </div>
        <div className="job-card__main__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            sapiente labore mollitia tempora, eaque doloribus saepe harum
            asperiores magnam ea voluptate voluptatum at aliquam possimus, in
            nulla assumenda magni. Earum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            sapiente labore mollitia tempora, eaque doloribus saepe harum
            asperiores magnam ea voluptate voluptatum at aliquam possimus, in
            nulla assumenda magni. Earum!
          </p>
        </div>
      </div>
      <div className="job-card__footer">
        <button>
          <Bookmark size={16} />
        </button>
        <a href="http://localhost:8080/login" className="take-offer">
          Se canditadar
        </a>
      </div>
    </div>
  );
};
