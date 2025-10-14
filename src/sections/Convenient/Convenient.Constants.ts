import { useTranslation } from "react-i18next";
import map from '/assets/images/home/convenient/map.jpg';
import mapMob from "/assets/images/home/convenient/map-mob.webp";
import truck from '/assets/images/home/convenient/truck.jpg';
import truckMob from "/assets/images/home/convenient/truck-mob.webp";
import mans from '/assets/images/home/convenient/mans.jpg';
import menMob from "/assets/images/home/convenient/men-mob.webp";
import calendar from "/assets/images/home/convenient/calendar.jpg"
import calendarMob from "/assets/images/home/convenient/calendar-mob.webp";



type ConvenientItem = {
  key: string;
    title: string;
    text: string;
  img: string;
  imgMob: string;
};

export const useConvenientItems = (): ConvenientItem[] => {
  const { t } = useTranslation("convenient");

  return [
    {
      key: t("convenient.item1.id"),
      title: t("convenient.item1.title"),
      text: t("convenient.item1.text"),
      img: map,
      imgMob: mapMob,
    },
    {
      key: t("convenient.item2.id"),
      title: t("convenient.item2.title"),
      text: t("convenient.item2.text"),
      img: truck,
      imgMob: truckMob,
    },
    {
      key: t("convenient.item3.id"),
      title: t("convenient.item3.title"),
      text: t("convenient.item3.text"),
      img: mans,
      imgMob: menMob,
    },
    {
      key: t("convenient.item4.id"),
      title: t("convenient.item4.title"),
      text: t("convenient.item4.text"),
      img: calendar,
      imgMob: calendarMob,    },
  ];
};
