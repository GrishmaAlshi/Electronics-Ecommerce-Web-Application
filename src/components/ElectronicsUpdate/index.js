import React from "react";
import AdminNavbar from "../AdminNavbar";
import ElectronicsList from "../ElectronicsList";

const ElectronicsUpdate = () => {
  return (
    <>
    <div className="container">
      <AdminNavbar selected={"update"}/>
      <br></br>
      <ElectronicsList/>
    </div>
    </>
  );
};

export default ElectronicsUpdate;
