export default class NewsApi {
    constructor(key){
        this.key = key;
    }

    getNews(request, fromDate, toDate){
        return fetch(`https://nomoreparties.co/news/v2/everything?q=${request}&from=${fromDate}&to=${toDate}&sortBy=popularity&pageSize=100&apiKey=${this.key}`)
        .then(res => {
            if(res.ok){
                return Promise.resolve(res.json());
            }
            Promise.reject(new Error(`Ошибка сервера: ${res.status}`));
        })
        .catch(err => Promise.reject(new Error(`Ошибка соединения: ${err.message}`)));
    }
}