"use strict";var app=angular.module("appswork",["ngRoute","ngUpload"]).config(function($routeProvider,$locationProvider){$locationProvider.html5Mode(!0),$routeProvider.when("/",{templateUrl:"/templates/index.html",controller:"IndexCtrl"}).when("/work",{templateUrl:"/templates/index.html",controller:"IndexCtrl"}).when("/message",{templateUrl:"/templates/message.html",controller:"MessageCtrl"}).when("/message/:rId",{templateUrl:"/templates/message.html",controller:"MessageCtrl"}).when("/message/target/:rId",{templateUrl:"/templates/message.html",controller:"MessageCtrl"}).when("/employer/:rId",{templateUrl:"/templates/employer.html",controller:"EmployerCtrl"}).when("/work/detail/:rId",{templateUrl:"/templates/detail.html",controller:"WorkDetailCtrl"}).when("/mypage",{templateUrl:"/templates/mypage.html",controller:"MypageCtrl"}).when("/connection",{templateUrl:"/templates/connection.html",controller:"ConnectionCtrl"}).when("/mypage/:rId",{templateUrl:"/templates/mypage.html",controller:"MypageCtrl"}).when("/privacypolicy",{templateUrl:"/templates/privacypolicy.html",controller:"AbstractCtrl"}).when("/agreement",{templateUrl:"/templates/agreement.html",controller:"AbstractCtrl"}).otherwise({redirectTo:"/"})});app.config(["$httpProvider",function($httpProvider){$httpProvider.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},$httpProvider.defaults.headers.post["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$httpProvider.defaults.headers.put["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$httpProvider.defaults.headers.patch["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),$httpProvider.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content")}]),app.filter("lineBreak",function($sce){return function(input){if(void 0==input||null==input)return"";var replacedHtml=input.replace(/"/g,"&quot;").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return $sce.trustAsHtml(replacedHtml.replace(/\xa5n|\xa5r/g,"<br>").replace(/[\n\r]/g,"<br />"))}}),app.filter("doTrustAsHtml",function($sce){return function(input){return void 0==input||null==input?"":$sce.trustAsHtml(input)}});