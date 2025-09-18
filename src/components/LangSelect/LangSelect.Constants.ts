import { useTranslation } from "react-i18next";
import ru from '../../../public/assets/images/icons/ru.svg';
import en from '../../../public/assets/images/icons/en.svg';
import kz from '../../../public/assets/images/icons/kz.svg';


export type LanguageCode = "ru" | "en" | "kz";
type LangItem = {
  label: string;
  code: LanguageCode;
  img: string;
};

export const useLanguagesSelect = (): LangItem[] => {
  const { t } = useTranslation("header");

  return [
    { code: "ru", label: t("ru"), img: ru},
    { code: "en", label: t("en"), img: en },
    { code: "kz", label: t("kz"), img:kz },
  ];
};
