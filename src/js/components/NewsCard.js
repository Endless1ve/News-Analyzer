import {dateFormat} from '../utils/dateFormat.js';
export default class NewsCard{
    constructor(container){
        this.container = container;
    }

    create(title, image, url, text, date, author){
        document.querySelector('.cards').setAttribute('style', 'display:block');
        this.card =
        `<a class="card" href ="${url}" target="_blank">
            <img src="${image}" alt="Картинка" class="card-image">
            <p class="card-date">${dateFormat(date)}</p>
            <h3 class="card-title">${title}</h3>
            <p class="card-text">${text}</p>
            <p class="card-author">${author}</p>
        </a>`;
        this.container.insertAdjacentHTML('beforeEnd', this.card);
        return this.card;
    }
}