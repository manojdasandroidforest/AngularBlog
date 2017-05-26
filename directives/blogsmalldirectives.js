 /*Custome directives */

 app.directive('blog', function(){
   
       return { 

       	restrict: 'E',
        templateUrl: 'templates/blogsmall.html',
       //template: $templateCache.get('templates/blog.html'),
        compile:function(tElement,tAttributes){
        	/*tElement is the original element*/
       	console.log(tAttributes.name+" In compile");
	/*If you want to modify DOM before it is get compiled you can change here .
	  All the changes will be made available thoughout the instances */
		 //tElement.css("border","1px solid green");
       	/*PRE AND POST LINK BEGINS HERE*/

       	 return {
       	 	pre: function(scope,iElement,iAttributes,controller){
       	 		/*iElement is the instance of the tElemnet*/
       	 		console.log(iAttributes.name+" In Pre");

       	 	},
       	 	post: function(scope,iElement,iAttributes,controller){
       	 		/*iElement is the instance of the tElemnet*/
       	 		/*The best localtion to manipulate the DOM/DATA or made changes to DOM*/
       	 		//Attach any event listner inside post 
       	 		console.log(iAttributes.name+" In Post");

       	 		/*Attach the click listner inside post .iElement is basically an jquery element
       	 		you can access the scope variable of controller here*/
       	 		iElement.on("click",scope.btnClick);

       	 	}
       	 }

       	},
       
       controller:function($scope,$element,$attrs)
       {
		  /*.....This is the best place to start with your data or scope but dont try to access the DOM from here .
			you will be unable to access the DOM element from here......*/
			/*After success fully compiled an instance of the directive is made and available to controller,pre and post*/
		 console.log($attrs.name+" In controller");

		 /*Assign Scope methods and variable here but aceess from post*/
		 $scope.btnClick=function(){
		 	alert($attrs.name);
		 }

       }


        }

    } );


 