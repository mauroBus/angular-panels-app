/**
 * Created by maurobuselli@gmail.com
 */
(function(){
    'use strict';

    angular.module('AngularPanelsApp.pages.form')
        .controller('datepickerCtrl', datepickerCtrl);

    /** @ngInject */
    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }
})();