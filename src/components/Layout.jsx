import './Layout.css'
import { Outlet } from 'react-router-dom';
import React from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'

export const Layout = () => {
  return (
    <div className='layout-container'>
        <div className="layout-sideBar">
            <SideBar />
        </div>
        <div className='layout-content'>
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-main">
              <Outlet />
            </div>
        </div>
    </div>
  )
}
