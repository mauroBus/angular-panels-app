/**
 * @author maurobuselli@gmail.com
 */
(function () {
  'use strict';

  angular.module('AngularPanelsApp.pages.components.mail')
    .service('composeModal', composeModal);

  /** @ngInject */
  function composeModal($uibModal) {
      this.open = function(options){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/components/mail/composeBox/compose.html',
          controller: 'composeBoxCtrl',
          controllerAs: 'boxCtrl',
          size: 'compose',
          resolve: {
            subject: function () {
              return options.subject;
            },
            to: function () {
              return options.to;
            },
            text: function () {
              return options.text;
            }
          }
        });
      }

  }

})();