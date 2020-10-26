export default class DataStorage{
    constructor(){

    }

    setNewsItems(news){
        const jsonNews = JSON.stringify(news.articles);
        localStorage.setItem('cards', `${jsonNews}`);
        localStorage.setItem('totalResults', `${news.totalResults}`);
    }

    setPhrase(phrase){
       localStorage.setItem('phrase',`${phrase}`);
    }

    getPhrase(){
        return localStorage.getItem('phrase');
    }

    getNewsItems(){
        return JSON.parse(localStorage.getItem('cards'));
    }

    getTotalResults(){
        return localStorage.getItem('totalResults');
    }
}