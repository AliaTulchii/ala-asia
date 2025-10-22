import { useTranslation } from "react-i18next";

export const IMG1 = "/assets/images/services/supplies/tiles.jpg"
export const IMG2 = "/assets/images/services/supplies/glass.jpg";
export const IMG3 = "/assets/images/services/supplies/roof.jpg";
export const IMG4 = "/assets/images/services/supplies/bricks.jpg";
export const IMG5 = "/assets/images/services/supplies/metallurgy.jpg";
export const IMG6 = "/assets/images/services/supplies/energetics.jpg";
export const IMG7 = "/assets/images/services/supplies/chemicals.jpg";
export const IMG8 = "/assets/images/services/supplies/automation.jpg";
export const IMG9 = "/assets/images/services/supplies/food.jpg";
export const IMG10 = "/assets/images/services/supplies/paints.jpg";
export const IMG11 =  "/assets/images/services/supplies/plastic.jpg";
export const IMG12 = "/assets/images/services/supplies/cosmetic.jpg";
export const IMG13 = "/assets/images/services/supplies/railway.jpg";
export const IMG14 = "/assets/images/services/supplies/container.jpg";
export const IMG15 = "/assets/images/services/supplies/provision.jpg";
export const IMG16 =  "/assets/images/services/supplies/transportation.jpg";

export const IMG1_MOB = "/assets/images/services/supplies/tiles-mob.webp";
export const IMG2_MOB = "/assets/images/services/supplies/glass-mob.webp";
export const IMG3_MOB = "/assets/images/services/supplies/roof-mob.webp";
export const IMG4_MOB = "/assets/images/services/supplies/bricks-mob.webp";
export const IMG5_MOB = "/assets/images/services/supplies/metallurgy-mob.webp";
export const IMG6_MOB = "/assets/images/services/supplies/energetics-mob.webp";
export const IMG7_MOB = "/assets/images/services/supplies/chemicals-mob.webp";
export const IMG8_MOB = "/assets/images/services/supplies/automation-mob.webp";
export const IMG9_MOB = "/assets/images/services/supplies/food-mob.webp";
export const IMG10_MOB = "/assets/images/services/supplies/paints-mob.webp";
export const IMG11_MOB = "/assets/images/services/supplies/plastic-mob.webp";
export const IMG12_MOB = "/assets/images/services/supplies/cosmetic-mob.webp";
export const IMG13_MOB = "/assets/images/services/supplies/railway-mob.webp";
export const IMG14_MOB = "/assets/images/services/supplies/container-mob.webp";
export const IMG15_MOB = "/assets/images/services/supplies/provision-mob.webp";
export const IMG16_MOB = "/assets/images/services/supplies/transportation-mob.webp";


type SuppliesTabs = {
  id: string;
  label: string;
  number: string;
};

export const useSuppliesTabs = (): SuppliesTabs[] => {
  const { t } = useTranslation("popUp,supplies");

  return [
    {
      id: "materials",
      label: t("popUp.card1.title"),
      number: t("supplies.tab1.id"),
    },
    {
      id: "equipment",
      label: t("popUp.card2.title"),
      number: t("supplies.tab2.id"),
    },
    {
      id: "raw",
      label: t("popUp.card3.title"),
      number: t("supplies.tab3.id"),
    },
    {
      id: "logistics",
      label: t("popUp.card4.title"),
      number: t("supplies.tab4.id"),
    },
  ];
};


type SubTab = {
  id: string;
  label: string;
};

type SubTabs = Record<string, SubTab[]>;

export const useSuppliesSubTabs = (): SubTabs => {
  const { t } = useTranslation("popUp,supplies");

  return {
    materials: [
      { id: "tiles", label: t("popUp.card1.text1") },
      { id: "glass", label: t("popUp.card1.text2") },
      { id: "roof", label: t("popUp.card1.text3") },
      { id: "bricks", label: t("popUp.card1.text4") },
    ],
    equipment: [
      { id: "metallurgy", label: t("popUp.card2.text1") },
      { id: "energetics", label: t("popUp.card2.text2") },
      { id: "automation", label: t("popUp.card2.text4") },
      { id: "chemicals", label: t("popUp.card2.text3") },
    ],
    raw: [
      { id: "food", label: t("popUp.card3.text1") },
      { id: "paints", label: t("popUp.card3.text2") },
      { id: "plastic", label: t("popUp.card3.text3") },
      { id: "cosmetic", label: t("popUp.card3.text4") },
    ],
    logistics: [
      { id: "railway", label: t("popUp.card4.text1") },
      { id: "container", label: t("popUp.card4.text2") },
      { id: "provision", label: t("popUp.card4.text3") },
      { id: "transportation", label: t("popUp.card4.text4") },
    ],
  };
};

