import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function GoogleAuth() {
  // regex expression to be checked
  const check = /@pilani.bits-pilani.ac.in$/;

  // initializing useNavigate
  const move = useNavigate();

  function manageResponse(res) {
    // 'res' is response sent by google, we use jwt_decode to decode its credentials into data we want, and then use its properties like email (to verify bits login) or user's picture to be displayed

    let data = jwt_decode(res.credential);
    if (check.test(data.email)) move("/", { replace: true });
  }

  useEffect(() => {
    /* global google */
    let temp = google.accounts.id;

    // Initializing the button's functions
    temp.initialize({
      client_id:
        "343336881297-4sgnm5e0514bcuj97qa64kf08ui6lvft.apps.googleusercontent.com",
      callback: manageResponse,
    });

    // Rendering the button
    temp.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div id="signInDiv"></div>;
}

export default GoogleAuth;
