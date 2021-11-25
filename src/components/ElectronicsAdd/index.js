import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import { createNewElectronics } from "../../services/electronicsService";

const ElectronicsAdd = () => {
  const [deviceData, setDeviceData] = useState({
    name: "",
    ram: "",
    quantity: "",
    drive: "",
    category: "Select Catgeory",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(deviceData);
    createNewElectronics(deviceData)
      .then((res) => res.json())
      .then((res) => {
        if (res["success"]) {
          setDeviceData({});
        }
      });
  };

  const onChange = (event) => {
    const newDeviceData = {
      ...deviceData,
      [event.target.name]: event.target.value,
    };
    console.log(newDeviceData);
    setDeviceData(newDeviceData);
  };

  return (
    <>
      <AdminNavbar />
      <h2>Add New Electronics</h2>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            name="name"
            onChange={onChange}
          />
        </div>
        <div class="form-group">
          <label for="ram">RAM</label>
          <input
            type="text"
            class="form-control"
            placeholder="RAM"
            name="ram"
            onChange={onChange}
          />
        </div>
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Quantity of Units"
            name="quantity"
            onChange={onChange}
          />
        </div>
        <div class="form-group">
          <label for="memory">Internal Memory</label>
          <input
            type="text"
            class="form-control"
            placeholder="Memory Capacity"
            name="memory"
            onChange={onChange}
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="drive"
            id="hdd"
            value="hdd"
            onChange={onChange}
          />
          <label class="form-check-label" for="hdd">
            Hard Disk Drive
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="drive"
            id="ssd"
            value="ssd"
            onChange={onChange}
          />
          <label class="form-check-label" for="ssd">
            Solid State Drive
          </label>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="text"
            class="form-control"
            placeholder="Price"
            name="price"
            onChange={onChange}
          />
        </div>
        <div class="form-group">
          <select class="custom-select" onChange={onChange} name="category">
            <option>Select Category</option>
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ElectronicsAdd;
