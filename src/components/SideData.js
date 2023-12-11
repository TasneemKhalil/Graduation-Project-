import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export const SideData = [
    {
      title: "Add Tasks",
    icone:<AddBoxIcon/>,
    link:"/AddTask"
      
  
   },
{
      title: "Inbox",
      icone:<InboxIcon/>,
      link:"/Inbox"
   
},
{
    title: "LogOut",
    icone:<ExitToAppIcon/>,
    link:"/"

 }

]