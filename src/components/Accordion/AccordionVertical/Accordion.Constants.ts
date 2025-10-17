import { useTranslation } from "react-i18next";

type AccordionItem = {
  key: number;
  number: string;
  title: string;
  text1: string;
    subtitle: string;
    text2: string;
    text3: string;
  path: string;
  btn: string;
};

export const useAccordionItems = (): AccordionItem[] => {
  const { t } = useTranslation("accordion");

  return [
    {
      key: 1,
      number: t("accordion.item1.id"),
      path: "/contact",
      title: t("accordion.item1.title"),
      text1: t("accordion.item1.text1"),
      subtitle: t("accordion.item1.subtitle"),
      text2: t("accordion.item1.text2"),
      text3: t("accordion.item1.text3"),
      btn: t("accordion.item1.btn"),
    },
    {
      key: 2,
      number: t("accordion.item2.id"),
      path: "/contact",
      title: t("accordion.item2.title"),
      text1: t("accordion.item2.text1"),
      subtitle: t("accordion.item2.subtitle"),
      text2: t("accordion.item2.text2"),
      text3: t("accordion.item2.text3"),
      btn: t("accordion.item1.btn"),
    },
    {
      key: 3,
      number: t("accordion.item3.id"),
      path: "/contact",
      title: t("accordion.item3.title"),
      text1: t("accordion.item3.text1"),
      subtitle: t("accordion.item3.subtitle"),
      text2: t("accordion.item3.text2"),
      text3: t("accordion.item3.text3"),
      btn: t("accordion.item1.btn"),
    },
  ];
};
