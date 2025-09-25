import { useTranslation } from "react-i18next";
import img1 from '/assets/images/header/pop-up/img1.webp'
import img2 from "/assets/images/header/pop-up/img2.webp";
import img3 from "/assets/images/header/pop-up/img3.webp";
import img4 from "/assets/images/header/pop-up/img4.webp";


export type PopUpItem = {
    key: string;
    img: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  path: string;
};

export const usePopUpItems = (): PopUpItem[] => {
  const { t } = useTranslation("popUp");

  return [
    {
      key: t("popUp.card1.id"),
      img: img1,
      path: "/services/materials",
      title: t("popUp.card1.title"),
      text1: t("popUp.card1.text1"),
      text2: t("popUp.card1.text2"),
      text3: t("popUp.card1.text3"),
      text4: t("popUp.card1.text4"),
    },

    {
      key: t("popUp.card2.id"),
      img: img2,
      path: "/services/equipment",
      title: t("popUp.card2.title"),
      text1: t("popUp.card2.text1"),
      text2: t("popUp.card2.text2"),
      text3: t("popUp.card2.text3"),
      text4: t("popUp.card2.text4"),
    },
    {
      key: t("popUp.card3.id"),
      img: img3,
      path: "/services/raw",
      title: t("popUp.card3.title"),
      text1: t("popUp.card3.text1"),
      text2: t("popUp.card3.text2"),
      text3: t("popUp.card3.text3"),
      text4: t("popUp.card3.text4"),
    },
    {
      key: t("popUp.card4.id"),
      img: img4,
      path: "/services/logistics",
      title: t("popUp.card4.title"),
      text1: t("popUp.card4.text1"),
      text2: t("popUp.card4.text2"),
      text3: t("popUp.card4.text3"),
      text4: t("popUp.card4.text4"),
    },
  ];
};
