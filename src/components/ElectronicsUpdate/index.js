import React from "react";
import AdminNavbar from "../AdminNavbar";
import ElectronicsList from "../ElectronicsList";
import NavigationTop from "../NavigationTop";

const ElectronicsUpdate = () => {
  return (
    <>
    <div className="container">
      <NavigationTop/>
      <br></br>
      <ElectronicsList/>
    </div>
    </>
  );
};

export default ElectronicsUpdate;
