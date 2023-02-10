import {templates} from '../settings.js';
import utils from '../utils.js';




class DiscoverSong {
  constructor(id,data , element) {
    

    const thisFilteredSong = this;
   
    thisFilteredSong.data = data;
    //this.FilteredSong.songList = songlist;
    thisFilteredSong.initialized = false;

    console.log('data tooooooooooooo',thisFilteredSong.data);

    
    thisFilteredSong.renderInMenu(element);
    
    
    
    
    
  }
 
  renderInMenu(element) {
    // Przefiltrowanie piosenek
    const thisFilteredSong = this;
   

    const generatedHTML = templates.songList(thisFilteredSong.data);
    console.log(generatedHTML);

    thisFilteredSong.nodeElement = utils.createDOMFromHTML(generatedHTML);

    thisFilteredSong.wrapper = element;

    thisFilteredSong.wrapper.appendChild(thisFilteredSong.nodeElement);
    /* create element using utils.createElementFromHTML */
    // this.FilteredSong.element = utils.createDOMFromHTML(generatedHTML);
      
    /* find menu container */
    //const songContainer = document.querySelector(select.containerOf.search);
   
    /* add element to menu */
    //songContainer.appendChild(this.FilteredSong.element);

    if (!thisFilteredSong.initialized) {
      thisFilteredSong.initialized = true;
      thisFilteredSong.initGreenAudioPlayer();
    }
   
  }
  
  
  initGreenAudioPlayer(){
    
    
    GreenAudioPlayer.init({ // eslint-disable-line
      selector: '.audio-player',
      stopOthersOnPlay: true
    });
    
    
    
  
    

      
    
    
  }
  

 
}
export default DiscoverSong;