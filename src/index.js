import './pages/index.css';
import NewsApi from './js/modules/NewsApi';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import SearchInput from './js/components/SearchInput';
import {NEWS_KEY, SHOW_MORE_CARDS_BUTTON, CURRENT_DATE} from './js/constants/constants';
import {weekAgo, correctDate} from './js/utils/dateFormat.js'
import DataStorage from './js/modules/DataStorage';


const searchForm = document.forms.search;
export const button = document.querySelector('.header__search-button');
export const input = document.querySelector('.header__search-input');
export let keyword = input.value;


export const newsList = document.querySelector('.cards__content');
const newsApi = new NewsApi(NEWS_KEY);
export const newsCardList = new NewsCardList(newsApi, keyword, weekAgo(CURRENT_DATE), correctDate());
export const newsCard = new NewsCard(newsList);
export const search = new SearchInput(keyword);
export const dataStorage = new DataStorage();

window.onload = () =>{
    if(localStorage.getItem('cards') === null){
        input.value = dataStorage.getPhrase();
    }
    else{
        input.value = dataStorage.getPhrase()
        newsCardList.render(dataStorage.getNewsItems());
    }
}

searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    keyword = input.value;
    search.validate(keyword);
});

SHOW_MORE_CARDS_BUTTON.addEventListener('click', () => {
    newsCardList.renderMore(JSON.parse(localStorage.getItem('cards')));
});
