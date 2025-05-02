import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Category } from '../features/categories/Category';
import { AddCategory } from '../features/categories/AddCategory';
import { SignIn } from '../features/auth/SignIn';
import { Error } from '../components/common/Error';
import { Dashboard } from '../features/dashboard/Dashboard';
import { Products } from '../features/products/Products';
import { AddProduct } from '../features/products/AddProduct';
import { EditCategory } from '../features/categories/EditCategory';
import { SignUp } from '../features/auth/SignUp';
import { ProtectedRoute } from './ProtectedRoute';
import { PriceList } from '../features/priceList/PriceList';

export const Routing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/signIn"
          element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route element={<Error />} /> */}
        <Route path="*" element={<Error />} />

        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/addCategory" element={<AddCategory />} />
          <Route path="/category/edit" element={<EditCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/addProduct" element={<AddProduct />} />
          <Route path="/products/edit" element={<AddProduct />} />
          <Route path="/priceList" element={<PriceList />} />
        </Route>
      </Routes>
    </>
  );
};
