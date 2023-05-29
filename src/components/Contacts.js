import HelpForm from "./HelpForm";

function Contacts() {
  return (
    <div className="Contacts">
      <h1 id="contacts">Контакти</h1>
      <div className="contacts-img">
        <div className="contacts-img-left">
          <img
            id="winter"
            src="https://an-pr-ua.github.io/aid_to_Ukraine/images/tel.png"
            alt="foto winter"
          />
          <p className="contacts-text-bold">Адреса</p>
          <p className="contacts-text-normal">м. Харків, вул. Повздовжня, 4</p>
          <p className="contacts-text-bold">Контактний номер</p>
          <p className="contacts-text-normal">+380 (96) 052 72 91</p>
          <p className="contacts-text-bold">Email</p>
          <p className="contacts-text-normal">3232605@gmail.com</p>
          <div className="contacts-block-logo">
            <a href="">
              <img
                src="https://an-pr-ua.github.io/aid_to_Ukraine/images/Group.png"
                alt="fb-logo"
              />
            </a>
            <a href="">
              <img
                src="https://an-pr-ua.github.io/aid_to_Ukraine/images/Group1.png"
                alt="inst-logo"
              />
            </a>
            <a href="">
              <img
                src="https://an-pr-ua.github.io/aid_to_Ukraine/images/Vector (2).png"
                alt="twit-logo"
              />
            </a>
            <a href="">
              <img
                src="https://an-pr-ua.github.io/aid_to_Ukraine/images/Vector4.png"
                alt="tel-logo"
              />
            </a>
          </div>
        </div>
        <div className="contacts-img-right">
          <a href="">
            <img
              id="map"
              src="https://an-pr-ua.github.io/aid_to_Ukraine/images/Screenshot.png"
              alt="map"
            />
          </a>
        </div>
      </div>
      <div className="contacts-form">
        <div className="contacts-form-left">
          <h1>Запит на додаткову нформацію</h1>
          <p>
            Якщо ви не знайшли інформацію, яка вас цікавить, заповніть, будь
            ласка, форму праворуч. Ми надішлемо відповідь на вашу електронну
            пошту.
          </p>
        </div>
        <div className="contacts-form-right">
          <HelpForm />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
