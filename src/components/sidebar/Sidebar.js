//import useState hook to create menu collapse state
import React, { useState } from 'react'

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar'

//import icons from react icons
import { FaList, FaRegHeart } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiPencilLine } from 'react-icons/ri'
import { BiCog } from 'react-icons/bi'
import {
   AiOutlineHome,
   AiOutlineSetting,
   AiOutlineQuestionCircle
} from 'react-icons/ai'
import { MdInsertChartOutlined } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import { FaUsersCog } from 'react-icons/fa'

import 'react-pro-sidebar/dist/css/styles.css'
import './sidebar.css'

const Sidebar = ({ menuCollapse }) => {
   return (
      <>
         <div id="header">
            <ProSidebar collapsed={menuCollapse}>
               <SidebarContent>
                  <Menu>
                     <MenuItem
                        active={true}
                        icon={
                           <AiOutlineHome className="sidebar-icon  active-menu" />
                        }
                     >
                        Home
                     </MenuItem>
                     <MenuItem
                        icon={
                           <MdInsertChartOutlined className="sidebar-icon" />
                        }
                     >
                        Analytics
                     </MenuItem>
                     <MenuItem icon={<CgNotes className="sidebar-icon" />}>
                        My Campaigns
                     </MenuItem>
                     <MenuItem icon={<FaUsersCog className="sidebar-icon" />}>
                        Profile
                     </MenuItem>
                     <MenuItem
                        icon={<AiOutlineSetting className="sidebar-icon" />}
                     >
                        Settings
                     </MenuItem>
                     <MenuItem
                        icon={
                           <AiOutlineQuestionCircle className="sidebar-icon" />
                        }
                     >
                        Help & Support
                     </MenuItem>
                     <MenuItem icon={<FiLogOut className="sidebar-icon" />}>
                        Log Out
                     </MenuItem>
                  </Menu>
               </SidebarContent>
            </ProSidebar>
         </div>
      </>
   )
}

export default Sidebar