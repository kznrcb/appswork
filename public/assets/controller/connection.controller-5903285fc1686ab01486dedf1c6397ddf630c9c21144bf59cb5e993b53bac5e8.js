"use strict";app.controller("ConnectionCtrl",["$scope","$controller","$routeParams","$timeout","$interval","$log","connectionsModel","connectionService",function($scope,$controller,$routeParams,$timeout,$interval,$log,connectionsModel,connectionService){$controller("AbstractCtrl",{$scope:$scope}),$log.debug("EmployerCtrl Start"),$scope.connections=connectionsModel.connections.get(),$scope.errors=null,$scope.displayMessages="",$scope.data_kbn=1;var pieData=[{value:0,color:"#46BFBD",highlight:"#5AD3D1",label:"\u65b0\u3057\u3044\u3064\u306a\u304c\u308a\u6570"},{value:0,color:"#FDB45C",highlight:"#FFC870",label:"\u518d\u5ea6\u306e\u3064\u306a\u304c\u308a\u6570"}],weekData={labels:["\u65e5\u66dc","\u6708\u66dc","\u706b\u66dc","\u6c34\u66dc","\u6728\u66dc","\u91d1\u66dc","\u571f\u66dc"],datasets:[{label:"\u65b0\u3057\u3044\u3064\u306a\u304c\u308a\u6570",fillColor:"rgba(70,191,189,0.5)",strokeColor:"rgba(70,191,189,0.8)",highlightFill:"rgba(70,191,189,0.75)",highlightStroke:"rgba(70,191,189,1)",data:[0,0,0,0,0,0,0]},{label:"\u518d\u5ea6\u306e\u3064\u306a\u304c\u308a\u6570",fillColor:"rgba(253,180,92,0.5)",strokeColor:"rgba(253,180,92,0.8)",highlightFill:"rgba(253,180,92,0.75)",highlightStroke:"rgba(253,180,92,1)",data:[0,0,0,0,0,0,0]}]},monthData={labels:["1\u65e5","2\u65e5","3\u65e5","4\u65e5","5\u65e5","6\u65e5","7\u65e5","8\u65e5","9\u65e5","10\u65e5","11\u65e5","12\u65e5","13\u65e5","14\u65e5","15\u65e5","16\u65e5","17\u65e5","18\u65e5","19\u65e5","20\u65e5","21\u65e5","22\u65e5","23\u65e5","24\u65e5","25\u65e5","26\u65e5","27\u65e5","28\u65e5","29\u65e5","30\u65e5","31\u65e5"],datasets:[{label:"\u65b0\u3057\u3044\u3064\u306a\u304c\u308a\u6570",fillColor:"rgba(70,191,189,0.5)",strokeColor:"rgba(70,191,189,0.8)",highlightFill:"rgba(70,191,189,0.75)",highlightStroke:"rgba(70,191,189,1)",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{label:"\u518d\u5ea6\u306e\u3064\u306a\u304c\u308a\u6570",fillColor:"rgba(253,180,92,0.5)",strokeColor:"rgba(253,180,92,0.8)",highlightFill:"rgba(253,180,92,0.75)",highlightStroke:"rgba(253,180,92,1)",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]};$scope.selectChartKbn=function($event,data_kbn){$scope.data_kbn=data_kbn,$scope.setChartData(),$("#btn-this-week").removeClass("btn-default-ex-active")},$scope.getChartKbnName=function(){if(void 0==$scope.data_kbn)return"\u3064\u306a\u304c\u308a";switch($scope.data_kbn){case 1:return"\u4eca\u9031\u306e\u3064\u306a\u304c\u308a";case 2:return"\u4eca\u6708\u306e\u3064\u306a\u304c\u308a";default:return"\u3059\u3079\u3066\u306e\u671f\u9593\u306e\u3064\u306a\u304c\u308a"}},$scope.getConnections=function(){connectionService.getConnectins().success(function(data){$scope.connections=data,$scope.setChartData(),$log.debug(JSON.stringify(data))}).error(function(){})},$scope.setChartData=function(){pieData[0].value=0,pieData[1].value=0;var newList=[],reList=[],allList=[],options={legendTemplate:'<ul style="margin-left: 36px;"><% for (var i=0; i<segments.length; i++){%><li style="color:<%=segments[i].fillColor%>;"><span style="margin-top: 10px;list-style: none; margin-left: -20px; margin-right: 10px;display:inline-block; width: 25px; color:<%=segments[i].fillColor%>; background-color:<%=segments[i].fillColor%>">AA</span><%if(segments[i].label){%><spn style="color: #666666;"><%=segments[i].label%></span><%}%></li><%}%></ul>'};switch(void 0!=$scope.myPieChart&&null!=$scope.myPieChart&&$scope.myPieChart.clear(),void 0!=$scope.myBarChart&&null!=$scope.myBarChart&&$scope.myBarChart.clear(),$scope.data_kbn){case 1:if(void 0!=$scope.connections.this_week_pie_connect&&void 0!=$scope.connections.this_week_pie_connect.length&&0!=$scope.connections.this_week_pie_connect.length&&(pieData[0].value=$scope.connections.this_week_pie_connect[0].cn_new_cnt,pieData[1].value=$scope.connections.this_week_pie_connect[0].cn_re_cnt),weekData.datasets[0].data=[0,0,0,0,0,0,0],weekData.datasets[1].data=[0,0,0,0,0,0,0],void 0!=$scope.connections.this_week_bar_new_connect&&void 0!=$scope.connections.this_week_bar_new_connect.length&&0!=$scope.connections.this_week_bar_new_connect.length){var result=$scope.connections.this_week_bar_new_connect[0];weekData.datasets[0].data=[result.cn1_cnt,result.cn2_cnt,result.cn3_cnt,result.cn4_cnt,result.cn5_cnt,result.cn6_cnt,result.cn7_cnt]}if(void 0!=$scope.connections.this_week_bar_re_connect&&void 0!=$scope.connections.this_week_bar_re_connect.length&&0!=$scope.connections.this_week_bar_re_connect.length){var result=$scope.connections.this_week_bar_re_connect[0];weekData.datasets[1].data=[result.cn1_cnt,result.cn2_cnt,result.cn3_cnt,result.cn4_cnt,result.cn5_cnt,result.cn6_cnt,result.cn7_cnt]}if(void 0!=$scope.connections.this_week_list_connect&&void 0!=$scope.connections.this_week_list_connect.length&&0!=$scope.connections.this_week_list_connect.length){var results=$scope.connections.this_week_list_connect;angular.forEach(results,function(result){1==result.new_flg?newList.push(result):reList.push(result),allList.push(result)})}$scope.myPieChart=new Chart($("#pie-chart").get(0).getContext("2d")).Pie(pieData,options),$("#pie-legend").html($scope.myPieChart.generateLegend()),$scope.myBarChart=new Chart($("#bar-chart").get(0).getContext("2d")).Bar(weekData,{animateScale:!0});break;case 2:if(void 0!=$scope.connections.this_month_pie_connect&&void 0!=$scope.connections.this_month_pie_connect.length&&0!=$scope.connections.this_month_pie_connect.length&&(pieData[0].value=$scope.connections.this_month_pie_connect[0].cn_new_cnt,pieData[1].value=$scope.connections.this_month_pie_connect[0].cn_re_cnt),monthData.datasets[0].data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],monthData.datasets[1].data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],void 0!=$scope.connections.this_month_bar_new_connect&&void 0!=$scope.connections.this_month_bar_new_connect.length&&0!=$scope.connections.this_month_bar_new_connect.length){var results=$scope.connections.this_month_bar_new_connect,days=[];for(i=1;i<=31;i+=1){var dayValue=0;angular.forEach(results,function(result){return result.cn_day==i?void(dayValue=result.cn_cnt):void 0}),days.push(dayValue)}monthData.datasets[0].data=days}if(void 0!=$scope.connections.this_month_bar_re_connect&&void 0!=$scope.connections.this_month_bar_re_connect.length&&0!=$scope.connections.this_month_bar_re_connect.length){var results=$scope.connections.this_month_bar_re_connect,days=[];for(i=1;i<=31;i+=1){var dayValue=0;angular.forEach(results,function(result){return result.cn_day==i?void(dayValue=result.cn_cnt):void 0}),days.push(dayValue)}monthData.datasets[1].data=days}if(void 0!=$scope.connections.this_month_list_connect&&void 0!=$scope.connections.this_month_list_connect.length&&0!=$scope.connections.this_month_list_connect.length){var results=$scope.connections.this_month_list_connect;angular.forEach(results,function(result){1==result.new_flg?newList.push(result):reList.push(result),allList.push(result)})}$scope.myPieChart=new Chart($("#pie-chart").get(0).getContext("2d")).Pie(pieData,options),$("#pie-legend").html($scope.myPieChart.generateLegend()),$scope.myBarChart=new Chart($("#bar-chart").get(0).getContext("2d")).Bar(monthData,{animateScale:!0});break;case 3:if(void 0!=$scope.connections.this_all_pie_connect&&void 0!=$scope.connections.this_all_pie_connect.length&&0!=$scope.connections.this_all_pie_connect.length&&(pieData[0].value=$scope.connections.this_all_pie_connect[0].cn_new_cnt,pieData[1].value=$scope.connections.this_all_pie_connect[0].cn_re_cnt),void 0!=$scope.connections.this_all_list_connect&&void 0!=$scope.connections.this_all_list_connect.length&&0!=$scope.connections.this_all_list_connect.length){var results=$scope.connections.this_all_list_connect;angular.forEach(results,function(result){1==result.new_flg?newList.push(result):reList.push(result),allList.push(result)})}$scope.myPieChart=new Chart($("#pie-chart").get(0).getContext("2d")).Pie(pieData,options),$("#pie-legend").html($scope.myPieChart.generateLegend())}$scope.newList=newList,$scope.reList=reList,$scope.allList=allList},$scope.getMessage=function(data){if(void 0==data||void 0==data.connect_kbn)return"";var userStr='<a href="employer/'+data.from_user_id+'">'+data.user_name+"</a>",title='<a href="work/detail/'+data.item_id+'">'+data.title+"</a>",userInf='<a href="employer/'+data.to_user_id+'">\u30e6\u30fc\u30b6\u30fc\u60c5\u5831</a>';switch(data.connect_kbn){case 1:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e\u52df\u96c6\u300c"+title+"\u300d\u3092\u95b2\u89a7\u3057\u307e\u3057\u305f\u3002";case 2:return userStr+"\u3055\u3093\u306e\u52df\u96c6\u300c"+title+"\u300d\u3092\u95b2\u89a7\u3057\u307e\u3057\u305f\u3002";case 3:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e\u52df\u96c6\u300c"+title+"\u300d\u306b\u63d0\u6848\u3057\u307e\u3057\u305f\u3002";case 4:return userStr+"\u3055\u3093\u306e\u52df\u96c6\u300c"+title+"\u300d\u306b\u63d0\u6848\u3057\u307e\u3057\u305f\u3002";case 5:return userStr+"\u3055\u3093\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u307e\u3057\u305f\u3002";case 6:return"\u3042\u306a\u305f\u304c"+userStr+"\u3055\u3093\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002";case 7:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e"+userInf+"\u3092\u95b2\u89a7\u3057\u307e\u3057\u305f\u3002";case 8:return userStr+"\u3055\u3093\u306e\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u95b2\u89a7\u3057\u307e\u3057\u305f\u3002";case 9:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e\u52df\u96c6\u300c"+title+"\u300d\u306b\u518d\u63d0\u6848\u3057\u307e\u3057\u305f\u3002";case 10:return userStr+"\u3055\u3093\u306e\u52df\u96c6\u300c"+title+"\u300d\u306b\u518d\u63d0\u6848\u3057\u307e\u3057\u305f\u3002";case 11:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e\u52df\u96c6\u300c"+title+"\u300d\u3092\u304a\u6c17\u306b\u5165\u308a\u306b\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002";case 12:return userStr+"\u3055\u3093\u306e\u52df\u96c6\u300c"+title+"\u300d\u3092\u304a\u6c17\u306b\u5165\u308a\u306b\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002";case 13:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e\u52df\u96c6\u300c"+title+"\u300d\u3092\u304a\u6c17\u306b\u5165\u308a\u304b\u3089\u524a\u9664\u3057\u307e\u3057\u305f\u3002";case 14:return userStr+"\u3055\u3093\u306e\u52df\u96c6\u300c"+title+"\u300d\u3092\u304a\u6c17\u306b\u5165\u308a\u304b\u3089\u524a\u9664\u3057\u307e\u3057\u305f\u3002";case 15:return userStr+"\u3055\u3093\u304c\u3042\u306a\u305f\u306e\u52df\u96c6\u300c"+title+"\u300d\u306b\u8cea\u554f\u3092\u6295\u7a3f\u3057\u307e\u3057\u305f\u3002";case 16:return userStr+"\u3055\u3093\u306e\u52df\u96c6\u300c"+title+"\u300d\u306b\u8cea\u554f\u3092\u6295\u7a3f\u3057\u307e\u3057\u305f\u3002"}return""},$scope.isBarChartShow=function(){return void 0==$scope.data_kbn||3==$scope.data_kbn?!1:!0},$scope.getConnections()}]);