/**
 * @author maurobuselli@gmail.com

 *
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.form')
      .directive('switch', switchDirective);

  /** @ngInject */
  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        ngModel: '='
      },
      template: function(el, attrs) {
        return '<div class="switch-container ' + (attrs.color || '') + '"><input type="checkbox" ng-model="ngModel"></div>';
      },
      link: function (scope, elem, attr) {
        var input = $(elem).find('input');
        input.bootstrapSwitch({
          size: 'small',
          onColor: attr.color
        });
        input.on('switchChange.bootstrapSwitch', function(event, state) {
          scope.ngModel = state;
          scope.$apply();
        });

      }
    };
  }
})();
