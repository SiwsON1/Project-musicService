import {settings} from './settings.js';

const app = {
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
        // thisApp.initMenu();
        console.log('parsedResponse',parsedResponse);

      });
    console.log('thisApp.data', JSON.stringify(thisApp.data));



  },
  init: function(){
    const thisApp = this;
    thisApp.initData();

    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
   
  },
};

app.init();
