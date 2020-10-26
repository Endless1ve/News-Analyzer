import {CURRENT_DATE} from '../constants/constants.js';
import { dateAnalyticsFormat } from '../../../../../../Desktop/newsanalyzer-master/src/js/utils/dateFormat.js';

export function dateFormat(date){
    let info = new Date(date);
    const MONTH_ARR = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return date = info.getDate() + ' ' + MONTH_ARR[info.getMonth()] + ', ' + info.getFullYear();
}

export function weekAgo(){
    const previousInMs = 7*24*60*60*1000;
    const previousDate = new Date(CURRENT_DATE.getTime()-previousInMs);
    const fromDate = previousDate.toISOString().slice(0, 10);
    return fromDate;
}

export function correctDate(){
    const correct = new Date();
    const toDate = correct.toISOString().slice(0, 10);
    return toDate;
}


export function dateForAnalytics(date){
    let analyticsDate = new Date(date);
    let day = analyticsDate.getDay();
    switch (day){
        case 1: day="пн"; break;
        case 2: day="вт"; break;
        case 3: day="ср"; break;
        case 4: day="чт"; break;
        case 5: day="пт"; break;
        case 6: day="сб"; break;
        case 0: day="вс"; break; 
    }
    const fixedDate = `${analyticsDate.getDate()}, ${day}`;
    return fixedDate;
}

export function monthForAnalytics(date){
    let analyticsDate = new Date(date);
    let month = analyticsDate.getMonth();
    switch (month)
  {
    case 0: month="Январь"; break;
    case 1: month="Февраль"; break;
    case 2: month="Март"; break;
    case 3: month="Апрель"; break;
    case 4: month="Май"; break;
    case 5: month="Июнь"; break;
    case 6: month="Июль"; break;
    case 7: month="Август"; break;
    case 8: month="Сентябрь"; break;
    case 9: month="Октябрь"; break;
    case 10: month="Ноябрь"; break;
    case 11: month="Декабрь"; break;
  }
  const fixedMonth = month;
  return fixedMonth;
}

