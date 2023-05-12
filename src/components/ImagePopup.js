import React from "react";

const ImagePopup = () => {
   return (
      <section className="popup popup-view" aria-label="Место">
         <div className="popup-view__image-container">
            <img src="#" alt="" className="popup-view__image" />
            <p className="popup-view__caption"></p>
            <button type="button" className="popup__close popup-view__btn-close"></button>
         </div>
      </section>
   )
}

export default ImagePopup;