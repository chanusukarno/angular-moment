/* Controllers */

var momentApp = angular.module('momentApp', []);

// Controller
momentApp.controller('momentCtrl', ['$scope', function($scope) {
        $scope.date = new Date();
    }]);

// Filter
//momentApp.filter('amRelative', function() {
//    return function(data) {
//        return moment(data).fromNow();
//    };
//});

// Directive
momentApp.directive('amRelative', ['$timeout', function($timeout) {

        function update(scope, element) {
            element.text(moment(scope.actualTime).fromNow());
            $timeout(function() {
                update(scope, element);
            }, 1000 * 60);
        }

        return {
            scope: {
                actualTime: '=amRelative'
            },
            link: function(scope, element) {
                update(scope, element);
            }
        };
    }]);
