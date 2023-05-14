import React from "react";

const Card = ({ card, onCardClick }) => {
   const handleClick = () => {
      onCardClick(card);
   };

   return (
      <li className="card" key={card._id}>
         <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
         <button type="button" className="card__button-deleted"></button>
         <div className="card__container">
            <h2 className="card__description">{card.name}</h2>
            <div className="card__like-area">
               <button type="button" className="card__button-like" aria-label="Like"></button>
               <p className="card__like-counter">{card.likes.length}</p>
            </div>
         </div>
      </li>
   );
}

export default Card;