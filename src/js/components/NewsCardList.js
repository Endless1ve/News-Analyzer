import {renderLoader, showMoreCardsButton} from "../utils/utils.js";
import {weekAgo} from '../utils/dateFormat.js';
import {search, newsList, newsCard, keyword, dataStorage} from '../../index.js';
import {CARDS_COUNT} from '../constants/constants.js';


export default class NewsCardList{
   constructor(api, keyword, fromDate, toDate){
       this.api = api;
       this.keyword = keyword;
       this.fromDate = fromDate;
       this.toDate = toDate;
       this.startNews = 0;
       this.render = this.render.bind(this);
   }

   createNews(){
    this.startNews = 0;
    document.querySelector('.message').classList.remove('message-active');
    document.querySelector('.error-message').classList.remove('error-message_active');
    weekAgo();
    renderLoader(true);
    search.inputBlock();
    newsList.textContent = '';
    this.api.getNews(keyword, this.fromDate, this.toDate)
    .then((news) => {
        dataStorage.setPhrase(keyword);
        dataStorage.setNewsItems(news);
        renderLoader(false);
        if(news.articles.length === 0){
            document.querySelector('.message').classList.add('message-active');
            document.querySelector('.error-message').classList.remove('error-message_active');
            document.querySelector('.cards').setAttribute('style', 'display:none');
        }
        else{ document.querySelector('.message').classList.remove('message-active');
        }
    })
    .then(() => {
        this.render(dataStorage.getNewsItems());
    })
    .catch((err) => {
        console.log(err);
        document.querySelector('.error-message').setAttribute('style', 'display:block');
        renderLoader(false);
    })
    .finally(() => {
        search.inputUnlock();
    });
   }

   render(news){
       for (let i = this.startNews; i < this.startNews  + CARDS_COUNT; i++){
           if(news[i]){
                newsCard.create(news[i].title, news[i].urlToImage, news[i].url, news[i].description, news[i].publishedAt, news[i].source.name);
           }
       }
       showMoreCardsButton(news.length, this.startNews);
   }

   renderMore(news){
        this.startNews += CARDS_COUNT;
        this.render(news);
   }
}