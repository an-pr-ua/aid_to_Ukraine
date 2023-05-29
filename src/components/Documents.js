function Documents() {
  return (
    <div className="Documents">
      <h1>Документація та звітність</h1>
      <div className="documents-main">
        <div className="documents-row1">
          <a href="">
            <img
              src="https://an-pr-ua.github.io/aid_to_Ukraine/images/button_default.png"
              alt="button-statut"
            />
          </a>
          <a href="">
            <img src="images/button default (2).png" alt="button default" />
          </a>
        </div>
        <div className="documents-row2">
          <img id="card" src="images/Card.png" alt="button default" />
          <div className="documents-colomn">
            <a href="">
              <img src="images/button default (3).png" alt="button default" />
            </a>
            <br />
            <a href="">
              <img src="images/button default (4).png" alt="" />
            </a>
          </div>
        </div>
        <div className="documents-colomn2">
          <a href="">
            <img src="images/button default (5).png" alt="" />
          </a>
          <br />
          <a href="">
            <img src="images/button default (6).png" alt="" />
          </a>
        </div>
        <div className="documents-row3">
          <h4 id="documents-h4">
            Не знайшли потрібну
            <br /> інформацію?
          </h4>
          <a href="">
            <img
              id="documents-img"
              src="images/button default (7).png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Documents;
