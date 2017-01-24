/**
 * @author maurobuselli@gmail.com

 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.theme.components')
      .directive('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
      controller: 'MsgCenterCtrl'
    };
  }

})();