import React from "react";
import "../CSS-Components/LNF.css";

function LNF(props) {
  return (
    <div className="lnf" id="lnf">
      {/* form for both lost and found */}
      <form action="">
        {/* item name */}
        <div className="lnf-form-div">
          <label htmlFor="">Item's Name</label>
          <input type="text" />
        </div>

        {/* location */}
        <div className="lnf-form-div">
          {/* input label acc to lost or found */}
          <label htmlFor="">
            {props.l_or_f === "l" ? "Last Seen At" : "Found At"}
          </label>
          <input type="text" name="" id="" />
        </div>

        {/* user name */}
        <div className="lnf-form-div">
          <label htmlFor="">Your Name</label>
          <input type="text" />
        </div>

        {/* hostel */}
        <div className="lnf-form-div">
          <label htmlFor="">Hostel and Room No</label>
          <input type="text" />
        </div>

        {/* contact */}
        <div className="lnf-form-div">
          <label htmlFor="">Contact No.</label>
          <input type="number" />
        </div>
      </form>
    </div>
  );
}

export default LNF;
