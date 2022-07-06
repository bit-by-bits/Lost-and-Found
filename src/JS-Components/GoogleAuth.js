import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function GoogleAuth() {
  const move = useNavigate();
  const check = /@pilani.bits-pilani.ac.in$/; // regex expression to be checked

  function manageResponse(res) {
    // 'res' is response sent by google, we use jwt_decode to decode its credentials into data we want, and then use its properties like email (to verify bits login) or user's picture to be displayed

    // so basically res.credential is the id token and data is its simplified version
    let data = jwt_decode(res.credential);

    // checking the regex for email
    if (check.test(data.email)) {
      move("/", { replace: true });
    }
  }

  useEffect(() => {
    /* global google */
    let temp = google.accounts.id;

    // initializing the button
    temp.initialize({
      client_id:
        "343336881297-4sgnm5e0514bcuj97qa64kf08ui6lvft.apps.googleusercontent.com",
      callback: manageResponse,
    });

    // rendering the button
    temp.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // returning the div back
  return <div id="signInDiv"></div>;
}

export default GoogleAuth;
