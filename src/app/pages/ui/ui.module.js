/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.ui', [
    'AngularPanelsApp.pages.ui.typography',
    'AngularPanelsApp.pages.ui.buttons',
    'AngularPanelsApp.pages.ui.icons',
    'AngularPanelsApp.pages.ui.modals',
    'AngularPanelsApp.pages.ui.grid',
    'AngularPanelsApp.pages.ui.alerts',
    'AngularPanelsApp.pages.ui.progressBars',
    'AngularPanelsApp.pages.ui.notifications',
    'AngularPanelsApp.pages.ui.tabs',
    'AngularPanelsApp.pages.ui.slider',
    'AngularPanelsApp.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
