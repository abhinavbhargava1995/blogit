var app =angular.module('myApp', []);

app.config(function(){
    Stamplay.init("abhinav");
})

app.controller('myCtrl', function($scope){

    $scope.message = "Welcome to BlogIt!";

})