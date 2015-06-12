'use strict';

angular.module('traioApp')
  .value('taskArchive', {
    items: [{
      name: 'LMIO',
      path: 'lmio',
      items: [{
        name: '2014/2015',
        path: '26',
        items: [{
          name: 'Mokyklos etapas',
          path: '1et',
          items: [{
            name: 'Aukcionas',
            group: 'jau',
            path: 'aukcionas-jau'
          }, {
            name: 'Automobiliai',
            group: 'vyr',
            path: 'automobiliai-vyr'
          }, {
            name: 'Dvejetainiai',
            group: 'jau',
            path: 'dvejetainiai-jau'
          }, {
            name: 'Dvejetainiai',
            group: 'vyr',
            path: 'dvejetainiai-vyr'
          }, {
            name: 'Loj. kortelė',
            group: 'vyr',
            path: 'loj-kortele-vyr'
          }, {
            name: 'Myli nemyli',
            group: 'jau',
            path: 'myli-nemyli-jau'
          }]
        }]
      }, {
        name: '2013/2014',
        path: '25'
      }]
    }, {
      name: 'BOI',
      path: 'boi'
    }, {
      name: 'IOI',
      path: 'ioi'
    }]
  });
