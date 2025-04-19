import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import {Category} from './components/Category'
import { Table } from './components/Table'
import { AddCategory } from './components/AddCategory'
import { SignIn } from './components/SignIn'
import { Error } from './components/Error'
import { Dashboard } from './components/Dashboard'
import { Products } from './components/Products'
import { AddProduct } from './components/AddProduct'
import { EditProduct } from './components/EditProduct'
import { EditCategory } from './components/EditCategory'
import { CreateAdmin } from './components/CreateAdmin'

export const Routing = () => {
  return (
    <>
        <Routes>
            
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/createAdmin' element={<CreateAdmin />} />
            <Route element={<Error />} />
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<Dashboard />} /> 
                <Route path='/category' element={<Category />} />
                <Route path='/category/addCategory' element={<AddCategory />} />
                <Route path='/category/edit' element={<EditCategory />} /> 
                <Route path='/products' element={<Products />} /> 
                <Route path='/products/addProduct' element={<AddProduct />} />
                <Route path='/products/edit' element={<AddProduct />} /> 
                <Route path='/table' element={<Table />} />
            </Route>
        </Routes>
    </>
  )
}
