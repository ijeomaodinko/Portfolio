import './sidebar.css';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist } from "react-icons/fa";
import { Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";

function Sidebar() {
  return (
    <div className="i">
    <ProSidebarProvider  id="headersi">
    <Menu iconShape="square">
    <div className="contact">
    <MenuItem>
    <a href="https://twitter.com/pureblog0">
       < FaTwitter size={29} style={{ color: "#fff", marginRight:"1.9rem"}} />
       </a>
   </MenuItem>
   <MenuItem>
   <a href="https://www.linkedin.com/in/ijeoma-odinko/">
       < FaLinkedin size={29} style={{ color: "#fff", marginRight:"1.9rem"}} />
    </a>
   </MenuItem>
   <MenuItem>
   <a href="https://github.com/ijeomaodinko/">
       < FaGithub size={29} style={{ color: "#fff", marginRight:"1.9rem"}} />
   </a>
   </MenuItem>
   <MenuItem>
   <a href="https://medium.com/@estherlinei">
       < FaMedium size={29} style={{ color: "#fff", marginRight:"1.9rem"}} />
   </a>
   </MenuItem>
   <MenuItem>
    <a href="https://www.linkedin.com/in/ijeoma-odinko/">
       < FaAngellist size={29} style={{ color: "#fff"}} />
       </a>
   </MenuItem>

</div>
</Menu>
</ProSidebarProvider>
</div>
  );
}

export default Sidebar;