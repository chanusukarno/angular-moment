angular-moment
==============

AngularJS Directive for Representing relative times using MomentJS

![alt tag](http://techiedreams.com/downloads/angular-moment.png)

DIRECTIVE:
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
    
    
USAGE:

Html:
<div ng-controller="momentCtrl">
            Welcome! This content got refreshed: <span data-am-relative="date"></span>
</div>

Controller:
momentApp.controller('momentCtrl', ['$scope', function($scope) {
        $scope.date = new Date();
}]);
