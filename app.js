var app=angular.module("myapp", ["ngRoute","ngMessages"]);

   
	app.config(['$routeProvider','CallToServiceProvider',function($routeProvider,CallToServiceProvider) {

    CallToServiceProvider.setBaseUrl('http://localhost/LiveProject/');

     /*routing started here */    

    $routeProvider
    
    .when("/", {
        
        templateUrl :'templates/blog.html',
        controller  :'BlogSmallController'

    })
    .when("/login", {
         templateUrl : 'login.html',
         controller  :  'loginController'
        
     })
    .when("/about", {
        templateUrl : "about.html"
     })
    .when("/single/:blogId", {
         templateUrl : 'single.html',
         controller  :  'SingleController'
        
     })
     .when("/contact", {
        templateUrl : "contact.html"
     })
      .when("/signup", {
        templateUrl : "templates/signup.html"
     })
     .when("/login", {
        templateUrl : "templates/login.html"
     });
	}]);


    app.controller("loginController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "Login";
  	});



    /*app.service('CallToService',['$http','$log',function($http,$log){

    this.getData=function(serverUrl,methodType,callBackInterface){

            $http({

                url:serverUrl,
                method:methodType

            }).then(function(response){
                //$log.log(response.data.blogs);
                callBackInterface(response);

            },function(error){
                $log.log(error);
            });
        
    };


    }]);*/

   /* app.factory('CallToService',['$http','$log',function($http,$log){
    var factoryObj={};
    factoryObj.getData=function(serverUrl,methodType,callBackInterface){

            $http({

                url:serverUrl,
                method:methodType

            }).then(function(response){
                //$log.log(response.data.blogs);
                callBackInterface(response);

            },function(error){
                $log.log(error);
            });
        
    };

    return factoryObj;
    }]);*/


    app.provider('CallToService',function(){
    
          var baseUrl='';

          this.setBaseUrl=function(url){
            baseUrl=url;
          }

         this.$get=['$log','$http',function($log,$http){
            var providerObj={};
            providerObj.getData=function(serverUrl,methodType,callBackInterface){

            $http({

                url:baseUrl+serverUrl,
                method:methodType,
                cache:true

            }).then(function(response){
                //$log.log(response.data.blogs);
                callBackInterface(response);

            },function(error){
                $log.log(error);
            });
        
    };

            return providerObj;
         }];


    });

    app.controller("SingleController", ['$scope','$log','$http','$routeParams','CallToService',function($scope,$log,$http,$routeParams,CallToService) {
      
    //$log.log($roureParams.blogId);
    CallToService.getData('single.json','GET',function(response){
    $log.log(response);
    $scope.allPosts = response.data;
    $scope.latestPosts=$scope.allPosts.blogs.latest;
    $log.log($scope.latestPosts);


    $scope.latestPosts.forEach( function (SngleObject)
    {
    if(SngleObject.blogId===$routeParams.blogId)
    {
    $log.log(SngleObject.blogId);

    }
    });
    });

    }]);



    app.controller("LoginController", ['$scope','$log','$http','$routeParams','CallToService',function($scope,$log,$http,$routeParams,CallToService) {
      
  
    }]);



    
