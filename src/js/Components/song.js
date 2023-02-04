import {select, templates} from '../settings.js';
import utils from '../utils.js';



class Song{
  constructor(id, data){
    const thisSong = this;

    thisSong.id = id;
    thisSong.data = data;
    console.log(thisSong.id, thisSong.data);

    

    console.log('new Song', thisSong);
    thisSong.renderInMenu();
    thisSong.getElements();
    
    thisSong.initGreenAudioPlayer();
   

      
  }
  renderInMenu(){
    const thisSong = this;
    /* generate HTML based on template */
    const generatedHTML = templates.songList(thisSong.data);
    console.log(generatedHTML);

    /* create element using utils.createElementFromHTML */
    thisSong.element = utils.createDOMFromHTML(generatedHTML);
      
    /* find menu container */
    const songContainer = document.querySelector(select.containerOf.song);

    /* add element to menu */
    songContainer.appendChild(thisSong.element);
    
    console.log('thisSong.element',thisSong.element);
  }

  getElements(){
    const thisSong = this;
    
    thisSong.songList = document.querySelector('.song-list');
    console.log('thisSong.songList', thisSong.songList);


    
  }
  
    

  initGreenAudioPlayer(){
    const thisSong = this;

    const currentDivs = thisSong.songList.getElementsByClassName('audio-wrapper');

    console.log('ilosc',currentDivs.length);

    if (currentDivs.length == '4') {

      GreenAudioPlayer.init({ // eslint-disable-line
        selector: '.audio-player',
        stopOthersOnPlay: true
      });
    }

   
 
  }
}
export default Song;