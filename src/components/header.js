import React from "react";
import "../style/header.scss";

export default function header() {
  return (
    <div className="header__wrapper">
      <div className="max-content-width header">
        <div className="header-phone-menu">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Каталог</h5>
              <h5 class="text-white h4">Доставка</h5>
              <h5 class="text-white h4">Коллекции</h5>
              <h5 class="text-white h4">Контакты</h5>
              <br></br>
              <div className="text-white h6">
                Адресс: <a href="#">Новокузнечный переулок 4/1</a>
              </div>
              <div className="text-white h6">Контактный телефон: <a href="#">8 (812) 123-45-67</a></div>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </div>
        <div className="header-bar">
          <div className="header-bar__location">Новокузнечный переулок 4/1</div>
          <div className="header-bar__phone">8 (812) 123-45-67</div>
        </div>
        <div className="header-navbar">
          <div className="header-navbar__wrapper header-navbar__catalog">
            Каталог
          </div>
          <div className="header-navbar__wrapper header-navbar__delivery">
            Доставка
          </div>
          <div className="header-navbar__wrapper header-navbar__collection">
            Коллекции
          </div>
          <div className="header-navbar__wrapper header-navbar__contacts">
            Контакты
          </div>
        </div>
        <div className="header-buttons">
          <button className="header-buttons__button">Винная карта</button>
          <button className="header-buttons__button">Дегустация</button>
        </div>
      </div>
    </div>
  );
}
