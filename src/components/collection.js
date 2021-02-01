import React from "react";
import Wines from "./wines";
import "../style/collection.scss";

export default function collection() {
  return (
    <div className="collection">
      <div className="max-content-width">
        <div className="collection-container">
          <hr className="ollection-container__line"></hr>
          <div className="collection-container-elements">
            <div className="collection-container-elements-info">
              <div className="collection-container-elements-info__title">
                Новинки коллекций
              </div>
              <div className="collection-container-elements-info__name">
                Март 1980<br></br> Урожай Марселя
              </div>
              <hr className="collection-container-elements-info__line"></hr>
              <div className="collection-container-elements-info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                enim tortor in hac id imperdiet adipiscing. Pellentesque nisi,
                mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
              </div>
              <div className="collection-container-elements-info-wines">
                <Wines
                  check={true}
                  year={"1980"}
                  name={"Colli Euganei Bianco Ca' Lustra 1980"}
                  info={"Красочная бутылка вина из Марселя"}
                />
                <Wines
                  year={"1980"}
                  name={"Colli Euganei Bianco Ca' Lustra 1980"}
                  info={"Красочная бутылка вина из Марселя"}
                />
                <Wines
                  year={"1980"}
                  name={"Colli Euganei Bianco Ca' Lustra 1980"}
                  info={"Красочная бутылка вина из Марселя"}
                />
              </div>
              <div className="collection-container-elements-info__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                enim tortor in hac id imperdiet adipiscing. Pellentesque nisi,
                mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
              </div>
              <button className="collection-container-elements-info__button">
                узнать подробнее
              </button>
            </div>
            <div className="collection-container-elements-pictures">
              <div className="collection-container-elements-pictures__first"></div>
              <div className="collection-container-elements-pictures__second"></div>
              <div className="collection-container-elements-pictures__third"></div>
            </div>
          </div>
          <hr className="ollection-container__line"></hr>
        </div>
      </div>
    </div>
  );
}
