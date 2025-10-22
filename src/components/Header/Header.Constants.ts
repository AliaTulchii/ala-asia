import { useTranslation } from "react-i18next";

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
