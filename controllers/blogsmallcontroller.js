app.controller('BlogSmallController',['$scope','$http','$log','CallToService', function($scope,$http,$log,CallToService) {

    $scope.title="Latest";
    $scope.loader=true;

    CallToService.getData('test.json','GET',function(response){
    //$log.log(response);
    $scope.loader=false;
    $scope.allPosts = response.data;
    $scope.latestPosts=$scope.allPosts.blogs.latest;
    $log.log($scope.latestPosts);
    });
    
    }]);