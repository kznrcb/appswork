"use strict";app.controller("NoticeCtrl",["$scope","$controller","$timeout","$interval","$routeParams","$location","$log","noticesModel","noticeService","notificationService",function($scope,$controller,$timeout,$interval,$routeParams,$location,$log,noticesModel,noticeService,notificationService){$controller("AbstractCtrl",{$scope:$scope}),$log.debug("NoticeCtrl Start"),$scope.notices=noticesModel.notices.get(),$scope.errors=null,$scope.displayMessages="",$scope.getNoticeList=function(){noticeService.getNotices().success(function(data){$scope.notices=data}).error(function(){})},$scope.selectTitle=function(notice){void 0!=notice.notification_inf_count&&0!=notice.notification_inf_count&&notificationService.deleteNotification(notice.id,2).success(function(){notice.notification_inf_count=0,$scope.getMypageUser()}).error(function(data){var messages=[];$scope.errorsSend=data,$scope.displaySendMessages=$scope.getMessage(messages)})};$scope.getNoticeList()}]);