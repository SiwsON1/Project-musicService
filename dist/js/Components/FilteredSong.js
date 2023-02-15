import {templates} from '../settings.js';
import utils from '../utils.js';





class FilteredSong {
  constructor(songCounter,data , element) {
    
    
    const thisFilteredSong = this;
    thisFilteredSong.songCounter = songCounter;
    thisFilteredSong.data = data;

    thisFilteredSong.data.counter = thisFilteredSong.songCounter;

    

    console.log('wystąpienia o',thisFilteredSong.songCounter);

    
    thisFilteredSong.renderInMenu(element);
    thisFilteredSong.initGreenAudioPlayer();
    
    
    
    
  }
 
  renderInMenu(element) {
    // Przefiltrowanie piosenek
    const thisFilteredSong = this;
    
    

    const generatedHTML = templates.songList(
      thisFilteredSong.data
  
    );
    console.log(generatedHTML);

    thisFilteredSong.nodeElement = utils.createDOMFromHTML(generatedHTML);

    thisFilteredSong.wrapper = element;
    console.log('wrapper to', thisFilteredSong.nodeElement);

    thisFilteredSong.wrapper.appendChild(thisFilteredSong.nodeElement);
    /* create element using utils.createElementFromHTML */
    // this.FilteredSong.element = utils.createDOMFromHTML(generatedHTML);
      
    /* find menu container */
    //const songContainer = document.querySelector(select.containerOf.search);
   
    /* add element to menu */
    //songContainer.appendChild(this.FilteredSong.element);

    
   
  }
  
  
  initGreenAudioPlayer(){
    
    const thisFilteredSong = this;
 


    GreenAudioPlayer.init({ // eslint-disable-line
      selector:'.audio-player' + '-' + thisFilteredSong.data.id + '-' + thisFilteredSong.data.counter,
      stopOthersOnPlay: true,
      
    });
    
    console.log('siemankooo tooo', '.audio-player' + '-' + thisFilteredSong.data.id+ '-' + thisFilteredSong.data.counter);
    
    
  
    

      
    
    
  }
  

 
}
export default FilteredSong;