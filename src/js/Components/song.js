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
  }
}

export default Song;