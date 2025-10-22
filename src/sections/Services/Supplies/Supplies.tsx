import { useTranslation } from "react-i18next";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import './supplies.scss'
import { IMG1, IMG10, IMG10_MOB, IMG11, IMG11_MOB, IMG12, IMG12_MOB, IMG13, IMG14, IMG14_MOB, IMG15, IMG15_MOB, IMG16, IMG16_MOB, IMG1_MOB, IMG2, IMG2_MOB, IMG3, IMG3_MOB, IMG4, IMG4_MOB, IMG5, IMG5_MOB, IMG6, IMG6_MOB, IMG7, IMG7_MOB, IMG8, IMG8_MOB, IMG9, IMG9_MOB, useSuppliesSubTabs, useSuppliesTabs } from "./Supplies.Constants";
import { useEffect, useRef } from "react";

const Supplies = () => {
    const { t } = useTranslation("popUp,supplies");
    const { tab = "materials", subtab } = useParams();
  const navigate = useNavigate();  
  const tabsRef = useRef<HTMLDivElement>(null);
  const subTabsRef = useRef<HTMLDivElement>(null);
    const tabs = useSuppliesTabs();
  const subTabs = useSuppliesSubTabs();

    const activeSubTab =
    subtab || (subTabs[tab] && subTabs[tab][0].id) || undefined;
  
    useEffect(() => {
      const scrollY = window.scrollY;
      window.scrollTo({ top: scrollY });
    }, [tab, subtab]);
    

    const smoothLeftScroll = (
      container: HTMLDivElement | null,
      activeSelector: string
    ) => {
      if (!container) return;
      const active = container.querySelector(
        activeSelector
      ) as HTMLElement | null;
      if (!active) return;

      requestAnimationFrame(() => {
        // відстань до лівого краю контейнера з врахуванням паддінгу
        const containerStyle = getComputedStyle(container);
        const paddingLeft = parseInt(containerStyle.paddingLeft) || 0;

        const scrollLeft = active.offsetLeft - paddingLeft - 24; // 24 це можна підкоригувати
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      });
    };

    // 🔹 Викликаємо скрол активного табу
    useEffect(() => {
      smoothLeftScroll(tabsRef.current, ".supplies__tab.active");
    }, [tab]);

    // 🔹 Викликаємо скрол активного саб-таб
    useEffect(() => {
      smoothLeftScroll(subTabsRef.current, ".supplies__subtab.active");
    }, [activeSubTab]);
    
  return (
    <section className="supplies">
      {/* <div className="supplies__line" /> */}
      <div className="container">
        <h1 className="supplies__title">{t("supplies.title")}</h1>
        <p className="supplies__text">{t("supplies.text")}</p>
        <div className="supplies__tabs" ref={tabsRef}>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`supplies__tab supplies__tab--${t.id} ${
                tab === t.id ? "active" : ""
              }`}
              onClick={() =>
                navigate(`/services/${t.id}/${subTabs[t.id]?.[0]?.id}`, {
                  replace: true,
                })
              }
            >
              <p className="supplies__tab-text">{t.number}</p>
              <p className="supplies__tab-text">{t.label}</p>
            </button>
          ))}
        </div>

        <div className="supplies__subtabs " ref={subTabsRef}>
          {subTabs[tab]?.map((s) => (
            <button
              key={s.id}
              className={`supplies__subtab supplies__subtab--${s.id} ${
                activeSubTab === s.id ? "active" : ""
              }`}
              onClick={
                (() => navigate(`/services/${tab}/${s.id}`, { replace: true }))
              }
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="supplies__content">
          {activeSubTab === "tiles" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab1.subTabs.subTab1.text1")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab1.subTabs.subTab1.title")}
                </h2>
                <p className="supplies__card-subtext">
                  {t("supplies.tab1.subTabs.subTab1.text2")}
                </p>
                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG1_MOB} 1x, ${IMG1_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG1} 1x, ${IMG1} 2x`} type="image/jpg" />
                <img
                  src={IMG1}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "glass" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab1.subTabs.subTab2.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab1.subTabs.subTab2.title")}
                </h2>
                <p className="supplies__card-subtext">
                  {t("supplies.tab1.subTabs.subTab2.text1")}
                </p>

                <div className="supplies__card-content-wrapper">
                  <h3 className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab1.subTabs.subTab2.boldText1")}
                  </h3>
                  <p className="supplies__card-subtext subtext__glass">
                    {t("supplies.tab1.subTabs.subTab2.text2")}
                  </p>
                  <h3 className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab1.subTabs.subTab2.boldText2")}
                  </h3>
                  <p className="supplies__card-subtext subtext__glass">
                    {t("supplies.tab1.subTabs.subTab2.text3")}
                  </p>
                  <h3 className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab1.subTabs.subTab2.boldText3")}
                  </h3>
                  <p className="supplies__card-subtext subtext__glass">
                    {t("supplies.tab1.subTabs.subTab2.text4")}
                  </p>
                  <h3 className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab1.subTabs.subTab2.boldText4")}
                  </h3>
                  <p className="supplies__card-subtext subtext__glass">
                    {t("supplies.tab1.subTabs.subTab2.text5")}
                  </p>
                  <h3 className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab1.subTabs.subTab2.boldText5")}
                  </h3>
                  <p className="supplies__card-subtext subtext__glass">
                    {t("supplies.tab1.subTabs.subTab2.text6")}
                  </p>
                </div>
                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG2_MOB} 1x, ${IMG2_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG2} 1x, ${IMG2} 2x`} type="image/jpg" />
                <img
                  src={IMG2}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "roof" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab1.subTabs.subTab3.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab1.subTabs.subTab3.title")}
                </h2>
                <p className="supplies__card-subtext subtext__glass">
                  {t("supplies.tab1.subTabs.subTab3.text1")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="subtext__bold">
                        {t("supplies.tab1.subTabs.subTab3.title1")}
                      </span>
                      {t("supplies.tab1.subTabs.subTab3.text2")}
                    </p>
                  </li>

                  <li className="supplies__card-item">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="subtext__bold">
                        {t("supplies.tab1.subTabs.subTab3.title2")}
                      </span>
                      {t("supplies.tab1.subTabs.subTab3.text3")}
                    </p>
                  </li>

                  <li className="supplies__card-item">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="subtext__bold">
                        {t("supplies.tab1.subTabs.subTab3.title3")}
                      </span>
                      {t("supplies.tab1.subTabs.subTab3.text4")}
                    </p>
                  </li>
                </ul>
                <p className="supplies__card-subtext">
                  {t("supplies.tab1.subTabs.subTab3.text5")}
                </p>
                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG3_MOB} 1x, ${IMG3_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG3} 1x, ${IMG3} 2x`} type="image/jpg" />
                <img
                  src={IMG3}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "bricks" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab1.subTabs.subTab4.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab1.subTabs.subTab4.title")}
                </h2>

                <h3 className="supplies__card-subtext subtext__bold">
                  {t("supplies.tab1.subTabs.subTab4.title1")}
                </h3>
                <p className="supplies__card-subtext ">
                  {t("supplies.tab1.subTabs.subTab4.text1")}
                </p>

                <h3 className=" supplies__card-subtext subtext__bold">
                  {t("supplies.tab1.subTabs.subTab4.title2")}
                </h3>
                <p className="supplies__card-subtext ">
                  {t("supplies.tab1.subTabs.subTab4.text2")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG4_MOB} 1x, ${IMG4_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG4} 1x, ${IMG4} 2x`} type="image/jpg" />
                <img
                  src={IMG4}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "metallurgy" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab2.subTabs.subTab1.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab2.subTabs.subTab1.title")}
                </h2>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab1.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab1.boldText")}
                  </span>
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG5_MOB} 1x, ${IMG5_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG5} 1x, ${IMG5} 2x`} type="image/jpg" />
                <img
                  src={IMG5}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "energetics" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab2.subTabs.subTab2.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab2.subTabs.subTab2.title")}
                </h2>

                <p className="supplies__card-subtext  subtext__glass">
                  {t("supplies.tab2.subTabs.subTab2.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab2.title1")}
                  </span>
                </p>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab2.text2")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab2.title2")}
                  </span>
                  {t("supplies.tab2.subTabs.subTab2.text3")}
                </p>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab2.text4")}
                </p>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab2.text5")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG6_MOB} 1x, ${IMG6_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG6} 1x, ${IMG6} 2x`} type="image/jpg" />
                <img
                  src={IMG6}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}

          {activeSubTab === "automation" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab2.subTabs.subTab3.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab2.subTabs.subTab3.title")}
                </h2>

                <p className="supplies__card-subtext  ">
                  {t("supplies.tab2.subTabs.subTab3.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab3.title1")}
                  </span>
                  {t("supplies.tab2.subTabs.subTab3.text2")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab3.title2")}
                  </span>
                  {t("supplies.tab2.subTabs.subTab3.text3")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab3.title3")}
                  </span>
                  {t("supplies.tab2.subTabs.subTab3.text4")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab3.title4")}
                  </span>
                  {t("supplies.tab2.subTabs.subTab3.text5")}
                </p>

                <p className="supplies__card-subtext subtext__bold ">
                  {t("supplies.tab2.subTabs.subTab3.text6")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      <span className=" subtext__bold">
                        {t("supplies.tab2.subTabs.subTab3.title5")}
                      </span>
                      {t("supplies.tab2.subTabs.subTab3.text7")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab2.subTabs.subTab3.title6")}
                      </span>
                      {t("supplies.tab2.subTabs.subTab3.text8")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab2.subTabs.subTab3.title7")}
                      </span>
                      {t("supplies.tab2.subTabs.subTab3.text9")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab2.subTabs.subTab3.title8")}
                      </span>
                      {t("supplies.tab2.subTabs.subTab3.text10")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab3.text11")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG7_MOB} 1x, ${IMG7_MOB} 2x`}
                  type="image/webp"
                />
                <source srcSet={`${IMG7} 1x, ${IMG7} 2x`} type="image/jpg" />
                <img
                  src={IMG7}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "chemicals" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab2.subTabs.subTab4.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab2.subTabs.subTab4.title")}
                </h2>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab4.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab2.subTabs.subTab4.title1")}
                  </span>
                  {t("supplies.tab2.subTabs.subTab4.text2")}
                </p>

                <p className="supplies__card-subtext subtext__bold ">
                  {t("supplies.tab2.subTabs.subTab3.text6")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab2.subTabs.subTab4.text3")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      {t("supplies.tab2.subTabs.subTab4.text4")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      {t("supplies.tab2.subTabs.subTab4.text5")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      {t("supplies.tab2.subTabs.subTab4.text6")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab2.subTabs.subTab4.text7")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG8_MOB} 1x, ${IMG8_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG8} 1x, ${IMG8} 2x`} type="image/jpg" />
                <img
                  src={IMG8}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "food" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab3.subTabs.subTab1.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab3.subTabs.subTab1.title")}
                </h2>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab3.subTabs.subTab1.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab3.subTabs.subTab1.title1")}
                  </span>
                  {t("supplies.tab3.subTabs.subTab1.text2")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab3.subTabs.subTab1.title2")}
                  </span>
                  {t("supplies.tab3.subTabs.subTab1.text3")}
                </p>

                <p className="supplies__card-subtext  subtext__glass">
                  {t("supplies.tab3.subTabs.subTab1.text4")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab1.title3")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab1.text5")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab1.title4")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab1.text6")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab1.title5")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab1.text7")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab3.subTabs.subTab1.text8")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG9_MOB} 1x, ${IMG9_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG9} 1x, ${IMG9} 2x`} type="image/jpg" />
                <img
                  src={IMG9}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}

          {activeSubTab === "paints" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab3.subTabs.subTab2.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab3.subTabs.subTab2.title")}
                </h2>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab3.subTabs.subTab2.text1")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab2.title1")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab2.text2")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab2.title2")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab2.text3")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab2.title3")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab2.text4")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab2.title4")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab2.text5")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab3.subTabs.subTab2.text6")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG10_MOB} 1x, ${IMG10_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG10} 1x, ${IMG10} 2x`} type="image/jpg" />
                <img
                  src={IMG10}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "plastic" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab3.subTabs.subTab3.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab3.subTabs.subTab3.title")}
                </h2>

                <ul>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <h3 className="supplies__card-subtext subtext__bold">
                      {t("supplies.tab3.subTabs.subTab3.title1")}
                    </h3>
                    <p className="supplies__card-subtext">
                      {t("supplies.tab3.subTabs.subTab3.text1")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <h3 className="supplies__card-subtext subtext__bold">
                      {t("supplies.tab3.subTabs.subTab3.title2")}
                    </h3>
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab3.subTabs.subTab3.text2")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab3.subTabs.subTab3.text3")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG11_MOB} 1x, ${IMG11_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG11} 1x, ${IMG11} 2x`} type="image/jpg" />
                <img
                  src={IMG11}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "cosmetic" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab3.subTabs.subTab4.text")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab3.subTabs.subTab4.title")}
                </h2>
                <p className="supplies__card-text">
                  {t("supplies.tab3.subTabs.subTab4.text1")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab4.title1")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab4.text2")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab3.subTabs.subTab4.title2")}
                      </span>
                      {t("supplies.tab3.subTabs.subTab4.text3")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab3.subTabs.subTab4.text4")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG12_MOB} 1x, ${IMG12_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG12} 1x, ${IMG12} 2x`} type="image/jpg" />
                <img
                  src={IMG12}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "railway" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab4.subTabs.subTab1.text")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab1.title")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab1.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab1.title2")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab1.text2")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab4.subTabs.subTab1.title3")}
                </h2>
                <p className="supplies__card-text subtext__bold">
                  {t("supplies.tab4.subTabs.subTab1.title4")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab1.text3")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab1.text4")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab1.text5")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab1.text6")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab1.text7")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab1.text8")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext">
                      {t("supplies.tab4.subTabs.subTab1.text9")}
                    </p>
                  </li>
                </ul>

                <h3 className="supplies__card-subtext subtext__bold">
                  {t("supplies.tab4.subTabs.subTab1.title5")}
                </h3>
                <p className="supplies__card-subtext ">
                  {t("supplies.tab4.subTabs.subTab1.text10")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <img
                src={IMG13}
                alt="image of tab category"
                className="supplies__card-img"
              />
            </div>
          )}
          {activeSubTab === "container" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab4.subTabs.subTab2.text")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab2.title")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab2.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab2.title1")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab2.text2")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab4.subTabs.subTab2.title2")}
                </h2>
                <p className="supplies__card-text ">
                  {t("supplies.tab4.subTabs.subTab2.text3")}
                </p>

                <p className="supplies__card-text subtext__bold">
                  {t("supplies.tab4.subTabs.subTab2.title3")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab2.text4")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab2.text5")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext  subtext__glass">
                      {t("supplies.tab4.subTabs.subTab2.text6")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-subtext">
                      {t("supplies.tab4.subTabs.subTab2.text7")}
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab4.subTabs.subTab2.text8")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG14_MOB} 1x, ${IMG14_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG14} 1x, ${IMG14} 2x`} type="image/jpg" />
                <img
                  src={IMG14}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "provision" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab4.subTabs.subTab3.text")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab3.title")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab3.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab3.title1")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab3.text2")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab4.subTabs.subTab3.title2")}
                </h2>
                <p className="supplies__card-text">
                  {t("supplies.tab4.subTabs.subTab3.text3")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab3.title3")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab3.text4")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      {t("supplies.tab4.subTabs.subTab3.text5")}
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title4")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab3.text6")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title5")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab3.text7")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title6")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab3.text8")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title7")}
                      </span>
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title8")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab3.text9")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title9")}
                      </span>
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text ">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab3.title10")}
                      </span>
                    </p>
                  </li>
                </ul>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab4.subTabs.subTab3.text10")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG15_MOB} 1x, ${IMG15_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG15} 1x, ${IMG15} 2x`} type="image/jpg" />
                <img
                  src={IMG15}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
          {activeSubTab === "transportation" && (
            <div className="supplies__card">
              <div className="supplies__card-content">
                <p className="supplies__card-text">
                  {t("supplies.tab4.subTabs.subTab4.text")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab4.title")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab4.text1")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab4.title1")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab4.text2")}
                </p>
                <h2 className="supplies__card-title">
                  {t("supplies.tab4.subTabs.subTab4.title2")}
                </h2>

                <p className="supplies__card-subtext ">
                  {t("supplies.tab4.subTabs.subTab4.text3")}
                </p>

                <ul className="supplies__card-list">
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab4.title3")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab4.text4")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab4.title4")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab4.text5")}
                    </p>
                  </li>
                  <li className="supplies__card-item supplies__card-item--additional">
                    <p className="supplies__card-text subtext__glass">
                      <span className="supplies__card-subtext subtext__bold">
                        {t("supplies.tab4.subTabs.subTab4.title5")}
                      </span>
                      {t("supplies.tab4.subTabs.subTab4.text6")}
                    </p>
                  </li>
                </ul>
                <p className="supplies__card-text">
                  {t("supplies.tab4.subTabs.subTab3.text3")}
                  <span className="supplies__card-subtext subtext__bold">
                    {t("supplies.tab4.subTabs.subTab3.title3")}
                  </span>
                  {t("supplies.tab4.subTabs.subTab3.text4")}
                </p>

                <p className="supplies__card-subtext subtext__glass">
                  {t("supplies.tab4.subTabs.subTab4.title6")}
                </p>
                <p className="supplies__card-subtext ">
                  {t("supplies.tab4.subTabs.subTab4.text7")}
                </p>

                <p className="supplies__card-subtext subtext__glass">
                  {t("supplies.tab4.subTabs.subTab4.title7")}
                </p>
                <p className="supplies__card-subtext ">
                  {t("supplies.tab4.subTabs.subTab4.text8")}
                </p>

                <NavLink to="/contact" className="supplies__card-link">
                  {t("supplies.tab1.subTabs.subTab1.btn")}
                </NavLink>
              </div>
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={`${IMG16_MOB} 1x, ${IMG16_MOB} 2x`}
                  type="image/jpg"
                />
                <source srcSet={`${IMG16} 1x, ${IMG16} 2x`} type="image/jpg" />
                <img
                  src={IMG16}
                  alt="image of tab category"
                  className="supplies__card-img"
                />
              </picture>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Supplies
