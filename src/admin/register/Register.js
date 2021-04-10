import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [list, setList] = useState([]);

  axios.get("http://api.abulesowo.ng").then((res) => {
    if (res.data.response === "06") {
      console.log(res.data);
      setList(res.data);
    }
  });

  return <div>{list}</div>;
};

export default Register;
