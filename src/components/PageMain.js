import BankEur from "./BankEur";
import BankUah from "./BankUah";
import BankUsd from "./BankUsd";
import OtherHelp from "./OtherHelp";
import OtherHelpForm from "./OtherHelpForm";
import OurHelp from "./OurHelp";
import Slider from "./Slider";
import TextPage3 from "./TextPage3";
import Page2Card from "./Page2Card";
import SuccessfulStories from "./SuccessfulStories";

function PageMain() {
  return (
    <div className="PageMain">
      <div className="page-main">
        <div className="page-main-text">
          <h1>Допоможіть постраждалим від війни</h1>
          <div className="p-page-main-text">
            <p>
              Війна застала нас у рідному Харкові. Ми на власні очі бачимо
              страждання та біль людей. Тому, ми створили благодійний фонд
              “A-ХЕЛП УКРАЇНА” і тепер допомогаємо людям.
            </p>
            <p>Долучайся і ти.</p>
          </div>
          <a href="">
           
            <img
              className="button-main-text"
              src="images/state-layer.png"
              alt="button text"
            />
           
          </a>
        </div>
        <Slider />
      </div>
      <div className="page2">
        <div className="page2-main-text">
          <h2>Поточні потреби</h2>
          <p>Зараз для нас є важливим закриття 4 найважливіших потреб:</p>
        </div>
        <Page2Card />
        <a href="">
          <img src="images/state-layer (1).png" />
        </a>
      </div>

      <div className="page3">
        <TextPage3 />
      </div>

      <div className="page4">
        <h4>Банківський платіж за реквізитами</h4>
        <div className="page4-bank">
          <BankUah />
          <BankEur />
          <BankUsd />
        </div>
      </div>
      <div className="page5">
        <OtherHelp />
        <OtherHelpForm />
      </div>
      <div className="page6">
        <h2>Наша допомога у цифрах</h2>
        <OurHelp />
      </div>
      <div className="page7">
      <h2>Успішні історії</h2>
        <p>
          Хочемо поділитися історіями, в яких допомога знайшла своїх адресатів.
          Прагнемо, щоб таких історій було якомога більше.
        </p>
        < SuccessfulStories/>
        <a href="">
          <img
            className="all-succes"
            src="images/state-layer (7).png"
            alt="button-all-succes"
          />
        </a>
     
      </div>
    
    </div>
  );
}
export default PageMain;
