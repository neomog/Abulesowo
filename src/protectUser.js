import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAlert } from "react-alert";
// import toast from 'toasted-notes'
const protectUser = ({ component: Component, ...rest }) => {
  //   const alert = useAlert()

  // function systemalert(msg){
  //   alert.show(msg)
  // }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("usertoken")) {
          console.log("logged in");
          return <Component {...props} />;
        } else {
          console.log("not logged in");
          localStorage.setItem(
            "alert",
            "Unauthorized access, please login or sign up"
          );
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default protectUser;
