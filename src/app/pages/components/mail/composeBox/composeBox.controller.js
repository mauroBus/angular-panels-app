/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.components.mail')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl(subject, to, text) {
    var vm = this;
    vm.subject = subject;
    vm.to = to;
    vm.text = text;
  }
})();