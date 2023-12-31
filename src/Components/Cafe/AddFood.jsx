import React from "react";
import "./AddFood.css";
import { Container, Row, Col, Form } from "react-bootstrap";

const AddFood = () => {
  return (
    <div className="container mt-4 ">
      <div className="card cards">
      <div className="card-body">
      <h5 className="card-title">Add Food</h5>
      <form>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Food Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                <label htmlFor="description" className="form-label">Food Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    placeholder="Enter description"
                    rows="3" // Adjust rows as needed
                  ></textarea>
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
                    id="firstInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Food Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="secondInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
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
            </div>
            <div>
                <div className="col">
                    <button>Submit</button>
                </div>
            </div>
          </form>

        </div>
    </div>
</div>
      
        
        
  );
};

export default AddFood;
