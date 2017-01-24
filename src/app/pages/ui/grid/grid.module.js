/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.ui.grid', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ui.grid', {
        url: '/grid',
        templateUrl: 'app/pages/ui/grid/grid.html',
        title: 'Grid',
        sidebarMeta: {
          order: 400,
        },
      });
  }

})();
