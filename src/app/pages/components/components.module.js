/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.components', [
    'AngularPanelsApp.pages.components.mail',
    'AngularPanelsApp.pages.components.timeline',
    'AngularPanelsApp.pages.components.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Components',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();
