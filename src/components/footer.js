import React from "react";
import "../style/footer.scss";

export default function footer() {
  return (
    <div className="footer">
      <div className="max-content-width">
        <div className="footer-navbar">
          <div className="footer-navbar__item">Главная</div>
          <div className="footer-navbar__item">Каталог</div>
          <div className="footer-navbar__item">Поставщики</div>
          <div className="footer-navbar__item">коллекции</div>
          <div className="footer-navbar__item">Дегустация</div>
          <div className="footer-navbar__item">коллекция 2020</div>
          <div className="footer-navbar__item">Контакты</div>
        </div>
        <div className="footer-info">
          <div className="footer-info__item">Винный бутик le corte</div>
          <div className="footer-info__item">8 (812) 123-45-67</div>
          <div className="footer-info__item footer-info-social">
            <div className="footer-info-social__youtube"></div>
            <div className="footer-info-social__vk"></div>
            <div className="footer-info-social__facebook"></div>
          </div>
          <div className="footer-info__item">© le-corte.ru</div>
        </div>
      </div>
    </div>
  );
}
