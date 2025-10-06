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
  path1: string;
  path2: string;
  path3: string;
  path4: string;
};

export const usePopUpItems = (): PopUpItem[] => {
  const { t } = useTranslation("popUp");

  return [
    {
      key: t("popUp.card1.id"),
      img: img1,
      title: t("popUp.card1.title"),
      text1: t("popUp.card1.text1"),
      path1: "/services/materials/tiles",
      text2: t("popUp.card1.text2"),
      path2: "/services/materials/glass",
      text3: t("popUp.card1.text3"),
      path3: "/services/materials/roof",
      text4: t("popUp.card1.text4"),
      path4: "/services/materials/bricks",
    },

    {
      key: t("popUp.card2.id"),
      img: img2,
      title: t("popUp.card2.title"),
      text1: t("popUp.card2.text1"),
      path1: "/services/equipment/metallurgy",
      text2: t("popUp.card2.text2"),
      path2: "/services/equipment/energetics",
      text3: t("popUp.card2.text3"),
      path3: "/services/equipment/chemicals",
      text4: t("popUp.card2.text4"),
      path4: "/services/equipment/automation",
    },
    {
      key: t("popUp.card3.id"),
      img: img3,
      title: t("popUp.card3.title"),
      text1: t("popUp.card3.text1"),
      path1: "/services/raw/food",
      text2: t("popUp.card3.text2"),
      path2: "/services/raw/paints",
      text3: t("popUp.card3.text3"),
      path3: "/services/raw/plastic",
      text4: t("popUp.card3.text4"),
      path4: "/services/raw/cosmetic",
    },
    {
      key: t("popUp.card4.id"),
      img: img4,
      title: t("popUp.card4.title"),
      text1: t("popUp.card4.text1"),
      path1: "/services/logistics/railway",
      text2: t("popUp.card4.text2"),
      path2: "/services/logistics/container",
      text3: t("popUp.card4.text3"),
      path3: "/services/logistics/provision",
      text4: t("popUp.card4.text4"),
      path4: "/services/logistics/transportation",
    },
  ];
};
