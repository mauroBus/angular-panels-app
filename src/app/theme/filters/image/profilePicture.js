/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.theme')
      .filter('profilePicture', profilePicture);

  /** @ngInject */
  function profilePicture(layoutPaths) {
    return function(input) {
      var ext = input.indexOf('.') > 0 ? '' : '.png';
      return layoutPaths.images.profile + input.toLowerCase() + ext;
    };
  }

})();
