

function HelpForm () {
    return(
        <div className="HelpForm">
          <div className="otherhelpform"> 
           <div className="mb-7">
            <label for="exampleFormControlInput1" className="form-label"></label>
            <input type="text" className="form-control text-bg-light" id="exampleFormControlInput1" placeholder="Ваше ім’я"/>
           </div> 
           <div className="mb-7">
            <label for="exampleFormControlInput1" className="form-label"></label>
            <input type="email" className="form-control border-bottom text-bg-light" id="exampleFormControlInput2" placeholder="Email"/>
           </div>
           
           <div className="mb-2">
            <label for="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control text-bg-light" id="exampleFormControlTextarea1" rows="5" placeholder="Повідомлення"></textarea>
            <label for="exampleFormControlTextarea1" className="form-label ms-4">Не більше 500 символів</label>
           </div>

           <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"  />
              <label className="form-check-label" for="disabledFieldsetCheck">
                Я погоджуюся з політикою конфіденційності 
              </label>
            </div>
           </div>
           <button type="submit" className="btn btn-warning">Відправити форму</button>
           </div> 
        </div>
    

    );
}

export default HelpForm;