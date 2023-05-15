import React, {useState} from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";

function App() {

   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
   const [selectedCard, setSelectedCard] = useState({});

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

   const closeAllPopups = () => {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard({});
   }

   return (
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

         <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
            <input type="text" name="author" id="author-input" placeholder="Имя"
               minLength="2" maxLength="40" className="popup__input  popup__input_type_name" required />
            <span id="name-error" className="popup__input-error author-input-error"></span>
            <input type="text" name="job" id="job-input" placeholder="Вид деятельности" minLength="2"
               maxLength="200" className="popup__input popup__input_type_job" required />
            <span id="job-error" className="popup__input-error job-input-error"></span>
         </PopupWithForm>

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
   );
}

export default App;
