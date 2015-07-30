angular.module("ngUpload",[]).directive("uploadSubmit",["$parse",function(){function getParentNodeByTagName(element,tagName){element=angular.element(element);var parent=element.parent();return tagName=tagName.toLowerCase(),parent&&parent[0].tagName.toLowerCase()===tagName?parent:parent?getParentNodeByTagName(parent,tagName):null}return{restrict:"AC",link:function(scope,element){element.bind("click",function($event){if($event&&($event.preventDefault(),$event.stopPropagation()),!element.attr("disabled")){var form=getParentNodeByTagName(element,"form");form.triggerHandler("submit"),form[0].submit()}})}}}]).directive("ngUpload",["$log","$parse","$document",function($log,$parse,$document){function getMetaTagWithName(name){var match,head=$document.find("head");return angular.forEach(head.find("meta"),function(element){element.getAttribute("name")===name&&(match=element)}),angular.element(match)}var iframeID=1;return{restrict:"AC",link:function(scope,element,attrs){function setLoadingState(state){scope.$isUploading=state}function uploadEnd(){iframe.unbind("load"),scope.$$phase?setLoadingState(!1):scope.$apply(function(){setLoadingState(!1)});try{var content,bodyContent=(iframe[0].contentDocument||iframe[0].contentWindow.document).body;try{content=JSON.parse(bodyContent.innerText||bodyContent.textContent),scope.$$phase?fn(scope,{content:content}):scope.$apply(function(){fn(scope,{content:content})})}catch(e){content=bodyContent.innerHTML;var error="ng-upload: Response is not valid JSON";$log.warn(error),errorCatcher&&(scope.$$phase?errorCatcher(scope,{error:error}):scope.$apply(function(){errorCatcher(scope,{error:error})}))}}catch(error){$log.warn("ng-upload: Server error"),errorCatcher&&(scope.$$phase?errorCatcher(scope,{error:error}):scope.$apply(function(){errorCatcher(scope,{error:error})}))}}iframeID++;var options={},fn=attrs.ngUpload?$parse(attrs.ngUpload):null,errorCatcher=attrs.errorCatcher?$parse(attrs.errorCatcher):null,loading=attrs.ngUploadLoading?$parse(attrs.ngUploadLoading):null;attrs.hasOwnProperty("uploadOptionsConvertHidden")&&(options.convertHidden="false"!=attrs.uploadOptionsConvertHidden),attrs.hasOwnProperty("uploadOptionsEnableRailsCsrf")&&(options.enableRailsCsrf="false"!=attrs.uploadOptionsEnableRailsCsrf),attrs.hasOwnProperty("uploadOptionsBeforeSubmit")&&(options.beforeSubmit=$parse(attrs.uploadOptionsBeforeSubmit)),element.attr({target:"upload-iframe-"+iframeID,method:"post",enctype:"multipart/form-data",encoding:"multipart/form-data"});var iframe=angular.element('<iframe name="upload-iframe-'+iframeID+'" border="0" width="0" height="0" style="width:0px;height:0px;border:none;display:none">');if(options.enableRailsCsrf){var input=angular.element("<input />");input.attr("class","upload-csrf-token"),input.attr("type","hidden"),input.attr("name",getMetaTagWithName("csrf-param").attr("content")),input.val(getMetaTagWithName("csrf-token").attr("content")),element.append(input)}element.after(iframe),setLoadingState(!1),element.bind("submit",function($event){var formController=scope[attrs.name];return formController&&formController.$invalid?($event.preventDefault(),!1):options.beforeSubmit&&options.beforeSubmit(scope,{})===!1?($event.preventDefault(),!1):(iframe.bind("load",uploadEnd),options.convertHidden&&angular.forEach(element.find("input"),function(el){var _el=angular.element(el);_el.attr("ng-model")&&_el.attr("type")&&"hidden"==_el.attr("type")&&_el.attr("value",scope.$eval(_el.attr("ng-model")))}),void(scope.$$phase?(loading&&loading(scope),setLoadingState(!0)):scope.$apply(function(){loading&&loading(scope),setLoadingState(!0)})))})}}}]);