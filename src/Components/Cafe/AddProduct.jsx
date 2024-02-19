import React, { useState } from "react";
import "./Styles/AddFood.css";
//import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import CafeNavbar from "./CafeNavbar";

const AddFood = () => {

  const [foodDetails, setFoodDetails] = useState({
    name: "",
    category_id: 0,
    price: "",
    description: "",
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFoodDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send a POST request to add food details to the database
        const response = await axios.post(
          "http://localhost:8086/products/product/register",
          foodDetails
        );
        console.log("Food added:", response.data);
        // Clear the form after successful submission if needed
        setFoodDetails({
          name: "",
          category_id: "",
          price: "",
          description: "",
        });
      } catch (error) {
        console.error("Error adding food:", error);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Validate name (only alphabets)
    if (!/^[a-zA-Z ]+$/.test(foodDetails.name)) {
      errors.name = "Name must contain only alphabets";
      valid = false;
    }

    // Validate price (integer only, maximum 5000)
    const price = parseInt(foodDetails.price);
    if (isNaN(price) || price < 0 || price > 5000) {
      errors.price = "Price must be an integer between 0 and 5000";
      valid = false;
    }

    // Validate category_id (not empty)
    if (!foodDetails.category_id) {
      errors.category_id = "Category is required";
      valid = false;
    }

    // Validate description (not empty)
    if (!foodDetails.description.trim()) {
      errors.description = "Description is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  return (
    <>
    <CafeNavbar/>
    <div style={{
   backgroundImage: `url("https://cdn.pixabay.com/photo/2020/03/13/04/01/breakfast-on-board-of-the-iron-4926867_1280.jpg")`,
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   minHeight: "90vh", // Ensure the background covers the entire viewport
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
}}>
    <div className="container mt-4 ">
      <div className="card cards">
      <div className="card-body">
      <h5 className="card-title">Add Item</h5>
      <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Item Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Item name"
                    value={foodDetails.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                <label htmlFor="description" className="form-label">Item Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    placeholder="Enter description"
                    rows="3" // Adjust rows as needed
                  ></textarea>
                   {errors.description && (
                    <div className="text-danger">{errors.description}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category_id"
                    placeholder="Enter category ID"
                    value={foodDetails.category_id}
                    onChange={handleChange}
                  />
                   {errors.category_id && (
                    <div className="text-danger">{errors.category_id}</div>
                  )}
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Item Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder="Enter price"
                    value={foodDetails.price}
                    onChange={handleChange}
                  />
                   {errors.price && (
                    <div className="text-danger">{errors.price}</div>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Select 1st Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="firstInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Select 2nd Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="secondInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Select 3rd Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="secondInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
            </div> */}
            <div>
                <div className="col">
                    <button>Submit</button>
                </div>
            </div>
          </form>

        </div>
    </div>
</div>
</div>
</>
        
        
  );
};

export default AddFood;
