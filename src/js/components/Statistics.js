import {dataStorage} from '../../analytics.js';
import {dateFormat, dateForAnalytics, monthForAnalytics} from '../utils/dateFormat.js';
import {CURRENT_DATE, TABLE_MONTH} from '../constants/constants.js';


export default class Statistics{
    constructor(news, container){
        this.news = news;
        this.container = container;
        this.weekDates();
        this.deployTextStat();
    }

    weekDates() {
        for(let i = 0; i < 7; i++) {
            let weekDates = CURRENT_DATE;
            const newsCount = this._countHeadlinesByDay(this.news, dataStorage.getPhrase(), weekDates);
            const newsPercent = (newsCount % dataStorage.getTotalResults());
            this._makeBar(weekDates, newsPercent);
            weekDates = CURRENT_DATE.setDate(CURRENT_DATE.getDate() - 1)
        }
      }

      _countHeadlinesByDay(news, phrase, date) {
        const regexp = new RegExp(`${phrase}`, `gi`);
        const byDate = news.map(item => ((dateFormat(item.publishedAt) == dateFormat(date))) && item.title.match(regexp) + item.description.match(regexp));
        const resultByDate = byDate.filter(function(x) {
        return x !== false && x !== null; 
        });
        return resultByDate.length;
    }

    _countAllHedlines(news){
        const regexp = new RegExp(`${dataStorage.getPhrase()}`, `gi`);
        const all = news.map(item => item.title.match(regexp));
        const filted = all.filter( (x) =>{
            return x !== false && x !== null; 
        })
        return filted.length;
    }

    _makeBar(day, percent){
        this.bar = `<div class="analytics__content-line">
        <p class="analytics__content-date">${dateForAnalytics(day)}</p>
        <div class="analytics__content-block">
          <div class="analytics__content-bar" style="width: ${percent}%;">${percent}</div>
        </div>
      </div>`;
      const container = document.querySelector('.analytics__content-statistics');
      container.insertAdjacentHTML('beforeEnd', this.bar);
    }

    deployTextStat(){
        TABLE_MONTH.textContent = `(${monthForAnalytics(CURRENT_DATE)})`;
        document.querySelector('.result__content-weekly').textContent = dataStorage.getTotalResults();
        document.querySelector('.result__content-titles').textContent = this._countAllHedlines(dataStorage.getNewsItems());
        document.querySelector('.result__title-span').textContent = dataStorage.getPhrase();
    }
}

