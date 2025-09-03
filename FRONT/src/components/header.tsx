import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header>
        <h1>{t("welcome")}</h1>
      <nav>
        <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </nav>
      <ul>
        <li>{t("menu.home")}</li>
        <li>{t("menu.about")}</li>
      </ul>
    </header>
  );
}

export default Header;
