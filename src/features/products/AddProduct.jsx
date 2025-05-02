import './AddProduct.css';
import { MdAddPhotoAlternate } from 'react-icons/md';
import React from 'react';

export const AddProduct = () => {
  return (
    <div className="addProduct-container">
      <div className="addProduct-header">
        <div>
          <h3>Category List</h3>
        </div>
      </div>
      <div className="addProduct-content">
        <div className="addProduct-uploadPhoto">
          <span>
            <MdAddPhotoAlternate fontSize="40px" />
          </span>
          <p>Upload Picture</p>
        </div>

        <div className="addProduct-form">
          <span className="InputBox">
            <label htmlFor="name">
              <p className="labelInput">Name *</p>
              <input
                type="text"
                id="name"
                className="addProduct-input"
                placeholder="Enter name"
              />
            </label>
          </span>

          <span className="InputBox">
            <label htmlFor="category">
              <p className="labelInput">Category *</p>
              <select
                type="text"
                id="category"
                className="addProduct-input"
                placeholder="Enter name"
              >
                <option value="...">...</option>
              </select>
            </label>
          </span>

          <span className="InputBox">
            <label htmlFor="price">
              <p className="labelInput">Price *</p>
              <input type="number" id="price" className="addProduct-input" />
            </label>
          </span>

          <span className="InputBox">
            <label htmlFor="productLevel">
              <p className="labelInput">Level *</p>
              <input
                type="number"
                id="productLevel"
                className="addProduct-input"
                placeholder="Enter order"
              />
            </label>
          </span>

          <span className="InputBox">
            <label htmlFor="description">
              <p className="labelInput">Description</p>
              <textarea
                rows="1"
                type="text"
                id="description"
                className="addProduct-input"
              />
            </label>
          </span>
        </div>

        <div className="addProduct-submit">
          <span>Add</span>
        </div>
      </div>
    </div>
  );
};
