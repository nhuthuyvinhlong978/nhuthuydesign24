import React from "react";
import HomeScreens from "../Screens/Home/Screens/HomeScreens";
import { Link } from "react-router-dom";
const Navigation = () => {
    const navLinkStyle = { color: 'white' }
    return ( <
        nav >

        <
        img src = "https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png"
        width = "80px" / >
        <ul className = 'nav-link' >
        <li > <Link style = { navLinkStyle } > Lịch Khai giảng </Link></li >
        <li > <a href = "/design"style = { navLinkStyle } > Đồ họa chuyên nghiệp </a></li >
        <li > <a href = "/short"style = { navLinkStyle } > Khóa ngắn hạn </a></li >
        <li > <a href = "/long"style = { navLinkStyle } > Khóa dài hạn </a></li >
        </ul>
 </nav>
    )
}

export default Navigation