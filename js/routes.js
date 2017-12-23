angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.hasTuPedido', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/hasTuPedido.html',
        controller: 'hasTuPedidoCtrl'
      }
    }
  })

  .state('tabsController.clubDePuntos', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/clubDePuntos.html',
        controller: 'clubDePuntosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.orden', {
    url: '/orden',
    views: {
      'tab1': {
        templateUrl: 'templates/orden.html',
        controller: 'ordenCtrl'
      }
    }
  })

  .state('tabsController.pagos', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/pagos.html',
        controller: 'pagosCtrl'
      }
    }
  })

  .state('tabsController.seleccioneSuUbicaciN', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/seleccioneSuUbicaciN.html',
        controller: 'seleccioneSuUbicaciNCtrl'
      }
    }
  })

  .state('mapsExample', {
    url: '/page10',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

  .state('tabsController.promociones', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/promociones.html',
        controller: 'promocionesCtrl'
      }
    }
  })

  .state('pageerew', {
    url: '/page12',
    templateUrl: 'templates/pageerew.html',
    controller: 'pageerewCtrl'
  })

  .state('misPedidos', {
    url: '/page13',
    templateUrl: 'templates/misPedidos.html',
    controller: 'misPedidosCtrl'
  })

  .state('tabsController.gracias', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/gracias.html',
        controller: 'graciasCtrl'
      }
    }
  })

  .state('seguirPedido', {
    url: '/monitor',
    templateUrl: 'templates/seguirPedido.html',
    controller: 'seguirPedidoCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});