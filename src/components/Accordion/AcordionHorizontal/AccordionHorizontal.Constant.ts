import { useTranslation } from "react-i18next";

type AccordionHorizontalItem = {
  key: string;
    number: string;
    style: string;
  title: string;
  title1?: string;
  title2?: string;
  title3?: string;
    title4?: string;
    title5?: string;
    title6?: string;
  text: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  text10?: string;
  text11?: string;
  text12?: string;
  text13?: string;
  text14?: string;
  text15?: string;
};
export const useAccordionHorizontalItems = (): AccordionHorizontalItem[] => {
  const { t } = useTranslation("qa");

  return [
    {
      key: t("qa.item1.id"),
      number: t("qa.item1.id"),
      style: "item1",
      title: t("qa.item1.title"),
      text: t("qa.item1.text"),
      title1: t("qa.item1.title1"),
      text1: t("qa.item1.text1"),
      title2: t("qa.item1.title2"),
      text2: t("qa.item1.text2"),
      title3: t("qa.item1.title3"),
      text3: t("qa.item1.text3"),
      text4: t("qa.item1.text4"),
    },
    {
      key: t("qa.item2.id"),
      number: t("qa.item2.id"),
      style: "item2",
      title: t("qa.item2.title"),
      text: t("qa.item2.text"),
      title1: t("qa.item2.title1"),
      text1: t("qa.item2.text1"),
      text2: t("qa.item2.text2"),
      text3: t("qa.item2.text3"),
      title2: t("qa.item2.title2"),
      text4: t("qa.item2.text2"),
      text5: t("qa.item2.text5"),
      title3: t("qa.item2.title3"),
      text6: t("qa.item2.text6"),
      text7: t("qa.item2.text7"),
      title4: t("qa.item2.title4"),
      text8: t("qa.item2.text8"),
      text9: t("qa.item2.text9"),
      title5: t("qa.item2.title5"),
      text10: t("qa.item2.text10"),
      text11: t("qa.item2.text11"),
      text12: t("qa.item2.text12"),
      title6: t("qa.item2.title6"),
      text13: t("qa.item2.text13"),
      text14: t("qa.item2.text14"),
    },
    {
      key: t("qa.item3.id"),
      number: t("qa.item3.id"),
      style: "item3",
      title: t("qa.item3.title"),
      text: t("qa.item3.text"),
      title1: t("qa.item3.title1"),
      text1: t("qa.item3.text1"),
      text2: t("qa.item3.text2"),
      title2: t("qa.item3.title2"),
      text4: t("qa.item3.text4"),
      text5: t("qa.item3.text5"),
      text6: t("qa.item3.text6"),
      title3: t("qa.item3.title3"),
      text7: t("qa.item3.text7"),
      title4: t("qa.item3.title4"),
      text8: t("qa.item3.text8"),
      text9: t("qa.item3.text9"),
    },
    {
      key: t("qa.item4.id"),
      number: t("qa.item4.id"),
      style: "item4",
      title: t("qa.item4.title"),
      title1: t("qa.item4.title1"),
      text: t("qa.item4.text"),
      text1: t("qa.item4.text1"),
      title2: t("qa.item4.title2"),
      text2: t("qa.item4.text2"),
      text3: t("qa.item4.text3"),
      text4: t("qa.item4.text4"),
      text5: t("qa.item4.text5"),
      text6: t("qa.item4.text6"),
    },
    {
      key: t("qa.item5.id"),
      number: t("qa.item5.id"),
      style: "item5",
      title: t("qa.item5.title"),
      text: t("qa.item5.text"),
      title1: t("qa.item5.title1"),
      text1: t("qa.item5.text1"),
      text2: t("qa.item5.text2"),
      text3: t("qa.item5.text3"),
      text4: t("qa.item5.text4"),
      text5: t("qa.item5.text5"),
      title2: t("qa.item5.title2"),
      text6: t("qa.item5.text6"),
      text7: t("qa.item5.text7"),
      text8: t("qa.item5.text8"),
      text9: t("qa.item5.text9"),
      text10: t("qa.item5.text10"),
      text11: t("qa.item5.text11"),
      title3: t("qa.item5.title3"),
      text12: t("qa.item5.text12"),
      text13: t("qa.item5.text12"),
      text14: t("qa.item5.text14"),
      text15: t("qa.item5.text15"),
    },
    {
      key: t("qa.item6.id"),
      number: t("qa.item6.id"),
      style: "item6",
      title: t("qa.item6.title"),
      text: t("qa.item6.text"),
    },
  ];  }
