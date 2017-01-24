/**
 * @author maurobuselli@gmail.com

 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.form')
      .directive('tagInput', tagInput);

  /** @ngInject */
  function tagInput() {
    return {
      restrict: 'A',
      link: function( $scope, elem, attr) {
        $(elem).tagsinput({
          tagClass:  'label label-' + attr.tagInput
        });
      }
    };
  }
})();