import './Products.css'
import { Link } from 'react-router-dom'
import { CategoryTable } from './CategoryTable';
import { FilterPanel } from './FilterPanel';
import React from 'react'

export const Products = () => {
  return (
    <div className='products-container'>
        <div className='products-header'>
            <div>
                <h3>Products List</h3>
            </div>
            <div>
                <Link to='/products/addProduct'><div className='addProduct'>Add Product</div></Link>
            </div>
        </div>
        <div className='products-filter'>
            <FilterPanel />
        </div>

        <div className='Category-Table'>
            <CategoryTable />
        </div>
    </div>
  )
}
