

const Main = (props) => {
   return (
      <main className="content">

            <section className="profile">
               <div className="profile__avatar-area">
                  <img className="profile__avatar" src="#" alt="Аватар пользователя." />
                  <button className="profile__button-avatar" onClick={props.onEditAvatar}></button>
               </div>
               <div className="profile__container">
                  <div className="profile__info">
                     <h1 className="profile__name">Жак-ив Кусто</h1>
                     <p className="profile__job">Исследователь океана</p>
                  </div>
                  <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
               </div>
               <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
            </section>


            <ul className="cards">

            </ul>

            <template id="item">
               <li className="card">
                  <img src="#" alt="" className="card__image" />
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
   )
}

export default Main;