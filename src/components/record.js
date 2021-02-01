import React from "react";
import "../style/record.scss";

export default function record() {
  return (
    <div className="record">
      <div className="max-content-width">
        <div className="record-container">
          <div className="record-container__title">Запись на дегустацию</div>
          <div className="record-container__first"></div>
          <div className="record-container__second"></div>
          <hr className="record-container__line"></hr>
          <div className="record-container__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum.
          </div>
          <form>
            <div className="record-container-customer">
              <input
                className="record-container-customer__input record-container-customer__name"
                placeholder="Имя"
              ></input>
              <input
                className="record-container-customer__input record-container-customer__phone"
                placeholder="Телефон"
              ></input>
              <input
                className="record-container-customer__input record-container-customer__place"
                placeholder="Бутик на Невском 103"
              ></input>
            </div>
            <button className="record-container__button">Записаться</button>
          </form>
        </div>
      </div>
    </div>
  );
}
