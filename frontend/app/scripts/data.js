'use strict';

angular.module('traioApp')
  .value('taskArchive', {
    items: [{
      name: 'LMIO',
      path: 'lmio',
      items: [{
        name: '2015/2016',
        path: '27',
        items: [{
          name: 'Šalies etapas',
          path: '4et',
          items: [{
            name: 'Treniruotė',
            path: 'd0',
            items: [{
              name: 'Suma',
              group: 'jau/vyr',
              path: 'suma'
            }, {
              name: 'Žaidimas',
              group: 'jau/vyr',
              path: 'zaidimas'
            }]
          }, {
            name: 'Pirma diena',
            path: 'd1',
            items: [{
              name: 'Robotas',
              group: 'jau',
              path: 'robotas-jau'
            }, {
              name: 'Robotas',
              group: 'vyr',
              path: 'robotas-vyr'
            }, {
              name: 'Ralis',
              group: 'jau/vyr',
              path: 'ralis'
            }, {
              name: 'Skaičiai',
              group: 'jau',
              path: 'skaiciai-jau'
            }, {
              name: 'Valymas',
              group: 'vyr',
              path: 'valymas-vyr'
            }]
          }, {
            name: 'Antra diena',
            path: 'd2',
            items: [{
              name: 'Asteroidai',
              group: 'vyr',
              path: 'asteroidai-vyr'
            }, {
              name: 'Aukščiai',
              group: 'jau',
              path: 'auksciai-jau'
            }, {
              name: 'Kortos',
              group: 'jau/vyr',
              path: 'kortos'
            }, {
              name: 'Stiklas',
              group: 'jau',
              path: 'stiklas-jau'
            }, {
              name: 'Žodžiai',
              group: 'vyr',
              path: 'zodziai-vyr'
            }]
          }]
        }]
      }]
    }]
  });
