import Slider1Block from "./Slider1Block";
import Slider2Block from "./Slider2Block";
import Slider3Block from "./Slider3Block";

function SuccessfulStories() {
    return(
        <div className="SuccessfulStories">
        <div className="slidersblock">
          <div className="slider-block  scale">
            <Slider1Block />
            <h4 className="successfulstoriesh4">Подарунки для дітей</h4>
            <p>
              Наш фонд збирає подарунки та товари для дітей з деокупованих
              територій - солодощі, канцтовари, іграшки, сезонний одяг та
              взуття.
            </p>
            <p>20 січня 2023</p>
          </div>
          <div className="slider-block scale">
            <Slider2Block />
            <h4 className="successfulstoriesh4">Видачу корму для людей, що прихистили безпритульних тварин</h4>
            <p>
              Ми регулярно закуповуємо корм і передаємо його родинам та міні
              притулкам, які дали прихисток безпритульним тваринам.
            </p>
            <p>9 січня 2023</p>
          </div>
          <div className="slider-block scale">
            <Slider3Block />
            <h4 className="successfulstoriesh4">Допомога маломобільним людям</h4>
            <p>
              Наш команда разом із ГО “Фенікс13” передали ходунки для Тамари -
              літньої мешканки міста Куп’янськ. Це місто та його жителі
              постраждали і щодня продовжують страждати від російської
              військової агресії.
            </p>
            <p>28 листопада 2022</p>
          </div>
        </div>
        </div>
    )
    
}

export default SuccessfulStories;