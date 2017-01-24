/**
 * @author maurobuselli@gmail.com

 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.dashboard')
      .directive('dashboardCalendar', dashboardCalendar);

  /** @ngInject */
  function dashboardCalendar() {
    return {
      restrict: 'E',
      controller: 'DashboardCalendarCtrl',
      templateUrl: 'app/pages/dashboard/dashboardCalendar/dashboardCalendar.html'
    };
  }
})();