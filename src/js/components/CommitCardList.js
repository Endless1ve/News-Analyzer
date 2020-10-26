import {commitCard} from '../../about.js';
export default class CommitCardList{
    constructor(api){
        this.api = api;
       
    }

    render(){
        this.api.getCommits()
        .then((commits) => {
            commits.forEach(element => {
                commitCard.create(element.commit.author.name, element.commit.author.date, element.commit.author.email, element.commit.message, element.author.avatar_url);
            });
        })
    }
}