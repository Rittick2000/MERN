import React from 'react'
import Header from './components/Headers/Header'
import Footer from './components/Footers/Footers'
import { Outlet } from 'react-router-dom'
// React-router gives us this functionality where 
// energything execpt outlet will remains constant and outlate will change dynamically.

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout;