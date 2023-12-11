import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SideBarData = [
   // {
   //    title: "Home",
   //    icone:<HomeIcon/>,
   //    link:"/Home"
  
   // },
   // {
   //    title: "Profile",
   //    icone:<PersonIcon/>,
   //    link:"/Profile"
  
   // },
 {
    title: "Add Subjects",
    icone:<AddBoxIcon/>,
    link:"/AddSub"

 },
  {
      title: "Posts",
      icone:<AllInboxIcon/>,
      link:"/Post"
  
   },

    {
      title: "Comments",
      icone:<ChatBubbleIcon/>,
      link:"/Comment"
  
   },

 {
    title: "LogOut",
    icone:<ExitToAppIcon/>,
    link:"/"

 }




] 