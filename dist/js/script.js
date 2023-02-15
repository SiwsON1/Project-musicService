
import FilteredSong from './Components/FilteredSong.js';
import {settings, select, classNames} from './settings.js';

const app = {
  initSearch:function(){
    const thisApp = this;

    thisApp.searchButton = document.querySelector(select.search.btn);
    thisApp.input = document.querySelector(select.search.input);
    const searchContainer = document.querySelector(select.containerOf.search);
    thisApp.discoverButton = document.querySelector(select.discover.btn);
    let songCounter = 0;

    thisApp.searchButton.addEventListener('click', event => {
      event.preventDefault();
      const searchValue = thisApp.input.value;
      let lowerSearchValue = searchValue.toLowerCase();

     

      let filteredSongs =  thisApp.data.songs.filter(song => {
        return song.title.toLowerCase().includes(lowerSearchValue);
      });

      for(let songData in filteredSongs){
        new FilteredSong(songData, filteredSongs[songData], searchContainer);
        songCounter++;
        console.log(songCounter);
      }

      // wybieramy element HTML, do którego chcemy wstawić napis
      let myText = document.getElementById('foundText');

      // tworzymy napis, który łączy tekst z zmienną
      let message = `We have found ${songCounter} songs...`;

      // wstawiamy napis do elementu HTML
      myText.innerHTML = message;

    });

    

    

    
  },
  
  initPages: function(){
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
      }

    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }


  },
  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }
  },
  initData: function(){
    const thisApp= this;

    thisApp.data= {};
    const url = settings.db.url + '/' + settings.db.songs;
      
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
          
        thisApp.data.songs = parsedResponse;
        
        thisApp.initMenu();
        
        console.log('parsedResponse',parsedResponse);

      });
    console.log('thisApp.data', JSON.stringify(thisApp.data));



  },
  initMenu:function(){

  
    const thisApp= this;
    

    console.log('thisApp.data', thisApp.data);
    const filteredContainer = document.querySelector(select.containerOf.song);
    let songCounter = 0;

    for(let songData in thisApp.data.songs){

      
      
      

      new FilteredSong(songCounter, thisApp.data.songs[songData], filteredContainer);
      songCounter++;
      
    }
    
    console.log('dłuuuugoooość',thisApp.data.songs.length);
    const discoverContainer = document.querySelector(select.containerOf.discover);
    const randomIndex = Math.floor(Math.random() * thisApp.data.songs.length);
    new FilteredSong(songCounter, thisApp.data.songs[randomIndex], discoverContainer);
    songCounter++;
  },
 
  init: function(){
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initSearch();
    //thisApp.InitDiscover();
   

    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
   
  },

};

app.init();
