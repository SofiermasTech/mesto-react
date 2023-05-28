import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup.js";

function App() {

   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
   const [selectedCard, setSelectedCard] = useState({});
   const [currentUser, setCurrentUser] = useState({
      name: "",
      about: "",
      avatar: "",
      _id: "",
      cohort: "",
   });

   React.useEffect(() => {
      api
         .getUserInfo()
         .then((data) => {
            setCurrentUser(data);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }, []);

   const handleEditAvatarClick = () => {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
   };

   const handleEditProfileClick = () => {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
   };

   const handleAddPlaceClick = () => {
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
   };

   const handleCardClick = card => {
      setSelectedCard(card);
   };

   const handleUpdateUser = (newUserInfo) => {
      api.setUserInfo(newUserInfo)
      .then((data) =>{
        setCurrentUser(data)
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    };

   const closeAllPopups = () => {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard({});
   }

   return (
      <CurrentUserContext.Provider value={currentUser}>
         <div className="page">
            <Header />
            <Main
               onEditAvatar={handleEditAvatarClick}
               onEditProfile={handleEditProfileClick}
               onAddPlace={handleAddPlaceClick}
               onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
               <input type="url" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
                  className="popup__input" minLength="2" maxLength="200" required />
               <span id="avatar-error" className="popup__input-error avatar-input-error"></span>
            </PopupWithForm>

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

            <PopupWithForm name="new-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Создать'>
               <input type="text" name="namePlace" id="place-input" placeholder="Название" minLength="2"
                  maxLength="30" className="popup__input popup__input_type_place" required />
               <span id="title-error" className="popup__input-error place-input-error"></span>
               <input type="url" name="linkPlace" id="link-input" placeholder="Ссылка на картинку"
                  className="popup__input popup__input_type_link" required />
               <span id="link-error" className="popup__input-error link-input-error"></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

            <section className="popup popup-delete">
               <div className="popup__container">
                  <button type="button" className="popup__close" aria-label="Закрыть форму"></button>
                  <h3 className="popup__title">Вы уверены?</h3>
                  <form className="popup__form" name="deleteCard" noValidate>
                     <button type="submit" className="popup__submit" aria-label="Сохранить">Да</button>
                  </form>
               </div>
            </section>

         </div>
      </CurrentUserContext.Provider>
   );
}

export default App;
