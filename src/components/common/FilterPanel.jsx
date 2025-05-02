import './FilterPanel.css';
import React from 'react';
import { RiFilterLine } from 'react-icons/ri';
import { GoChevronDown } from 'react-icons/go';
import { RiFilterOffLine } from 'react-icons/ri';

export const FilterPanel = () => {
  return (
    <>
      <span className="filterBoxContainer">
        <div className="filterBox">
          <span>
            <RiFilterLine fontSize="12px" />
          </span>
        </div>
        <div className="filterBox">
          Base Category{' '}
          <span className="chevron">
            <GoChevronDown />
          </span>
        </div>
        <div className="filterBox">
          sub Category{' '}
          <span className="chevron">
            <GoChevronDown />
          </span>
        </div>
        <div className="filterBox">
          name{' '}
          <span className="chevron">
            <GoChevronDown />
          </span>
        </div>
        <div className="filterBox">
          Price{' '}
          <span className="chevron">
            <GoChevronDown />
          </span>
        </div>
        <div className="filterBox">
          <span>
            <RiFilterOffLine fontSize="12px" />
          </span>
        </div>
      </span>
    </>
  );
};
