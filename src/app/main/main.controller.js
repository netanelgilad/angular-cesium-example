'use strict';

angular.module('angularCesium')
  .controller('MainCtrl', function ($scope, ObservableCollection) {
    $scope.newLayer = {};
    $scope.layers = [];
    $scope.billboards = new ObservableCollection();
    $scope.billboardsId = 0;
    $scope.billboards.add($scope.billboardsId++, {
      image : 'assets/images/angular.png',
      color : 'blue',
      position : {
        latitude : 31,
        longitude : 34,
        altitude : 500
      }
    });
    $scope.newBillboard = { position : {}};
    $scope.maps = [{
      name : 'netanel'
    }];
    $scope.newMap = {};
    $scope.labels = new ObservableCollection();
    $scope.labelsId = 0;
    $scope.labels.add($scope.labelsId++,{
      text : 'Netanel',
      color : 'red',
      position : {
        latitude : 34,
        longitude : 31,
        altitude : 500
      }
    });
    $scope.newLabel = {};

    $scope.cars = [{
      position : {
        latitude : 31,
        longitude : 56
      }
    }];
  });
