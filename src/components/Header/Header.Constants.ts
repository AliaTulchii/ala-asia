import { useTranslation } from "react-i18next";

// import i18n from "i18next";

// export const NAV_HOME = i18n.t("header.home");
// export const NAV_SERICES = i18n.t("header.services");
// export const NAV_ABOUT = i18n.t("header.about");
// export const NAV_CONTACTS = i18n.t("header.contacts");

type NavItem = {
  key: string;
  text: string;
  path: string;
  type: string;
};

export const useNavItems = (): NavItem[] => {
  const { t } = useTranslation("header");

  return [
    { key: "1", path: "/", text: t("header.home"), type: "link" },
    { key: "2", path: "services", text: t("header.services"), type: "button" },
    { key: "3", path: "about", text: t("header.about"), type: "link" },
    { key: "4", path: "contact", text: t("header.contacts"), type: "link" },
  ];
};
