var INMOAPP = INMOAPP || {};


window.onload = function() {

  var pwbSS = Vue.component('social-sharing', SocialSharing);
  // var pwbGM = Vue.component('gmap-map', VueGoogleMaps);
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC0RkiBX1AtO1PyY2_RrrtvVfa1aASkbBw'
      // v: '3.26', // Google Maps API version
      // libraries: 'places',   // If you want to use places input
    }
  });
  var markers = INMOAPP.markers || [];
  INMOAPP.pwbVue = new Vue({
    el: '#main-vue',
    data: {
      // markers: markers,
      // selected: 2,
      // selectoptions: [
      //   2, 3, 4
      // ],
      // options: [
      //   { id: 1, text: 'Hello' },
      //   { id: 2, text: 'World' }
      // ]
    }
  });
  // $('select').material_select();
}
