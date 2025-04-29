import './SideBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { VscDashboard } from 'react-icons/vsc';
import { TbCategoryPlus } from 'react-icons/tb';
import { TfiMenuAlt } from 'react-icons/tfi';
import { BsTable } from 'react-icons/bs';
import { IoPricetagsOutline } from 'react-icons/io5';

export const SideBar = () => {
  return (
    <div className="sideBar-container">
      <div className="sideBar-title">
        <h3>
          <span>Admin</span> Panel
        </h3>
      </div>
      <div className="sideBar-items">
        <ul>
          <Link to="/">
            <li>
              <span className="item-icon">
                <VscDashboard />
              </span>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/category">
            <li>
              <span className="item-icon">
                <TbCategoryPlus />
              </span>
              <span>Category</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <span className="item-icon">
                <TfiMenuAlt />
              </span>
              <span>Products</span>
            </li>
          </Link>
          <Link to="/table">
            <li>
              <span className="item-icon">
                <BsTable />
              </span>
              <span>Table</span>
            </li>
          </Link>
          <Link to="/priceList">
            <li>
              <span className="item-icon">
                <IoPricetagsOutline />
              </span>
              <span>Price List</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
