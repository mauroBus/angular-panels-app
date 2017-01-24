/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.form')
      .controller('SwitchDemoPanelCtrl', SwitchDemoPanelCtrl);

  /** @ngInject */
  function SwitchDemoPanelCtrl() {
    var vm = this;
    vm.switches = {
      s1: true,
      s2: false,
      s3: true,
      s4: true,
      s5: false
    };
  }

})();
