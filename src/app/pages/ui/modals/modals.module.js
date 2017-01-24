/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.ui.modals', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.modals', {
          url: '/modals',
          templateUrl: 'app/pages/ui/modals/modals.html',
          controller: 'ModalsPageCtrl',
          title: 'Modals',
          sidebarMeta: {
            order: 300,
          },
        });
  }

})();
