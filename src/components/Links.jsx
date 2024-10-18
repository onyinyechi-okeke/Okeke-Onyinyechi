import { useState } from "react";
import { Link } from "react-router-dom";

function Links({style}) {
    const links= [
        {id: 1, link: 'Home'},
        {id: 2, link: 'About Us'},
        {id: 3, link: 'Gallery'},
        {id: 4, link: 'Contact Us'},
    ]

    const [activeLink, setActiveLink] = useState("Home");

    const handleLinkClick = (link) => {
        setActiveLink(link); 
      }
  return (
    <div className={` ${style} gap-[30px]`}>
        {links.map(({id, link}) =>(
            <Link key={id} to='/Home' className={`text-[24px] font-[600] transition-colors duration-500 ease-in-out ${activeLink === link ? 'text-primary' : 'text-black'}`}
            onClick={() => handleLinkClick(link)}>
                {link}
            </Link>
        ))}
     </div>
  )
}

export default Links