import { useTranslation } from "react-i18next";



type NavOption = {
  path: string;
  text: string;
};
type MobileMenuItem = {
  key: string;
  text: string;
  path: string;
  type: string;
  options?: NavOption[];
};

export const useMobileMenuItems = (): MobileMenuItem[] => {
  const { t } = useTranslation(["header", "popUp"]);

  return [
    { key: "1", path: "/", text: t("header.home"), type: "link" },
    {
      key: "2",
      path: "services",
      text: t("header.services"),
      type: "select",
      options: [
        {
          path: "/services/materials/tiles",
          text: t("popUp.card1.title"),
        },
        {
          path: "/services/equipment/metallurgy",
          text: t("popUp.card2.title"),
        },
        {
          path: "/services/raw/food",
          text: t("popUp.card3.title"),
        },
        {
          path: "/services/logistics/railway",
          text: t("popUp.card4.title"),
        },
      ],
    },
    { key: "3", path: "about", text: t("header.about"), type: "link" },
    { key: "4", path: "contact", text: t("header.contacts"), type: "link" },
  ];
};
