

function DonatsButtonBottom(){
    return (
        <div className="page3-button-bottom">
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
          <label className="btn btn-outline-secondary text-dark" id="chek1" for="btncheck1">100</label>
        
          <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
          <label className="btn btn-outline-secondary text-dark" for="btncheck2">200</label>
        
          <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
          <label className="btn btn-outline-secondary text-dark" id="chek2" for="btncheck3">500</label>
        </div>
      </div>
    )
}
export default DonatsButtonBottom;