import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";

function GoogleAuth() {
  const [lnf_client, setLnf_client] = useState({});

  function manageResponse(res) {
    let data = jwt_decode(res.credential);

    setLnf_client(data);
    console.log(data);
  }

  useEffect(() => {
    /* global google */
    let temp = google.accounts.id;

    temp.initialize({
      client_id:
        "343336881297-4sgnm5e0514bcuj97qa64kf08ui6lvft.apps.googleusercontent.com",
      callback: manageResponse,
    });

    temp.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div id="signInDiv"></div>;
}

export default GoogleAuth;
