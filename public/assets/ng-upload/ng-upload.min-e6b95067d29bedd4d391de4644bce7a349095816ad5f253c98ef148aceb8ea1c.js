angular.module("ngUpload",[]).directive("uploadSubmit",["$parse",function(){function n(t,e){t=angular.element(t);var a=t.parent();return e=e.toLowerCase(),a&&a[0].tagName.toLowerCase()===e?a:a?n(a,e):null}return{restrict:"AC",link:function(t,e){e.bind("click",function(t){if(t&&(t.preventDefault(),t.stopPropagation()),!e.attr("disabled")){var a=n(e,"form");a.triggerHandler("submit"),a[0].submit()}})}}}]).directive("ngUpload",["$log","$parse","$document",function(n,t,e){function a(n){var t,a=e.find("head");return angular.forEach(a.find("meta"),function(e){e.getAttribute("name")===n&&(t=e)}),angular.element(t)}var r=1;return{restrict:"AC",link:function(e,o,i){function l(n){e.$isUploading=n}function u(){s.unbind("load"),e.$$phase?l(!1):e.$apply(function(){l(!1)});try{var t,a=(s[0].contentDocument||s[0].contentWindow.document).body;try{t=angular.fromJson(a.innerText||a.textContent),e.$$phase?p(e,{content:t}):e.$apply(function(){p(e,{content:t})})}catch(r){t=a.innerHTML;var o="ng-upload: Response is not valid JSON";n.warn(o),f&&(e.$$phase?f(e,{error:o}):e.$apply(function(){f(e,{error:o})}))}}catch(o){n.warn("ng-upload: Server error"),f&&(e.$$phase?f(e,{error:o}):e.$apply(function(){f(e,{error:o})}))}}r++;var d={},p=i.ngUpload?t(i.ngUpload):null,f=i.errorCatcher?t(i.errorCatcher):null,c=i.ngUploadLoading?t(i.ngUploadLoading):null;i.hasOwnProperty("uploadOptionsConvertHidden")&&(d.convertHidden="false"!=i.uploadOptionsConvertHidden),i.hasOwnProperty("uploadOptionsEnableRailsCsrf")&&(d.enableRailsCsrf="false"!=i.uploadOptionsEnableRailsCsrf),i.hasOwnProperty("uploadOptionsBeforeSubmit")&&(d.beforeSubmit=t(i.uploadOptionsBeforeSubmit)),o.attr({target:"upload-iframe-"+r,method:"post",enctype:"multipart/form-data",encoding:"multipart/form-data"});var s=angular.element('<iframe name="upload-iframe-'+r+'" border="0" width="0" height="0" style="width:0px;height:0px;border:none;display:none">');if(d.enableRailsCsrf){var m=angular.element("<input />");m.attr("class","upload-csrf-token"),m.attr("type","hidden"),m.attr("name",a("csrf-param").attr("content")),m.val(a("csrf-token").attr("content")),o.append(m)}o.after(s),l(!1),o.bind("submit",function(n){var t=e[i.name];return t&&t.$invalid?(n.preventDefault(),!1):d.beforeSubmit&&d.beforeSubmit(e,{})===!1?(n.preventDefault(),!1):(s.bind("load",u),d.convertHidden&&angular.forEach(o.find("input"),function(n){var t=angular.element(n);t.attr("ng-model")&&t.attr("type")&&"hidden"==t.attr("type")&&t.attr("value",e.$eval(t.attr("ng-model")))}),void(e.$$phase?(c&&c(e),l(!0)):e.$apply(function(){c&&c(e),l(!0)})))})}}}]);