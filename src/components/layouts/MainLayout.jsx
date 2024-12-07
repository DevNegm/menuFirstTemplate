import React, { useEffect } from 'react'
import classes from './MainLayout.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../main/Navbar'
import { LanguageProvider } from '../../context/LanguageContext'
const MainLayout = () => {
  const location = useLocation()
  useEffect(() => {
    const handleNavigation = () => {
        window.scrollTo(0, 0); 
    };
    handleNavigation(); 
}, [location]); 
  return (
    <LanguageProvider>
    <main className={classes.main}>
        <Navbar/>
        <Outlet/>
    </main>
    </LanguageProvider>
  )
}

export default MainLayout
