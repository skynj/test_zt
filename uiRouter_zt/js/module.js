var app=angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('html',{
		url:'/html',
		templateUrl:'html.html'
	})
	.state('html.tag',{
		url:'/tag',
		template:'<h5>从开始标签（start tag）到结束标签（end tag）的所有代码。</h5>'
	})
	.state('html.attr',{
		url:'/attr',
		templateUrl:'html-attr.html',
		controller:['$scope',function($scope){
			$scope.txt='属性提供了有关 HTML 元素的更多的信息'
		}]
	})
	.state('css',{
		url:'/css',
		templateUrl:'css.html'
	})
	.state('js',{
		url:'/js',
		templateUrl:'js.html'
	})
	.state('js.',{
		url:'/js',
		templateUrl:'js.html'
	});
	$urlRouterProvider.otherwise('/js');
}])