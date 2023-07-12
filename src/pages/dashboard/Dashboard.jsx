import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import { Box, Flex } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import Homepage from '../../components/HomePage'
import { Outlet } from 'react-router-dom'



const Dashboard = () => {
  return (
    <DashboardLayout title={Outlet.title} >
      <Outlet/>
    </DashboardLayout>
  ) 
}

export default Dashboard