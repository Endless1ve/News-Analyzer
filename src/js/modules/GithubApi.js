export default class GithubApi{
    constructor(url, user, repos){
        this.url = url;
        this.user = user;
        this.repos = repos;
    }

    getCommits(){
        return fetch(`${this.url}/${this.user}/${this.repos}/commits`)
        .then(res => {
            if(res.ok){
                return Promise.resolve(res.json());
            }
            Promise.reject(new Error(`Ошибка сервера: ${res.status}`));
        }).then((commits) =>{
            return commits;
        })
        .catch(err => Promise.reject(new Error(`Ошибка соединения: ${err.message}`)));
    }
}
