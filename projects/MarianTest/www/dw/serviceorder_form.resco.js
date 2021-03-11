var dwserviceorder_form=function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=107)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServiceorderEntityNames=function(){this.entityLogicalName="dw_serviceorder",this.id="id",this.odataEntitySetName="dw_serviceorders",this.ownerIdSchemaName="OwnerId",this.createdby="createdby",this.createdon="createdon",this.shiptoparty="dw_accountid",this.accountingindicatorid="dw_accountingindicatorid",this.accountingindicatorlocked="dw_accountingindicatorlocked",this.activitycodedate="dw_activitycodedate",this.activitycodeid="dw_activitycodeid",this.activitycodename="dw_activitycodename",this.barcodenumber="dw_barcodenumber",this.basicenddate="dw_basicenddate",this.basicstartdate="dw_basicstartdate",this.charge="dw_charge",this.companycode="dw_companycode",this.completedby="dw_completedby",this.completedon="dw_completedon",this.completioncheckresult="dw_completioncheckresult",this.confirmationdate="dw_confirmationdate",this.contractnumberid="dw_contractnumberid",this.contracttypeid="dw_contracttypeid",this.costcenter="dw_costcenter",this.costestimationacceptancedate="dw_costestimationacceptancedate",this.costestimationcreationdate="dw_costestimationcreationdate",this.costestimationresultid="dw_costestimationresultid",this.costestimationresultname="dw_costestimationresultname",this.costestimationsenttoerp="dw_costestimationsenttoerp",this.dispatchid="dw_dispatchid",this.equipmentnumber="dw_equipmentnumber",this.erpcreated="dw_erpcreated",this.fcaserviceorderid="dw_fcaserviceorderid",this.fsetestcompletiondate="dw_fsetestcompletiondate",this.gatekeeperreason="dw_gatekeeperreason",this.groupcriteria="dw_groupcriteria",this.groupvalue="dw_groupvalue",this.groupvalueId="dw_groupvalueid",this.installedbaseid="dw_installedbaseid",this.internalorder="dw_internalorder",this.invoiceblockoact="dw_invoiceblockoact",this.maintenancesequence="dw_maintenancesequence",this.materialnumberid="dw_materialnumberid",this.mobileofflineaction="dw_mobileofflineaction",this.mobileofflineform="dw_mobileofflineform",this.officeaction="dw_officeaction",this.plannedservicetime="dw_plannedservicetime",this.planningvalue="dw_planningvalue",this.prioritycode="dw_prioritycode",this.problemreportedon="dw_problemreportedon",this.productgroupid="dw_productgroupid",this.proformacompletiondate="dw_proformacompletiondate",this.purchaseorderno="dw_purchaseorderno",this.purchaserfromcontact="dw_purchaserfromcontact",this.reportedproblem="dw_reportedproblem",this.serialnumber="dw_serialnumber",this.servicenotification="dw_servicenotification",this.serviceorderid="dw_serviceorderid",this.serviceordernumber="dw_serviceordernumber",this.serviceorderstatus="dw_serviceorderstatus",this.serviceorderstatusreason="dw_serviceorderstatusreason",this.serviceordertype="dw_serviceordertype",this.serviceproductid="dw_serviceproductid",this.serviceproductquantity="dw_serviceproductquantity",this.shippinginformation="dw_shippinginformation",this.signedbyalternative="dw_signedbyalternative",this.signedbyid="dw_signedbyid",this.softwareversionid="dw_softwareversionid",this.soldtopartyid="dw_soldtopartyid",this.sortcriteria="dw_sortcriteria",this.subtotalmaterial="dw_subtotalmaterial",this.subtotalservice="dw_subtotalservice",this.testprocedurestatus="dw_testprocedurestatus",this.testtype="dw_testtype",this.totalamount="dw_totalamount",this.uniquedeviceidentifier="dw_uniquedeviceidentifier",this.workperformed="dw_workperformed",this.modifiedby="modifiedby",this.modifiedon="modifiedon",this.ownerid="ownerid",this.statecode="statecode",this.statuscode="statuscode",this.transactioncurrencyid="transactioncurrencyid",this.sortOrder="dw_sortorder",this.saveAsReport="dw_saveasreport"}},107:function(e,t,r){e.exports=r(108)},108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(109),n=r(17),o=function(){function e(){}return e.prototype.initialize=function(){var e=this;MobileCRM.UI.EntityForm.onCommand("custom_ServiceOrderComplete",(function(t){e.setMobileOfflineForm(t,1e8)}),!0),MobileCRM.UI.EntityForm.onCommand("custom_ServiceOrderCancel",(function(t){e.setMobileOfflineForm(t,100000001)}),!0),MobileCRM.UI.EntityForm.onCommand("custom_Return",(function(t){e.setMobileOfflineForm(t,-1)}),!0),MobileCRM.UI.EntityForm.onPostSave((function(e){if(new i.ServiceorderCancel(e).deleteAllRelatedRecords(),null!=e.entity.properties.WorkPerformedChanged&&e.entity.properties.WorkPerformedChanged||null!=e.entity.properties.StatusChangedToCostEstimation&&e.entity.properties.StatusChangedToCostEstimation){var t=e.suspendPostSave();(new n.ServiceStatusManager).updateServiceOrderAndDispatchStatusInProgress(e.entity.id).then((function(){t.resumePostSave()})).catch((function(e){MobileCRM.bridge.alert(e)}))}}),!0,null),MobileCRM.bridge.onGlobalEvent("updateText",(function(e){MobileCRM.UI.EntityForm.requestObject((function(t){return t.entity.properties[e.field]&&0<t.entity.properties[e.field].length?t.entity.properties[e.field]=t.entity.properties[e.field]+"\r\n"+e.text:t.entity.properties[e.field]=e.text,MobileCRM.UI.Form.showToast("Description updated.",""),t.selectTab("Reports",(function(e){null!=e&&MobileCRM.bridge.alert(e)})),!0}),(function(e){MobileCRM.bridge.alert(e)}))}),!0),MobileCRM.UI.EntityForm.onChange((function(e){var t=e.context.changedItem,r=e.entity.properties["Dispatch.IsNew"];"dw_mobileofflineform"===t?MobileCRM.UI.EntityForm.save():"dw_dispatchid"===t&&r&&MobileCRM.UI.EntityForm.saveAndClose()}),!0,null)},e.prototype.setMobileOfflineForm=function(e,t){e.entity.properties.dw_mobileofflineform=t,MobileCRM.UI.EntityForm.save()},e}();t.ServiceorderForm=o},109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),n=r(40),o=r(110),s=r(112),a=r(114),c=function(){function e(e){this.entityForm=e}return e.prototype.deleteAllRelatedRecords=function(){var e=this,t=new i.ServiceorderEntityNames,r=this.entityForm.entity,n=r.properties[t.serviceorderstatus],o=r.id;if(3===n){var s=this.entityForm.suspendPostSave();this.deleteServiceorderItemRecords(o).then((function(t){t&&e.deleteResultsHeadeRecords(o).then((function(e){e&&s.resumePostSave()}))}))}},e.prototype.deleteServiceorderItemRecords=function(e){var t=this;return(new n.ServiceOrderItem).retrieveByServiceorderId(e).then((function(e){if(e&&0<e.length){var r=[];e.forEach((function(e){r.push(e.id)}));var i=t.createServiceorderItemDeletePromises(r);return t.resolveAllDeletePromises(i)}return Promise.resolve(!0)}))},e.prototype.resolveAllDeletePromises=function(e){return Promise.all(e).then((function(e){var t=!0;return e.forEach((function(e){e||(t=!1)})),Promise.resolve(t)}))},e.prototype.createServiceorderItemDeletePromises=function(e){var t=[];return e.forEach((function(e){var r=new n.ServiceOrderItem;t.push(r.deleteRecord(e))})),t},e.prototype.deleteResultsHeadeRecords=function(e){var t=this;return(new s.ResultHeaderData).retrieveByServiceorderId(e).then((function(e){if(e&&0<e.length){var r=[];if(e.forEach((function(e){r.push(e.id)})),0<r.length){var i=[];return r.forEach((function(e){i.push(t.deleteTestStepResultRecords(e)),i.push(t.deleteTestStepResultDocumentRecords(e))})),i.sort(),t.resolveAllDeletePromises(i).then((function(e){if(e){var i=t.createResultHeaderDeletePromises(r);return t.resolveAllDeletePromises(i)}return Promise.resolve(e)}))}return Promise.resolve(!0)}return Promise.resolve(!0)}))},e.prototype.createResultHeaderDeletePromises=function(e){var t=[];return e&&0<e.length&&e.forEach((function(e){var r=new s.ResultHeaderData;t.push(r.deleteRecord(e))})),t},e.prototype.deleteTestStepResultRecords=function(e){var t=this;return(new o.TeststepResultData).retrieveByResultHeaderId(e).then((function(e){var r=[];if(e&&0<e.length){e.forEach((function(e){r.push(e.id)}));var i=t.createTeststepResultDeletePromises(r);return t.resolveAllDeletePromises(i)}return Promise.resolve(!0)}))},e.prototype.createTeststepResultDeletePromises=function(e){var t=[];return e&&0<e.length&&e.forEach((function(e){var r=new o.TeststepResultData;t.push(r.deleteRecord(e))})),t},e.prototype.deleteTestStepResultDocumentRecords=function(e){var t=this;return(new a.TeststepResultDocumentData).retrieveByResultHeaderId(e).then((function(e){if(e&&0<e.length){var r=[];e.forEach((function(e){r.push(e.id)}));var i=t.createTestStepResultDocumentDeletePromises(r);return t.resolveAllDeletePromises(i)}return Promise.resolve(!0)}))},e.prototype.createTestStepResultDocumentDeletePromises=function(e){var t=[];return e&&0<e.length&&e.forEach((function(e){var r=new a.TeststepResultDocumentData;t.push(r.deleteRecord(e))})),t},e}();t.ServiceorderCancel=c},110:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(111),n=function(){function e(){}return e.prototype.retrieveByResultHeaderId=function(e){return new Promise((function(t,r){var n=new i.TestStepResultEnityNames,o=new MobileCRM.FetchXml.Entity(n.entityLogicalName);o.addAttributes(),o.filter=new MobileCRM.FetchXml.Filter,o.filter.where(n.teststepResultHeaderId,"eq",e),new MobileCRM.FetchXml.Fetch(o).execute("DynamicEntities",(function(e){t(e)}),(function(e){return r(e)}),null)}))},e.prototype.deleteRecord=function(e){return new Promise((function(t,r){var n=new i.TestStepResultEnityNames;MobileCRM.DynamicEntity.deleteById(n.entityLogicalName,e,(function(){t(!0)}),(function(t){MobileCRM.bridge.alert("Delete TeststepResult Id ["+e+"] error:\n"+t),r(!1)}))}))},e}();t.TeststepResultData=n},111:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TestStepResultEnityNames=function(){this.entityLogicalName="dw_teststepresult",this.teststepResultId="dw_teststepresultid",this.teststepResultHeaderId="dw_teststepresultheaderid"}},112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(113),n=function(){function e(){}return e.prototype.retrieveByServiceorderId=function(e){return new Promise((function(t,r){var n=new i.ResultHeaderEntityNames,o=new MobileCRM.FetchXml.Entity(n.entityLogicalName);o.addAttributes(),o.filter=new MobileCRM.FetchXml.Filter,o.filter.where(n.serviceorderId,"eq",e),new MobileCRM.FetchXml.Fetch(o).execute("DynamicEntities",(function(e){t(e)}),(function(e){return r(e)}),null)}))},e.prototype.deleteRecord=function(e){return new Promise((function(t,r){var n=new i.ResultHeaderEntityNames;MobileCRM.DynamicEntity.deleteById(n.entityLogicalName,e,(function(){t(!0)}),(function(t){MobileCRM.bridge.alert("Delete ResultHeader Id ["+e+"] error:\n"+t),r(!1)}))}))},e}();t.ResultHeaderData=n},113:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ResultHeaderEntityNames=function(){this.entityLogicalName="dw_teststepresultheader",this.serviceorderId="dw_serviceorderid",this.teststepResultHeaderId="dw_teststepresultheaderid"}},114:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(115),n=function(){function e(){}return e.prototype.retrieveByResultHeaderId=function(e){return new Promise((function(t,r){var n=new i.TeststepResultDocumentEntityNames,o=new MobileCRM.FetchXml.Entity(n.entityLogicalName);o.addAttributes(),o.filter=new MobileCRM.FetchXml.Filter,o.filter.where(n.teststepResultHeaderId,"eq",e),new MobileCRM.FetchXml.Fetch(o).execute("DynamicEntities",(function(e){t(e)}),(function(e){return r(e)}),null)}))},e.prototype.deleteRecord=function(e){return new Promise((function(t,r){var n=new i.TeststepResultDocumentEntityNames;MobileCRM.DynamicEntity.deleteById(n.entityLogicalName,e,(function(){t(!0)}),(function(t){MobileCRM.bridge.alert("Delete TeststepResult Document Id ["+e+"] error:\n"+t),r(!1)}))}))},e}();t.TeststepResultDocumentData=n},115:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TeststepResultDocumentEntityNames=function(){this.entityLogicalName="dw_teststepresultdocument",this.teststepDocumentId="dw_teststepdocumentid",this.teststepResultHeaderId="dw_resultheaderid"}},17:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(18),n=r(5),o=function(){function e(){}return e.prototype.updateServiceOrderAndDispatchStatusInProgress=function(e){var t=this;return new Promise((function(r,o){n.retrieveServiceorderById(e).then((function(n){if(null==n||0===n.length)return o("ServiceOrder cannot get recieved!");var s=null!=n[0].dw_dispatchid?n[0].dw_dispatchid.id:null,a=n[0].dw_serviceorderstatus;if(1!=a)return r();if(1==a){var c=new MobileCRM.DynamicEntity("dw_serviceorder",e);c.properties.dw_serviceorderstatus=1e8,c.save((function(e){return e?o(e):null==s||""===s?r():void i.retrieveDispatchStatusById(s).then((function(e){return null==e||1!==e.length||1e8!=e[0].dw_dispatchstatus?r():void t.updateDispatchStatus(s,100000001).then((function(){return r()}))})).catch((function(e){return o(e)}))}))}}))}))},e.prototype.updateServiceOrderStatus=function(e,t){return new Promise((function(r,i){var n=new MobileCRM.DynamicEntity("dw_serviceorder",e);n.properties.dw_serviceorderstatus=t,n.save((function(e){return e?i(e):r()}))}))},e.prototype.updateDispatchStatus=function(e,t){return new Promise((function(r,i){var n=new MobileCRM.DynamicEntity("dw_dispatch",e);n.properties.dw_dispatchstatus=t,n.save((function(e){return e?i(e):r()}))}))},e}();t.ServiceStatusManager=o},18:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveDispatchStatusById=function(e){return new Promise((function(t,r){var i=new MobileCRM.FetchXml.Entity("dw_dispatch");i.addAttribute("dw_dispatchstatus"),i.filter=new MobileCRM.FetchXml.Filter,i.filter.where("dw_dispatchid","eq",e),new MobileCRM.FetchXml.Fetch(i).execute("JSON",(function(e){t(e)}),(function(e){r(e)}),null)}))}},26:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(9);t.ServiceOrderItemEntity=function(e){if(e){var t=new i.ServiceorderitemEntityNames;this.serviceorderItemId=e.properties[t.serviceorderitemid],this.accountingindicator=e.properties[t.accountingindicator],this.assembly=e.properties[t.assembly],this.assemblyPart=e.properties[t.assemblypart],this.bulkRegistration=e.properties[t.bulkregistration],this.bulkRegistrationItem=e.properties[t.bulkregistrationitem],this.chargeTime=e.properties[t.chargetime],this.createdBy=e.properties[t.createdby],this.currency=e.properties[t.transactioncurrencyid],this.description=e.properties[t.description],this.dispatchNo=e.properties[t.dispatchId],this.displayOnPrintout=e.properties[t.displayonprintout],this.endTime=e.properties[t.endtime],this.error=e.properties[t.error],this.errorCategory=e.properties[t.errorcategory],this.errorCause=e.properties[t.errorcause],this.executionDate=e.properties[t.executiondate],this.localMaterialType=e.properties[t.localmaterialtype],this.materialDescription=e.properties[t.materialdescription],this.materialNo=e.properties[t.materialno],this.materialNoOfErrorPart=e.properties[t.materialnooferrorpart],this.modifiedBy=e.properties[t.modifiedby],this.price=e.properties[t.price],this.quantity=e.properties[t.quantity],this.serialNoOfErrorPart=e.properties[t.serialnooferrorpart],this.serialNoOfNewPart=e.properties[t.serialnoofnewpart],this.serviceOrder=e.properties[t.serviceorderId],this.startTime=e.properties[t.starttime],this.subAssembly=e.properties[t.subassembly],this.localMaterial=e.properties[t.localmaterialId],this.total=e.properties[t.total],this.uniqueDeviceIdentifier=e.properties[t.uniquedeviceidentifier],this.unit=e.properties[t.unit],this.unitId=e.properties[t.unitId],this.workCenter=e.properties[t.workcenter],this.owner=e.properties[t.owner]}}},40:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),n=r(8),o=r(42),s=r(26),a=function(){function e(){}return e.prototype.retrieveById=function(e){return new Promise((function(t,r){var n=new i.ServiceorderitemEntityNames,o=new MobileCRM.FetchXml.Entity(n.entityLogicalName);o.addAttributes(),o.filter=new MobileCRM.FetchXml.Filter,o.filter.where(n.serviceorderitemid,"eq",e),new MobileCRM.FetchXml.Fetch(o).execute("DynamicEntities",(function(e){e&&0<e.length&&e[0]?t(e[0]):r("ServiceOrderItem.retrieveById: record not found!")}),(function(e){r("ServiceOrderItem.retrieveById error:\n "+e)}),null)}))},e.prototype.retrieveByServiceorderId=function(e){return new Promise((function(t,r){var n=new i.ServiceorderitemEntityNames,o=new MobileCRM.FetchXml.Entity(n.entityLogicalName);o.addAttributes(),o.filter=new MobileCRM.FetchXml.Filter,o.filter.where(n.serviceorderId,"eq",e),new MobileCRM.FetchXml.Fetch(o).execute("DynamicEntities",(function(e){t(e)}),(function(e){return r(e)}),null)}))},e.prototype.retrieveRecordsWithoutPrice=function(e){return this.retrieveByServiceorderId(e).then((function(e){var t=new i.ServiceorderitemEntityNames,r=[];return e.forEach((function(e){e.properties&&(e.properties[t.price]<=0||null===e.properties[t.price]||void 0===e.properties[t.price])&&r.push(e)})),Promise.resolve(r)}))},e.prototype.retrieveByActivityTypeServiceorderId=function(e,t){return new Promise((function(r,n){var o=new i.ServiceorderitemEntityNames,s=new MobileCRM.FetchXml.Entity(o.entityLogicalName);s.addAttributes();var a=new MobileCRM.FetchXml.Filter;a.where(o.serviceorderId,"eq",e);var c=new MobileCRM.FetchXml.Filter;c.where(o.localmaterialtype,"eq",t),s.filter=new MobileCRM.FetchXml.Filter,s.filter.filters.push(a),s.filter.filters.push(c),new MobileCRM.FetchXml.Fetch(s).execute("DynamicEntities",(function(e){r(e)}),(function(e){var t="retrieveByActivityTypeServiceorderId error: \n"+e;return alert(t),n(t)}),null)}))},e.prototype.retrieveRecordsWithFilter=function(e){return new Promise((function(t,r){var n=new i.ServiceorderitemEntityNames,o=new MobileCRM.FetchXml.Entity(n.entityLogicalName);o.addAttributes(),o.filter=new MobileCRM.FetchXml.Filter,o.filter.filters=e,new MobileCRM.FetchXml.Fetch(o).execute("DynamicEntities",(function(e){t(e)}),(function(e){r("ServiceOrderItem.retrieveRecordsWithFilter error:\n "+e)}),null)}))},e.prototype.retrieveRelatedLocalMaterialWithTraceablePartsFlagYes=function(e){return new Promise((function(t,r){var o=new i.ServiceorderitemEntityNames,s=new n.LocalmaterialEntityNames,a=new MobileCRM.FetchXml.Entity(o.entityLogicalName);a.addAttributes();var c=new MobileCRM.FetchXml.Filter;c.type="and",c.where(o.serviceorderId,"eq",e),a.filter=new MobileCRM.FetchXml.Filter,a.filter.filters.push(c);var d=a.addLink(s.entityLogicalName,s.localmaterialid,o.localmaterialId,"inner");d.alias="localMatEntity",d.addFilter().where(s.traceablepart,"eq",1),new MobileCRM.FetchXml.Fetch(a).execute("DynamicEntities",(function(e){t(e)}),(function(e){var t="ServiceOrderItem retrieveRelatedLocalMaterialWithTraceableParts error: \n"+e;return alert(t),r(t)}),null)}))},e.prototype.deleteRecord=function(e){return new Promise((function(t,r){var n=new i.ServiceorderitemEntityNames;MobileCRM.DynamicEntity.deleteById(n.entityLogicalName,e,(function(){t(!0)}),(function(t){MobileCRM.bridge.alert("Delete Serviceorder item Id ["+e+"] error:\n"+t),r(!1)}))}))},e.prototype.updatePrice=function(e,t){var r=this;return new Promise((function(n,o){var s=new i.ServiceorderitemEntityNames;r.retrieveById(e).then((function(e){e.properties[s.price]=t,e.save(o).then((function(){n()}))}))}))},e.prototype.UpdateRecord=function(e){return new Promise((function(t,r){e.save((function(e){e?(alert("ServiceOrderItem UpdateRecord unexpected error:\n           "+e),r(e)):t(!0)}))}))},e.prototype.retrieveItemsWithMissingUdiForMaterial=function(e){return new Promise((function(t,r){var o=new i.ServiceorderitemEntityNames,s=new n.LocalmaterialEntityNames,a=new MobileCRM.FetchXml.Entity(o.entityLogicalName);a.addAttributes();var c=new MobileCRM.FetchXml.Filter;c.where(o.serviceorderId,"eq",e),a.filter=new MobileCRM.FetchXml.Filter,a.filter.filters.push(c);var d=a.addLink(s.entityLogicalName,s.localmaterialid,o.localmaterialId,"inner");d.alias="localMatEntity",d.addFilter().where(s.udirelevant,"eq",1),new MobileCRM.FetchXml.Fetch(a).execute("DynamicEntities",(function(e){t(e)}),(function(e){var t="ServiceOrderItem getNumberOfMissingUdi error: \n"+e;return alert(t),r(t)}),null)}))},e.prototype.existsAnySoItemWithoutQuantity=function(e){var t=new i.ServiceorderitemEntityNames,r=new MobileCRM.FetchXml.Filter;r.type="and",r.where(t.serviceorderId,"eq",e);var n=[];return n.push(r),this.retrieveRecordsWithFilter(n).then((function(e){for(var t=!1,r=0;r<e.length&&!t;r++){var i=new s.ServiceOrderItemEntity(e[r]);(i.quantity<0||null===i.quantity||void 0===i.quantity)&&(t=!0)}return Promise.resolve(t)}))},e.prototype.existsAnySoItemRecordWithoutPrice=function(e){var t=new i.ServiceorderitemEntityNames,r=new MobileCRM.FetchXml.Filter;r.type="and",r.where(t.serviceorderId,"eq",e);var n=[];return n.push(r),this.retrieveRecordsWithFilter(n).then((function(e){for(var t=!1,r=0;r<e.length&&!t;r++){var i=new s.ServiceOrderItemEntity(e[r]);(i.price<0||null===i.price||void 0===i.price)&&(t=!0)}return Promise.resolve(t)}))},e.prototype.getNumberOfMissingErrorDescription=function(e){return new Promise((function(t,r){var n=new i.ServiceorderitemEntityNames,s=new MobileCRM.FetchXml.Filter;s.type="and",s.where(n.serviceorderId,"eq",e);var a=new MobileCRM.FetchXml.Filter;a.type="and",a.where(n.description,"eq",null);var c=[];c.push(s),c.push(a);var d=new o.ErrorEntityNames,l=new MobileCRM.FetchXml.Entity(n.entityLogicalName);l.filter=new MobileCRM.FetchXml.Filter,l.filter.filters=c;var u=l.addLink(d.entityLogicalName,d.errorId,n.error,"inner");u.alias="errEntity",u.addFilter().where(d.informationRequiered,"eq",1),new MobileCRM.FetchXml.Fetch(l).execute("DynamicEntities",(function(e){t(e.length)}),(function(e){var t="ServiceOrderItem getNumberOfErrorDescription error: \n"+e;return alert(t),r(t)}),null)}))},e.prototype.getNumberOfErrorTree=function(e){var t=new i.ServiceorderitemEntityNames,r=new MobileCRM.FetchXml.Filter;r.type="and",r.where(t.serviceorderId,"eq",e);var n=new MobileCRM.FetchXml.Filter;n.type="and",n.where(t.error,"ne",null);var o=[];return o.push(r),o.push(n),this.retrieveRecordsWithFilter(o).then((function(e){return Promise.resolve(e.length)}))},e.prototype.getNumberOfErrorCausingParts=function(e){var t=new i.ServiceorderitemEntityNames,r=new MobileCRM.FetchXml.Filter;r.type="and",r.where(t.serviceorderId,"eq",e);var n=new MobileCRM.FetchXml.Filter;n.type="and",n.where(t.errorcause,"eq",1);var o=[];return o.push(r),o.push(n),this.retrieveRecordsWithFilter(o).then((function(e){return Promise.resolve(e.length)}))},e}();t.ServiceOrderItem=a},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorEntityNames=function(){this.entityLogicalName="dw_error",this.errorId="dw_errorid",this.identity="dw_identity",this.name="dw_name",this.assemblypartId="dw_assemblypartid",this.informationRequiered="dw_informationrequiered",this.dw_languageid="dw_languageid",this.qualityProductFamilyId="dw_qualityproductfamilyid"}},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.retrieveServiceorderById=function(e){return new Promise((function(t,r){var i=new MobileCRM.FetchXml.Entity("dw_serviceorder");i.addAttributes(),i.filter=new MobileCRM.FetchXml.Filter,i.filter.where("dw_serviceorderid","eq",e),new MobileCRM.FetchXml.Fetch(i).execute("JSON",(function(e){t(e)}),(function(e){r(e)}),null)}))},t.retrieveServiceorderByIds=function(e){return new Promise((function(t,r){var i=new MobileCRM.FetchXml.Entity("dw_serviceorder");i.addAttributes(),i.filter=new MobileCRM.FetchXml.Filter,i.filter.isIn("dw_serviceorderid",e),new MobileCRM.FetchXml.Fetch(i).execute("JSON",(function(e){t(e)}),(function(e){r(e)}),null)}))},t.retrieveAllServiceorders=function(){return new Promise((function(e,t){var r=new MobileCRM.FetchXml.Entity("dw_serviceorder");r.addAttributes();var i=new MobileCRM.FetchXml.Fetch(r);i.count=1e3,i.execute("JSON",(function(t){e(t)}),(function(e){t(e)}),null)}))},t.updateTestResultStatus=function(e,t){return new Promise((function(r,i){var n=new MobileCRM.DynamicEntity("dw_serviceorder",e.dw_serviceorderid.id);n.properties.dw_testprocedurestatus=t,n.save((function(e){return e?i(e):r(n.properties)}))}))},t.updateTestResultStatusByServiceorderId=function(e,t){return new Promise((function(r,i){var n=new MobileCRM.DynamicEntity("dw_serviceorder",e);n.properties.dw_testprocedurestatus=t,n.save((function(e){return e?i(e):r()}))}))}},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LocalmaterialEntityNames=function(){this.entityLogicalName="dw_localmaterial",this.createdon="createdon",this.activitytypeid="dw_activitytypeid",this.alternativequantity="dw_alternativequantity",this.alternativeunitid="dw_alternativeunitid",this.calibrationinterval="dw_calibrationinterval",this.charge="dw_charge",this.companycode="dw_companycode",this.configurablematerial="dw_configurablematerial",this.consumablepart="dw_consumablepart",this.deliveryunit="dw_deliveryunit",this.erpcreated="dw_erpcreated",this.exporthandling="dw_exporthandling",this.languageid="dw_languageid",this.localmaterialid="dw_localmaterialid",this.materialnoid="dw_materialnoid",this.materialnumber="dw_materialnumber",this.name="dw_name",this.parttobereturned="dw_parttobereturned",this.parttobereturnedconditions="dw_parttobereturnedconditions",this.pricegroup="dw_pricegroup",this.protectionclass="dw_protectionclass",this.repairallowed="dw_repairallowed",this.salesorganisation="dw_salesorganisation",this.serviceproduct="dw_serviceproduct",this.servicetool="dw_servicetool",this.traceablepart="dw_traceablepart",this.type="dw_type",this.typeofuserpart="dw_typeofuserpart",this.udirelevant="dw_udirelevant",this.unitdescription="dw_unitdescription",this.unitid="dw_unitid",this.modifiedon="modifiedon",this.ownerid="ownerid"}},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServiceorderitemEntityNames=function(){this.entityLogicalName="dw_serviceorderitem",this.accountingindicator="dw_accountingindicatorid",this.assembly="dw_assemblyid",this.assemblypart="dw_assemblypartid",this.bulkregistrationitem="dw_bulkregistrationitemid",this.chargetime="dw_chargetime",this.createdby="createdby",this.description="dw_error1description",this.dispatchId="dw_dispatchid",this.displayonprintout="dw_displayonprintout",this.endtime="dw_endtime",this.error="dw_error1id",this.errorcategory="dw_errorcategory",this.errorcause="dw_errorcausingpart",this.executiondate="dw_confirmationdate",this.localmaterialtype="dw_localmaterialtype",this.materialdescription="dw_materialdescription",this.materialno="dw_materialno",this.materialnooferrorpart="dw_materialnooferrorpart",this.modifiedby="modifiedby",this.owner="ownerid",this.price="dw_price",this.quantity="dw_quantity",this.serialnooferrorpart="dw_serialnooferrorpart",this.serialnoofnewpart="dw_serialnoofnewpart",this.serviceorderId="dw_serviceorderid",this.serviceorderitemid="dw_serviceorderitemid",this.starttime="dw_starttime",this.subassembly="dw_subassemblyid",this.localmaterialId="dw_localmaterialid",this.transactioncurrencyid="transactioncurrencyid",this.total="dw_total",this.uniquedeviceidentifier="dw_uniquedeviceidentifier",this.unit="dw_unit",this.unitId="dw_unitid",this.workcenter="dw_stockid",this.isPricelistEmpty="dw_ispricelistempty"}}});
//# sourceMappingURL=serviceorder_form.resco.js.map