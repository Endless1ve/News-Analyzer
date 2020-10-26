import {dateFormat} from '../utils/dateFormat.js';
export default class CommitCard{
    constructor(container){
        this.container = container;
    }
    
    create(author, date, eMail, message, image){
        this.card = `
        <div class="swiper-slide">
            <p class="slide__date">${dateFormat(date)}</p>
            <div class="slide__author">
                <img src="${image}" alt="" class="author__slider-image">
                <div class="author__text">
                    <h3 class="author__text-title">${author}</h3>
                    <p class="author__text-mail">${eMail}</p>
                </div>
            </div>
        <p class="slide__text">${message}</p>
      </div>`
      this.container.insertAdjacentHTML('beforeEnd', this.card);
    }
    
    
}