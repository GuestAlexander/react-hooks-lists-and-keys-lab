import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const factors=links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ))

  return <nav>{factors}</nav>;
}

export default NavBar;
