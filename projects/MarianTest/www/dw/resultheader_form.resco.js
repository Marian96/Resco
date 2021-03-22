var dwresultheader_form=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=103)}({103:function(e,t,r){e.exports=r(104)},104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=r(35),i=function(){function e(){}return e.prototype.initialize=function(){MobileCRM.UI.EntityForm.onCommand("Delete",(function(e){var t=e.entity.properties.dw_serviceorderid.id,r=e.entity.properties.dw_teststepresultheaderid;n.updateTestResultStatusByServiceorderId(t,0).then((function(){(new o.ResultHeader).deleteResultHeaderById(r).then((function(){MobileCRM.UI.FormManager.showEditDialog("dw_serviceorder",t,null)}),(function(e){MobileCRM.bridge.alert(e)}))}),(function(e){MobileCRM.bridge.alert(e)}))}),!0)},e}();t.ResultheaderForm=i},17:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),o=r(5),i=function(){function e(){}return e.prototype.updateServiceOrderAndDispatchStatusInProgress=function(e){var t=this;return new Promise((function(r,i){o.retrieveServiceorderById(e).then((function(o){if(null==o||0===o.length)return i("ServiceOrder cannot get recieved!");var u=null!=o[0].dw_dispatchid?o[0].dw_dispatchid.id:null,d=o[0].dw_serviceorderstatus;if(1!=d)return r();if(1==d){var c=new MobileCRM.DynamicEntity("dw_serviceorder",e);c.properties.dw_serviceorderstatus=1e8,c.save((function(e){return e?i(e):null==u||""===u?r():void n.retrieveDispatchStatusById(u).then((function(e){return null==e||1!==e.length||1e8!=e[0].dw_dispatchstatus?r():void t.updateDispatchStatus(u,100000001).then((function(){return r()}))})).catch((function(e){return i(e)}))}))}}))}))},e.prototype.updateServiceOrderStatus=function(e,t){return new Promise((function(r,n){var o=new MobileCRM.DynamicEntity("dw_serviceorder",e);o.properties.dw_serviceorderstatus=t,o.save((function(e){return e?n(e):r()}))}))},e.prototype.updateDispatchStatus=function(e,t){return new Promise((function(r,n){var o=new MobileCRM.DynamicEntity("dw_dispatch",e);o.properties.dw_dispatchstatus=t,o.save((function(e){return e?n(e):r()}))}))},e}();t.ServiceStatusManager=i},18:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveDispatchStatusById=function(e){return new Promise((function(t,r){var n=new MobileCRM.FetchXml.Entity("dw_dispatch");n.addAttribute("dw_dispatchstatus"),n.filter=new MobileCRM.FetchXml.Filter,n.filter.where("dw_dispatchid","eq",e),new MobileCRM.FetchXml.Fetch(n).execute("JSON",(function(e){t(e)}),(function(e){r(e)}),null)}))}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(37);var n=r(17),o=function(){function e(){}return e.prototype.retrieveResultHeadersByServiceOrderIds=function(e){return new Promise((function(t,r){var n=new MobileCRM.FetchXml.Entity("dw_teststepresultheader");n.addAttributes(),n.filter=new MobileCRM.FetchXml.Filter,n.filter.isIn("dw_serviceorderid",e),n.addLink("dw_serviceorder","dw_serviceorderid","dw_serviceorderid","inner").addAttribute("dw_serviceordernumber"),new MobileCRM.FetchXml.Fetch(n).execute("JSON",(function(e){null!=e&&0<e.length&&t(e),t(null)}),(function(e){r(e)}),null)}))},e.prototype.retrieveResultHeadersByServiceOrderNumber=function(e){return new Promise((function(t,r){var n=new MobileCRM.FetchXml.Entity("dw_teststepresultheader");n.addAttributes();var o=n.addLink("dw_serviceorder","dw_serviceorderid","dw_serviceorderid","inner");o.addAttribute("dw_serviceordernumber"),o.filter=new MobileCRM.FetchXml.Filter,o.filter.where("dw_serviceordernumber","eq",e),new MobileCRM.FetchXml.Fetch(n).execute("JSON",(function(e){null!=e&&0<e.length&&t(e),t(null)}),(function(e){r(e)}),null)}))},e.prototype.retrieveResultHeadersByIds=function(e){return new Promise((function(t,r){var n=new MobileCRM.FetchXml.Entity("dw_teststepresultheader");n.addAttributes(),n.filter=new MobileCRM.FetchXml.Filter,n.filter.isIn("dw_teststepresultheaderid",e),new MobileCRM.FetchXml.Fetch(n).execute("JSON",(function(e){null!=e&&0<e.length&&t(e),t(null)}),(function(e){r(e)}),null)}))},e.prototype.updateResultHeader=function(e){return new Promise((function(t,r){var n=new MobileCRM.DynamicEntity("dw_teststepresultheader",e.ResultHeaderId),o=new MobileCRM.Reference("systemuser",e.SystemUserId),i=n.properties;i.dw_comment=e.Comment,i.dw_overallresult=e.OverallResult,i.dw_signatureid=o,i.dw_testinstructionclosedate=new Date,i.dw_mobileofflineaction=1e8,null!=e.Tools&&(i.dw_tools=Base64.decode(e.Tools)),n.save((function(e){return e?r(e):t(n.properties)}))}))},e.prototype.deleteResultHeaderById=function(e){return new Promise((function(t,r){MobileCRM.DynamicEntity.deleteById("dw_teststepresultheader",e,(function(){return t(!0)}),(function(e){return r(e)}),null)}))},e.prototype.createResultHeader=function(e){return new Promise((function(t,r){var o=MobileCRM.DynamicEntity.createNew("dw_teststepresultheader"),i=o.properties,u=new MobileCRM.Reference("dw_serviceorder",e.ServiceOrderId),d=new MobileCRM.Reference("dw_testprocedure",e.TestProcedureId),c=new MobileCRM.Reference("dw_language",e.LanguageId);i.dw_serviceorderid=u,i.dw_languageid=c,i.dw_testprocedureid=d,i.dw_currencyformat=e.CurrencySymbol,i.dw_decimalsymbol=e.DecimalSymbol,i.dw_digitgroupingsymbol=e.NumberSeparator,i.dw_shortdateformat=e.UserDateFormat,i.dw_testinstructionstartdate=new Date,i.dw_name=e.Name,i.dw_foldernumber=e.FolderNumber,o.save((function(i){if(i)return r(i);(new n.ServiceStatusManager).updateServiceOrderAndDispatchStatusInProgress(e.ServiceOrderId).then((function(){var e={createdby:o.properties.createdby,createdon:o.properties.createdon,dw_currencyformat:o.properties.dw_currencyformat,dw_decimalsymbol:o.properties.dw_decimalsymbol,dw_digitgroupingsymbol:o.properties.dw_digitgroupingsymbol,dw_languageid:o.properties.dw_languageid,dw_modifiedby:o.properties.dw_modifiedby,dw_modifiedon:o.properties.dw_modifiedon,dw_name:o.properties.dw_name,dw_overallresult:o.properties.dw_overallresult,dw_ownerid:o.properties.dw_ownerid,dw_serviceorderid:o.properties.dw_serviceorderid,dw_shortdateformat:o.properties.dw_shortdateformat,dw_testinstructionstartdate:o.properties.dw_testinstructionstartdate,dw_testprocedureid:o.properties.dw_testprocedureid,dw_teststepresultheaderid:o.properties.dw_teststepresultheaderid};return t(e)})).catch((function(e){return r(e)}))}))}))},e}();t.ResultHeader=o},37:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){module.exports=t(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(e){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},r=0,n=e.length;r<n;r++)t[e.charAt(r)]=r;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(1<e.length?e.charCodeAt(1):0)<<8|(2<e.length?e.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),2<=t?"=":b64chars.charAt(r>>>6&63),1<=t?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,r=t%4,n=(0<t?b64tab[e.charAt(0)]<<18:0)|(1<t?b64tab[e.charAt(1)]<<12:0)|(2<t?b64tab[e.charAt(2)]<<6:0)|(3<t?b64tab[e.charAt(3)]:0),o=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return o.length-=[0,0,2,1][r],o.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__(38))},38:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveServiceorderById=function(e){return new Promise((function(t,r){var n=new MobileCRM.FetchXml.Entity("dw_serviceorder");n.addAttributes(),n.filter=new MobileCRM.FetchXml.Filter,n.filter.where("dw_serviceorderid","eq",e),new MobileCRM.FetchXml.Fetch(n).execute("JSON",(function(e){t(e)}),(function(e){r(e)}),null)}))},t.retrieveServiceorderByIds=function(e){return new Promise((function(t,r){var n=new MobileCRM.FetchXml.Entity("dw_serviceorder");n.addAttributes(),n.filter=new MobileCRM.FetchXml.Filter,n.filter.isIn("dw_serviceorderid",e),new MobileCRM.FetchXml.Fetch(n).execute("JSON",(function(e){t(e)}),(function(e){r(e)}),null)}))},t.retrieveAllServiceorders=function(){return new Promise((function(e,t){var r=new MobileCRM.FetchXml.Entity("dw_serviceorder");r.addAttributes();var n=new MobileCRM.FetchXml.Fetch(r);n.count=1e3,n.execute("JSON",(function(t){e(t)}),(function(e){t(e)}),null)}))},t.updateTestResultStatus=function(e,t){return new Promise((function(r,n){var o=new MobileCRM.DynamicEntity("dw_serviceorder",e.dw_serviceorderid.id);o.properties.dw_testprocedurestatus=t,o.save((function(e){return e?n(e):r(o.properties)}))}))},t.updateTestResultStatusByServiceorderId=function(e,t){return new Promise((function(r,n){var o=new MobileCRM.DynamicEntity("dw_serviceorder",e);o.properties.dw_testprocedurestatus=t,o.save((function(e){return e?n(e):r()}))}))}}});
//# sourceMappingURL=resultheader_form.resco.js.map