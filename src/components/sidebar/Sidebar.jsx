import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sidebar/Sidebar.css'
import sidebarElementsData from './sidebarElData'

const Sidebar = () => {
  return (
    <>
        <Box width={'100%'} display={{base:'none', lg:'block'}}>
            <ul className='flex items-center justify-center gap-[3px] '>
               {
                sidebarElementsData.map((item) => (
                  <NavLink 
                    key={item.id} 
                    to={item.pathName} 
                    className="sidebar-link"
                  >
                    {item.title}
                  </NavLink>
                ))
               }                
            </ul>
        </Box>
    </>
  )
}

export default Sidebar;
