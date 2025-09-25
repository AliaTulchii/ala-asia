import { useTranslation } from "react-i18next";
import map from '/assets/images/home/convenient/map.jpg';
import truck from '/assets/images/home/convenient/truck.jpg';
import mans from '/assets/images/home/convenient/mans.jpg';
import calendar from "/assets/images/home/convenient/calendar.jpg"


type ConvenientItem = {
  key: string;
    title: string;
    text: string;
    img: string
};

export const useConvenientItems = (): ConvenientItem[] => {
  const { t } = useTranslation("convenient");

  return [
    {
      key: t("convenient.item1.id"),
      title: t("convenient.item1.title"),
      text: t("convenient.item1.text"),
      img: map,
    },
    {
      key: t("convenient.item2.id"),
      title: t("convenient.item2.title"),
      text: t("convenient.item2.text"),
      img: truck,
    },
    {
      key: t("convenient.item3.id"),
      title: t("convenient.item3.title"),
      text: t("convenient.item3.text"),
      img: mans,
    },
    {
      key: t("convenient.item4.id"),
      title: t("convenient.item4.title"),
      text: t("convenient.item4.text"),
      img: calendar,
    },
  ];
};
