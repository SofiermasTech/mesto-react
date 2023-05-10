//import logo from './logo.svg';
//import './App.css';
import logo from '../images/logo-white.svg';

function App() {
   return (
      <div className="page">

         <header className="header">
            <img src={logo} alt="Логотип проекта Место." className="header__logo" />
         </header>


         <main className="content">

            <section className="profile">
               <div className="profile__avatar-area">
                  <img className="profile__avatar" src="#" alt="Аватар пользователя." />
                  <button className="profile__button-avatar"></button>
               </div>
               <div className="profile__container">
                  <div className="profile__info">
                     <h1 className="profile__name">Жак-ив Кусто</h1>
                     <p className="profile__job">Исследователь океана</p>
                  </div>
                  <button type="button" className="profile__button-edit"></button>
               </div>
               <button type="button" className="profile__button-add"></button>
            </section>


            <ul className="cards">

            </ul>

            <template id="item">
               <li className="card">
                  <img src="#" alt="" className="card__image"/>
                     <button type="button" className="card__button-deleted"></button>
                     <div className="card__container">
                        <h2 className="card__description"></h2>
                        <div className="card__like-area">
                           <button type="button" className="card__button-like" aria-label="Like"></button>
                           <p className="card__like-counter"></p>
                        </div>
                     </div>
               </li>
            </template>

         </main>

         <footer className="footer">
            <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
         </footer>


         <section className="popup popup-avatar">
            <div className="popup__container popup-avatar__container">
               <button type="button" className="popup__close"></button>
               <h2 className="popup__title">Обновить аватар</h2>
               <form className="popup__form popup-avatar__form" name="popupAvatarForm" noValidate>
                 
                  <input type="url" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
                     className="popup__input" required minLength="2" maxLength="200"/>
                     <span className="popup__input-error avatar-input-error"></span>

                     <button type="submit" className="popup__submit popup-avatar__btn-submit">Сохранить</button>

               </form>
            </div>
         </section>

         <section className="popup popup-edit">
            <div className="popup__container">
               <button type="button" className="popup__close popup-edit__btn-close"></button>
               <h2 className="popup__title">Редактировать профиль</h2>
               <form className="popup__form popup-edit__form" name="popupEditForm" noValidate>
                  <label className="popup__label" for="author-input">
                     <input id="author-input" type="text" name="author" value="Жак-Ив Кусто" required
                        placeholder="Имя автора" className="popup__input  popup__input_type_name" minLength="2" maxLength="40"/>
                        <span className="popup__input-error author-input-error"></span>
                  </label>
                  <label className="popup__label" for="job-input">
                     <input id="job-input" type="text" name="jobAuthor" value="Исследователь океана" required
                        placeholder="Вид деятельности" className="popup__input popup__input_type_job" minLength="2"
                        maxLength="200"/>
                        <span className="popup__input-error job-input-error"></span>
                  </label>
                  <button className="popup__submit popup-edit__btn-submit" type="submit">Сохранить</button>
               </form>
            </div>
         </section>

         <section className="popup popup-add">
            <div className="popup__container">
               <button type="button" className="popup__close popup-add__btn-close"></button>
               <h2 className="popup__title">Новое место</h2>
               <form className="popup__form popup-add__form" name="popupAddForm" noValidate>
                  <label className="popup__label" for="place-input">
                     <input id="place-input" type="text" name="namePlace" placeholder="Название" required
                        className="popup__input popup__input_type_place" minLength="2" maxLength="30"/>
                        <span className="popup__input-error place-input-error"></span>
                  </label>
                  <label className="popup__label" for="link-input">
                     <input id="link-input" type="url" name="linkPlace" placeholder="Ссылка на картинку" required
                        className="popup__input popup__input_type_link"/>
                        <span className="popup__input-error link-input-error"></span>
                  </label>
                  <button className="popup__submit popup-add__btn-submit" type="submit">Сохранить</button>
               </form>
            </div>
         </section>

         <section className="popup popup-view" aria-label="Место">
            <div className="popup-view__image-container">
               <img src="#" alt="" className="popup-view__image"/>
                  <p className="popup-view__caption"></p>
                  <button type="button" className="popup__close popup-view__btn-close"></button>
            </div>
         </section>

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
