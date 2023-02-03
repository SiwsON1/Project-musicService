export const select = {
  templateOf: {
    songList: '#audio-template',
     
  },
  containerOf: {
    song: '#song-list',
    
  },
};

export const settings = {
 
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  },
  // CODE ADDED END
};

export const templates = {
  songList: Handlebars.compile(document.querySelector(select.templateOf.songList).innerHTML),
  

};