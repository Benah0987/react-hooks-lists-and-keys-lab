import React from "react";
//map to iterate over the links
//return an <a> element for each link
//pass a unique key to each element
function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((link, index) =>(
    <a key={index} href = {`#${link}`}>
      {link}
    </a>
  ))}
     


       </nav>;
}

export default NavBar;
