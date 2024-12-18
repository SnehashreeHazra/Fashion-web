import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer2 from '../components/Footer2/Footer2'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer2 />
    </>
  )
}

export default MainLayout
