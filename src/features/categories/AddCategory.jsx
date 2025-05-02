import './AddCategory.css';
import React from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { useState } from 'react';

export const AddCategory = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = event => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="addCategory-container">
      <div className="addCategory-header">
        <div>
          <h3>Category List</h3>
        </div>
      </div>
      <div className="addCategory-content">
        <div className="addCategory-uploadPhoto">
          <span>
            <MdAddPhotoAlternate fontSize="40px" />
          </span>
          <p>Upload Picture</p>
        </div>

        <div className="addCategory-form">
          <span className="InputBox">
            <label htmlFor="name">
              <p className="labelInput">Name *</p>
              <input
                type="text"
                id="name"
                className="addCategory-input"
                placeholder="Enter name"
              />
            </label>
          </span>

          <span className="InputBox">
            <label htmlFor="categoryGroup">
              <p className="labelInput">Category *</p>
              <select
                type="text"
                id="categoryGroup"
                className="addCategory-input"
                placeholder="Enter name"
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option value="baseCategory">Base category</option>
                <option value="subCategory">sub category</option>
              </select>
            </label>
          </span>

          <span className="InputBox">
            <label htmlFor="categoryLevel">
              <p className="labelInput">Level *</p>
              <input
                type="number"
                id="categoryLevel"
                className="addCategory-input"
                placeholder="Enter order"
              />
            </label>
          </span>

          {selectedValue === 'subCategory' && (
            <span className="InputBox">
              <label htmlFor="category">
                <p className="labelInput">Base Category *</p>
                <select
                  type="text"
                  id="category"
                  className="addCategory-input"
                  placeholder="Enter name"
                >
                  <option value="Base category 1">Base category 1</option>
                  <option value="Base category 2">Base category 2</option>
                </select>
              </label>
            </span>
          )}
        </div>

        <div className="addCategory-submit">
          <span>Add</span>
        </div>
      </div>
    </div>
  );
};
