import React, { useEffect, useState, useContext } from 'react';
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
   const {name, about, avatar} = useContext(CurrentUserContext);
   const [cards, setCards] = useState([]);
/*
   useEffect(() => {
      api
         .getUserInfo()
         .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }, []);
*/
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
               return <Card key={card._id} card={card} onCardClick={onCardClick} />
            })}
         </section>
      </main>
   );
};

export default Main;