import { SearchBar } from "./SearchBar";
import { SiteLogo } from "./SiteLogo";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <SiteLogo />
      </div>
      <div className="app-header__search-bar">
        <SearchBar />
      </div>
    </header>
  );
};
