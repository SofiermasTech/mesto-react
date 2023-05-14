import React from "react";
import api from "../utils/api";
import Card from "./Card";

const Main = (props) => {
   const [userName, setUserName] = React.useState('');
   const [userDescription, setUserDescription] = React.useState('');
   const [userAvatar, setUserAvatar] = React.useState('');
   const [cards, setCards] = React.useState([]);

   React.useEffect(() => {
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
   });

   React.useEffect(() => {
      api
         .getInitialCards()
         .then((data) => {
            setCards(data);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   });


   return (
      <main className="content">

         <section className="profile">
            <div className="profile__avatar-area">
               <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя." />
               <button className="profile__button-avatar" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__container">
               <div className="profile__info">
                  <h1 className="profile__name">{userName}</h1>
                  <p className="profile__job">{userDescription}</p>
               </div>
               <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
            </div>
            <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
         </section>


         <section className="cards">

            {cards.map((card) => {
               return <Card key={card._id} card={card} />
            })}

         </section>
      </main>
   );
};

export default Main;