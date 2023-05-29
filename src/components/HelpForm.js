

function HelpForm() {
 
  function formInHelpForm(e) {
  
   let a = document.getElementById("exampleFormControlInput1").value; 
    alert(a);
  }

  return (
    <div className="otherhelpform">
     <form  onSubmit={formInHelpForm}>
      <div className="form-floating mb-7">
        <input
          type="text"
          className="form-control text-bg-light"
          id="exampleFormControlInput1"
          placeholder="Ваше ім’я"
          required
          pattern="[a-zA-ZА-Яа-я]*"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Ваше ім’я
        </label>
      </div>
      <div className="form-floating mb-7">
        <input
          type="email"
          className="form-control border-bottom text-bg-light"
          id="exampleFormControlInput2"
          placeholder="Email"
          required
        />
        <label for="exampleFormControlInput2" className="form-label">
          Email
        </label>
      </div>

      <div className="form-floating mb-1">
        <textarea
          className="form-control text-bg-light"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Повідомлення"
          required
        ></textarea>
        <label for="exampleFormControlTextarea1" className="form-label">
          Повідомлення
        </label>
      </div>
      <label for="exampleFormControlTextarea1" className="form-label ms-4">
        Не більше 500 символів
      </label>

      <div className="mb-5">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="disabledFieldsetCheck"
          />
          <label className="form-check-label" for="disabledFieldsetCheck">
            Я погоджуюся з політикою конфіденційності
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-warning">
        Відправити форму
      </button>
      </form>
    </div>
  );
}

export default HelpForm;
