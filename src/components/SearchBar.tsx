import { MagnifyingGlass } from "phosphor-react";
export const SearchBar = () => {
  return (
    <div className="search-bar">
      <form action="POST" className="search-bar__form">
        <div className="search-bar__form__input">
          <input type="text" name="search" placeholder="Buscar vaga" />
        </div>
        <div className="search-bar__form__icon">
          <MagnifyingGlass size={20} />
        </div>
      </form>
    </div>
  );
};
