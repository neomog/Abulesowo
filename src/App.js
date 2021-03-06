import React, { useState } from "react";

// components --------------------------------------
import Home from "./components/pages/Home";
import Properties from "./components/pages/property/Properties";
import Lands from "./components/pages/land/Lands";
import Rents from "./components/pages/rent/Rents";
import LandDetails from "./components/pages/landdetails/LandDetails";
import PropertyDetails from "./components/pages/propertydetails/PropertyDetails";
import RentDetails from "./components/pages/rentdetails/RentDetails";
import RequestForm from "./components/pages/requestform/RequestForm";
import Consulting from "./components/pages/consulting/Consulting";
import Admin from "./admin/Admin";
import AdminDashboard from "./admin/AdminDashboard";
// import Register from "././admin/register/Register";
import Login from "./admin/login/Login";
import ProtectUser from "./protectUser";

// --------------------------------------------------
import Contact from "./components/pages/contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles  -------------------------------------------------
import "./fonts.css";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import data from "./db.json";

function App() {
  // console.log(data)

  // const [modalOpen, setModalOpen] = useState(false);

  // const toggleState = () => {
  //   setModalOpen(!modalOpen);
  // }

  const [adminDetails, setAdminDetails] = useState(
    JSON.parse(localStorage.getItem("admindetails"))
  );

  const [propsDetail, setPropsDetail] = useState(
    JSON.parse(localStorage.getItem("propsdetail"))
  );
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          {/* {modalOpen && ( <RequestForm modalOpen={modalOpen} onClose={toggleState} id="modal" />)} */}

          <Route exact path="/properties" component={Properties} />

          <Route path="/lands" component={Lands} />

          <Route path="/property-details" component={PropertyDetails} />

          <Route path="/land-details" component={LandDetails} />

          <Route path="/rents" component={Rents} />

          <Route path="/rent-details" component={RentDetails} />

          <Route path="/request-form" component={RequestForm} />

          <Route path="/consult-us" component={Consulting} />

          <Route path="/contact" component={Contact} />

          <Route path="/login" component={Login} />

          <Route path="/admin">
            <Admin adminDetails={adminDetails} propsDetail={propsDetail} />
          </Route>

          <Route path="/admin-dashboard">
            <AdminDashboard adminDetails={adminDetails} />
          </Route>

          {/* <ProtectUser path="/admin-dashboard" component={AdminDashboard} /> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
