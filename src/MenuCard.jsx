import React from "react";

const MenuCard = ({ img, price, title, desc }) => {
  return (
    <>
      <article className="Card">
        <img src={img} alt="card__image" className="card__image" />
        <article className="card__content">
          <article className="card__heading">
            <h2 className="card__title">{title}</h2>
            <p className="card__price">₹{price}</p>
          </article>
          <p className="card__desc">{desc}</p>
        </article>
      </article>
    </>
  );
};

export default MenuCard;
