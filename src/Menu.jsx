import React from "react";
import MenuCard from "./MenuCard";

const Menu = ({ menu }) => {
  return (
    <>
      <section className="menu__Container--card">
        {menu.map((item) => {
          return <MenuCard {...item} key={item.id} />;
        })}
      </section>
    </>
  );
};

export default Menu;
