import { useTranslation } from "react-i18next";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "../../components/Marquee/Marquee";
import {
  LOGO1,
  LOGO10,
  LOGO11,
  LOGO12,
  LOGO13,
  LOGO14,
  LOGO2,
  LOGO3,
  LOGO4,
  LOGO5,
  LOGO6,
  LOGO7,
  LOGO8,
  LOGO9,
} from "./Partners.Constants";
import "./partners.scss";

interface PartnersProps {
  className: string;
}
const Partners: React.FC<PartnersProps> = ({ className }) => {
  const { t } = useTranslation("partners");

  return (
    <section className={`${className}`}>
      <div className={`${className}__container container`}>
        <div className={`${className}__line ${className}__line-first`} />
        <div className={`${className}__line ${className}__line-second`} />
        <div className={`${className}__line ${className}__line-third`} />
        <div className={`${className}__line ${className}__line-fourth`} />

        <div className={`${className}__content`}>
          <h2 className={`${className}__title`}>{t("partners.title")}</h2>
          <div className={`${className}__main-line`} />

          <Marquee>
            <MarqueeContent speed={50}>
              <MarqueeItem>
                <img src={LOGO1} alt="basf" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO2} alt="dell" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO3} alt="etimex" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO4} alt="fuji" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO5} alt="hempel" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO6} alt="massa" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO7} alt="paradyz" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO8} alt="pg" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO9} alt="pyro" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO10} alt="siemens" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO11} alt="stihl" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO12} alt="voortman" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO13} alt="wamgroup" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO14} alt="yaskawa" />
              </MarqueeItem>
            </MarqueeContent>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
