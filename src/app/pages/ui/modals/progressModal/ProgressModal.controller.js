/**
 * Created by maurobuselli@gmail.com
 */
(function () {
    'use strict';

    angular.module('AngularPanelsApp.pages.ui.modals')
        .controller('ProgressModalCtrl', ProgressModalCtrl);

    function ProgressModalCtrl($timeout, baProgressModal) {

        baProgressModal.setProgress(0);

        (function changeValue() {
            if (baProgressModal.getProgress() >= 100) {
                baProgressModal.close();
            } else {
                baProgressModal.setProgress(baProgressModal.getProgress() + 10);
                $timeout(changeValue, 300);
            }
        })();
    }

})();
