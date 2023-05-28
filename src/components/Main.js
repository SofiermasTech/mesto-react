import React, { useEffect, useState, useContext } from 'react';
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
   const currentUser = useContext(CurrentUserContext);
   const { name, about, avatar } = currentUser;
   const [cards, setCards] = useState([]);

   useEffect(() => {
      api
         .getInitialCards()
         .then((data) => {
            setCards(data);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }, []);

   function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isLiked = card.likes.some((i) => i._id === currentUser._id);

      // Отправляем запрос в API и получаем обновлённые данные карточки
      api
         .changeLikeCardStatus(card._id, !isLiked)
         .then((newCard) => {
            setCards((state) =>
               state.map((c) => (c._id === card._id ? newCard : c))
            );
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }

   function handleCardDelete(cardId) {
      api.deleteCard(cardId)
         .then(() => {
            setCards((cards) => cards.filter(card => card._id !== cardId));
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   };

   return (
      <main className="content">

         <section className="profile">
            <div className="profile__avatar-area">
               <img className="profile__avatar" src={avatar} alt="Аватар пользователя." />
               <button className="profile__button-avatar" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__container">
               <div className="profile__info">
                  <h1 className="profile__name">{name}</h1>
                  <p className="profile__job">{about}</p>
               </div>
               <button type="button" className="profile__button-edit" onClick={onEditProfile}></button>
            </div>
            <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
         </section>

         <section className="cards">
            {cards.map((card) => {
               return <Card
                  key={card._id}
                  card={card}
                  onCardClick={onCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
               />
            })}
         </section>
      </main>
   );
};

export default Main;