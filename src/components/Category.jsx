import './Category.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryTable } from './CategoryTable';
import { FilterPanel } from './FilterPanel';

export const Category = () => {
  return (
    <div className='category-container'>
        <div className='category-header'>
            <div>
                <h3>Category List</h3>
            </div>
            <div>
                <Link to='/category/addCategory'><div className='addCategory'>Add Category</div></Link>
            </div>
        </div>

        <div className='category-filter'>
            <FilterPanel />
        </div>

        <div className='category-Table'>
            <CategoryTable />
        </div>
    </div>
  )
}
