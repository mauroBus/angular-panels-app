/**
 * @author maurobuselli@gmail.com

 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();