import './CategoryTable.css';
import React from 'react';
import { EditBox } from '../../components/common/EditBox';

export const CategoryTable = () => {
  return (
    <div className="categoryTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>
              <EditBox />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>
              <EditBox />
            </td>
          </tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>
            <EditBox />
          </td>
        </tbody>
      </table>
    </div>
  );
};
