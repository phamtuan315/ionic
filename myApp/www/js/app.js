// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
app.controller('myController',function($scope){
  $scope.contacts=[
    {'name':"Phạm Anh Tuấn",id:"tuanPA13",'birthday':'517856400'},
    {'name':"Bùi Văn An",id:"anbv",'birthday':'1465318526'},
    {'name':"Trương Hồng Hải",id:"HaiTH7",'birthday':'1465313588'},
    {'name':"Nguyễn Trường Việt Anh",id:"AnhNTV",'birthday':'1465313599'},
    {'name':"Hoàng Anh Phúc",id:"PhucHA",'birthday':'1465313510'}
  ];
});
