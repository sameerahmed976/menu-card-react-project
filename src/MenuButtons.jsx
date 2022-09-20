import React from "react";

const MenuButtons = ({ menuButtons, menuFilter }) => {
  return (
    <>
      <section className="menu__container">
        {menuButtons.map((item, index) => {
          return (
            <button
              key={index}
              className="btn menu__btn"
              onClick={() => {
                menuFilter(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default MenuButtons;
