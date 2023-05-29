




function DonatsButtonTop(){
    return (

   <div className="page3-button-top">
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
         <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
         <label className="btn btn-outline-secondary text-dark" id="chek11" for="btnradio1">UAH</label>

         <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked />
         <label className="btn btn-outline-secondary text-dark" for="btnradio2">USD</label>

         <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked />
         <label className="btn btn-outline-secondary text-dark" id="chek22" for="btnradio3">EUR</label>
      </div>
   </div>
   
    )
    }

    export default DonatsButtonTop;