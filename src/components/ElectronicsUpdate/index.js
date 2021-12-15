import React from "react";
import AdminNavbar from "../AdminNavbar";
import ElectronicsList from "../ElectronicsList";
import NavigationTop from "../AdminNavbar";

const ElectronicsUpdate = () => {
  return (
    <>
    <AdminNavbar/>
    <div className="container">
      <br></br>
      <ElectronicsList/>
    </div>
    </>
  );
};

export default ElectronicsUpdate;