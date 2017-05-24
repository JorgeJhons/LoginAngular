var app=angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'login.html'
	})
	.when('/dashboard',{
		templateUrl:'/dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});

app.controller('loginCtrl',function($scope, $location){
	$scope.submit=function(){
		var user=$scope.username;
		var password=$scope.password;
		if($scope.username=='jorge'&&  $scope.password=='esminombre')
		{
			window.location
			$location.path('/dashboard');
			alert('Bienvenido jorge');
		} else{
			alert('Usuario no registrado');
		}
	};
});