import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <address>
            <div className="tel-box">
              <a href="tel:8-347-232-28-96">8-347-232-28-96</a>
            </div>
            <div className="mail-box">
              Электронная почта <br />
              <a href="mailto:myShop@mail.ru">myShop@mail.ru</a>
            </div>
            <div className="map-box">
              <a
                target="__blanc"
                href="https://yandex.ru/maps/67/tomsk/house/ulitsa_kotovskogo_14/bE0YfwFoTEYCQFtsfXh0dnVlYQ==/?ll=84.968852%2C56.457851&z=18.85"
              >
                Адрес: г.Томск, ул.Котовского 14
              </a>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
