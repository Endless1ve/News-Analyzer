import './pages/about.css';
import GitHubApi from './js/modules/GithubApi';
import CommitCard from './js/components/CommitCard';
import CommitCardList from './js/components/CommitCardList';
import Swiper from 'swiper';
import {GIT_URL, OWNER, REPOSIT} from './js/constants/constants';
const slider = document.querySelector('.swiper-container')
const sliderContainer = document.querySelector('.swiper-wrapper')
const gitApi = new GitHubApi(GIT_URL, OWNER, REPOSIT);
const getCommits = new CommitCardList(gitApi);
export const commitCard = new CommitCard(sliderContainer);


getCommits.render();

const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 8,
    loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints:{
   768:{
    centeredSlides: false,
    spaceBetween: 8,
   },
   1440:{
    spaceBetween: 16,
   }
  }
});

document.querySelector('.commit__button').addEventListener('click', () => {
  window.open('https://github.com/Endless1ve/praktikum-diplom/commits/master', '_blank');
});

