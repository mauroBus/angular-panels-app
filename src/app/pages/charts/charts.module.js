/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.charts', [
      'AngularPanelsApp.pages.charts.amCharts',
      'AngularPanelsApp.pages.charts.chartJs',
      'AngularPanelsApp.pages.charts.chartist',
      'AngularPanelsApp.pages.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();
