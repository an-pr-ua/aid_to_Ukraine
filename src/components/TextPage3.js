import DonatsButtonTop from "./DonatsButtonTop";
import DonatsButtonBottom from "./DonatsButtonBottom";
import DonatsPay from "./DonatsPay";

function TextPage3(){
   return(
<div className="textpage3">
 <div className="page3-text">
 <h2>Як ви можете допомогти?</h2>
 <p>Підтримати нас можна кількома способами, ми будемо вдячні за будь-яку допомогу. Це зробить нашу роботу кращою та ефективнішою.</p>
</div>
<div className="page3-main">
 <div className="page3-main-text">
   <h4>Ви можете зробити донат</h4>
   <p>Ви врятуєте майбутнє.</p>
   <p>Обстріли над головою, руйнування житла, втрата роботи, зачинені магазини та аптеки.</p>
   <p>Зруйновані плани на майбутнє та маленькі діти на руках.</p>
   <p>Старі люди, які не можуть поїхати, та неймовірна кількість тварин, що опинилася на вулиці.</p>
   <p>Ви можете допомогти їм зробивши донат:</p> 
   <DonatsButtonTop/>
   <DonatsButtonBottom/>
   <DonatsPay/>
 </div>
 <div className="page3-icon">
   <img src="images/Photo 1 (2).png"/>
 </div>
</div>
</div>
)
}

export default TextPage3;