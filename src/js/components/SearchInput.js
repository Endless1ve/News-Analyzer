import {newsCardList, input, button, keyword} from '../../index.js';

export default class SearchInput{
    constructor(keyword){
     this.keyword = keyword;
    }

    validate(keyword){
        console.log(keyword);
        if(keyword.length === 0){
            document.querySelector('.input-error').setAttribute('style', 'display:block');
        }
        else{
            document.querySelector('.input-error').setAttribute('style', 'display:none');
            newsCardList.createNews(keyword);
            
        }
    }

    inputBlock(){
        input.setAttribute('disabled', true);
        button.setAttribute('disabled', true);
    }

    inputUnlock(){
        input.removeAttribute('disabled', true);
        button.removeAttribute('disabled', true);
    }
}