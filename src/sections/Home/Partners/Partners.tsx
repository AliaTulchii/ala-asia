import { useTranslation } from 'react-i18next';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '../../../components/Marquee/Marquee';
import { LOGO1, LOGO10, LOGO2, LOGO3, LOGO4, LOGO5, LOGO6, LOGO7, LOGO8, LOGO9 } from './Partners.Constants';
import './partners.scss'
const Partners = () => {
    const { t } = useTranslation("partners");
  
  return (
    <section className="partners">
      <div className="partners__container container">
        <div className="partners-line-first" />
        <div className="partners-line-second" />
        <div className="partners-line-third" />
        <div className="partners-line-fourth" />

        <div className="partners__content">
          <h2 className="partners__title">{t("partners.title")}</h2>
          <div className="partners__main-line" />

          <Marquee>
            <MarqueeContent speed={50}>
              <MarqueeItem>
                <img src={LOGO1} alt="logo1" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO2} alt="logo2" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO3} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO4} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO5} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO6} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO7} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO8} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO9} alt="logo3" />
              </MarqueeItem>
              <MarqueeItem>
                <img src={LOGO10} alt="logo3" />
              </MarqueeItem>
            </MarqueeContent>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Partners
