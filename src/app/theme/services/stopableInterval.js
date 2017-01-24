/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.theme')
    .service('stopableInterval', stopableInterval);

  /** @ngInject */
  function stopableInterval($window) {
    return {
      start: function (interval, calback, time) {
        function startInterval() {
          return interval(calback, time);
        }

        var i = startInterval();

        angular.element($window).bind('focus', function () {
          if (i) interval.cancel(i);
          i = startInterval();
        });

        angular.element($window).bind('blur', function () {
          if (i) interval.cancel(i);
        });
      }
    }
  }

})();