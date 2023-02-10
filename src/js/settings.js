export const select = {
  templateOf: {
    songList: '#audio-template',
     
  },
  containerOf: {
    song: '#song-list',
    pages: '#pages',
    search: '#search-wrapper',
    discover: '#discover-wrapper',
  },
  nav: {
    links: '.main-nav a',
    
  },
  search: {
    input: '#song-input',
    btn: '#search-button',
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
export const classNames = {

  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
  // CODE ADDED END
};