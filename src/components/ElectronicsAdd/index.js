import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import { createNewElectronics } from "../../services/electronicsService";
import "./index.css";
import NavigationTop from "../AdminNavbar";
import { uploadImage } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const ElectronicsAdd = () => {
  const [image, setImage] = useState("");
  const [deviceData, setDeviceData] = useState({
    brand: "",
    cpu: "",
    gpu: "",
    model_name: "",
    operating_system: "",
    price: "",
    screen: "",
    screen_size: "",
    ram: "",
    quantity: "",
    drive: "",
    storage: "",
    weight: "",
    category: "Select Catgeory",
    reviews: [],
    quantity: 0,
    img1: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(deviceData);
    const storage = getStorage();
    if (image == null) return;
    const storageRef = ref(storage, deviceData.model_name);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded an image");
      getDownloadURL(ref(storage, deviceData.model_name)).then((url) => {
        deviceData.img1 = url;
        createNewElectronics(deviceData)
          .then((res) => res.json())
          .then((res) => {
            if (res["success"]) {
              setDeviceData({});
              alert("New device added.");
            }
          });
      });
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
      <div className="container">
        <br></br>
        <h2>Add New Electronics</h2>
        <form>
          <div class="form-group">
            <label for="name">Brand</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Brand"
              name="brand"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="name">Model Name</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Model Name"
              name="model_name"
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <label for="ram">RAM</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter RAM"
              name="ram"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="name">CPU</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter CPU"
              name="cpu"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="name">GPU</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter GPU"
              name="gpu"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="ram">Operating System</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Operating System"
              name="operating_system"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="ram">Screen</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Screen Details"
              name="screen"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="ram">Screen Size</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Screen Size"
              name="screen_size"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="ram">Weight</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Weight"
              name="weight"
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <label for="memory">Internal Memory</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Internal Memory Capacity"
              name="storage"
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
              placeholder="Enter Price"
              name="price"
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
            <select class="custom-select" onChange={onChange} name="category">
              <option>Select Category</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ElectronicsAdd;
