var dwdispatch_form =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/account/account.entity-names.ts":
/*!*********************************************!*\
  !*** ./src/account/account.entity-names.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountEntityNames = (function () {
    function AccountEntityNames() {
        this.entityLogicalName = 'account';
        this.accountId = 'accountid';
        this.accountNumber = 'accountnumber';
        this.accountGroup = 'dw_accountgroup';
        this.name = 'name';
        this.importantRemarks = 'dw_importantremarks';
        this.websiteUrl = 'websiteurl';
    }
    return AccountEntityNames;
}());
exports.AccountEntityNames = AccountEntityNames;


/***/ }),

/***/ "./src/account/account.entity.ts":
/*!***************************************!*\
  !*** ./src/account/account.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var account_entity_names_1 = __webpack_require__(/*! ./account.entity-names */ "./src/account/account.entity-names.ts");
var AccountEntity = (function () {
    function AccountEntity(entity) {
        if (entity) {
            var accEntityNames = new account_entity_names_1.AccountEntityNames();
            this.accountId = entity.properties[accEntityNames.accountId];
            this.accountNumber = entity.properties[accEntityNames.accountNumber];
            this.accountGroup = entity.properties[accEntityNames.accountGroup];
            this.name = entity.properties[accEntityNames.name];
            this.importantRemarks =
                entity.properties[accEntityNames.importantRemarks];
            this.websiteUrl = entity.properties[accEntityNames.websiteUrl];
        }
    }
    return AccountEntity;
}());
exports.AccountEntity = AccountEntity;


/***/ }),

/***/ "./src/account/account.ts":
/*!********************************!*\
  !*** ./src/account/account.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var account_entity_names_1 = __webpack_require__(/*! ./account.entity-names */ "./src/account/account.entity-names.ts");
var Account = (function () {
    function Account() {
    }
    Account.prototype.retrieveById = function (accountId) {
        return new Promise(function (resolve, reject) {
            var accEntityNames = new account_entity_names_1.AccountEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(accEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(accEntityNames.accountId, 'eq', accountId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                var accountResult;
                if (results && results.length > 0) {
                    accountResult = results[0];
                }
                resolve(accountResult);
            }, function (error) {
                alert("Account retrieveById error:\n " + error);
                reject(error);
            }, null);
        });
    };
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/accountingindicator/accountingindicator.entity-names.ts":
/*!*********************************************************************!*\
  !*** ./src/accountingindicator/accountingindicator.entity-names.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccountingIndicatorEntityNames = (function () {
    function AccountingIndicatorEntityNames() {
        this.entityLogicalName = 'dw_accountingindicator';
        this.odataEntitySetName = 'dw_accountingindicators';
        this.accountingIndicatorName = 'dw_accountingindicatorname';
        this.erpAccountingIndicatorCode = 'dw_erpaccountingindicatorcode';
        this.serviceorderVisibility = 'dw_serviceordervisibility';
        this.serviceorderItemVisibility = 'dw_serviceorderitemvisibility';
        this.accountingIndicatorid = 'dw_accountingindicatorid';
        this.accountingIndicatorDescription = 'dw_accountingindicatordescription';
        this.companyCode = 'dw_companycode';
        this.globalKey = 'dw_global_key';
        this.serviceorderitemVisibility = 'dw_serviceorderitemvisibility';
        this.OwningBusinessUnit = 'owningbusinessunit';
    }
    return AccountingIndicatorEntityNames;
}());
exports.AccountingIndicatorEntityNames = AccountingIndicatorEntityNames;


/***/ }),

/***/ "./src/accountingindicator/accountingindicator.entity.ts":
/*!***************************************************************!*\
  !*** ./src/accountingindicator/accountingindicator.entity.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var accountingindicator_entity_names_1 = __webpack_require__(/*! ./accountingindicator.entity-names */ "./src/accountingindicator/accountingindicator.entity-names.ts");
var AccountingIndicatorEntity = (function () {
    function AccountingIndicatorEntity(entity) {
        if (entity) {
            var acIndEntityNames = new accountingindicator_entity_names_1.AccountingIndicatorEntityNames();
            this.accountingIndicatorName =
                entity.properties[acIndEntityNames.accountingIndicatorName];
            this.erpAccountingIndicatorCode =
                entity.properties[acIndEntityNames.erpAccountingIndicatorCode];
            this.serviceorderVisibility =
                entity.properties[acIndEntityNames.serviceorderVisibility];
            this.serviceorderitemVisibility =
                entity.properties[acIndEntityNames.serviceorderitemVisibility];
            this.accountingIndicatorid =
                entity.properties[acIndEntityNames.accountingIndicatorid];
            this.accountingIndicatorDescription =
                entity.properties[acIndEntityNames.accountingIndicatorDescription];
            this.companyCode = entity.properties[acIndEntityNames.companyCode];
            this.globalKey = entity.properties[acIndEntityNames.globalKey];
        }
    }
    return AccountingIndicatorEntity;
}());
exports.AccountingIndicatorEntity = AccountingIndicatorEntity;


/***/ }),

/***/ "./src/accountingindicator/accountingindicator.ts":
/*!********************************************************!*\
  !*** ./src/accountingindicator/accountingindicator.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var accountingindicator_entity_names_1 = __webpack_require__(/*! ./accountingindicator.entity-names */ "./src/accountingindicator/accountingindicator.entity-names.ts");
var AcountingIndicator = (function () {
    function AcountingIndicator() {
    }
    AcountingIndicator.prototype.retrieveById = function (accountingIndicatorId) {
        return new Promise(function (resolve, reject) {
            var acIndEntityNames = new accountingindicator_entity_names_1.AccountingIndicatorEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(acIndEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(acIndEntityNames.accountingIndicatorid, 'eq', accountingIndicatorId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject("Record not found!");
                }
            }, function (error) {
                MobileCRM.bridge.alert(error);
                reject(error);
            }, null);
        });
    };
    AcountingIndicator.prototype.retrieveRecordsWithFilter = function (recordsFilters) {
        return new Promise(function (resolve, reject) {
            var acIndEntityNames = new accountingindicator_entity_names_1.AccountingIndicatorEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(acIndEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter.filters = recordsFilters;
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("AcountingIndicator.retrieveRecordsWithFilter error:\n " + error);
            }, null);
        });
    };
    AcountingIndicator.prototype.retrieveByBusinessUnit = function (businessUnitId) {
        return new Promise(function (resolve, reject) {
            var acIndEntityNames = new accountingindicator_entity_names_1.AccountingIndicatorEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(acIndEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(acIndEntityNames.OwningBusinessUnit, 'eq', businessUnitId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results != null && results.length !== 0) {
                    resolve(results);
                }
                resolve(null);
            }, function (error) {
                reject("AcountingIndicator.retrieveByBusinessUnit error:\n " + error);
            }, null);
        });
    };
    return AcountingIndicator;
}());
exports.AcountingIndicator = AcountingIndicator;


/***/ }),

/***/ "./src/applicationfeature/applicationfeature-settings.ts":
/*!***************************************************************!*\
  !*** ./src/applicationfeature/applicationfeature-settings.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationFeatureSettings = (function () {
    function ApplicationFeatureSettings() {
    }
    return ApplicationFeatureSettings;
}());
exports.ApplicationFeatureSettings = ApplicationFeatureSettings;


/***/ }),

/***/ "./src/applicationfeature/applicationfeature.ts":
/*!******************************************************!*\
  !*** ./src/applicationfeature/applicationfeature.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applicationfeature_settings_1 = __webpack_require__(/*! ./applicationfeature-settings */ "./src/applicationfeature/applicationfeature-settings.ts");
var ApplicationFeatureSetting = (function () {
    function ApplicationFeatureSetting() {
    }
    ApplicationFeatureSetting.prototype.applicationFeatureSettingFetch = function (featurename, featurekey, division, orgKey2, orgKey3, orgKey4) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fetchAppFeatures = new MobileCRM.FetchXml.Entity('dw_applicationfeaturesetting');
            fetchAppFeatures.addAttributes();
            _this.createFetchFilterForSingleSetting(fetchAppFeatures, featurename, featurekey, division, orgKey2, orgKey3, orgKey4);
            var fetch = new MobileCRM.FetchXml.Fetch(fetchAppFeatures);
            fetch.execute("DynamicEntities", resolve, reject, null);
        });
    };
    ApplicationFeatureSetting.prototype.retrieveByFeatureKey = function (featureKey) {
        return new Promise(function (resolve, reject) {
            var entity = new MobileCRM.FetchXml.Entity('dw_applicationfeaturesetting');
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where("dw_featurekey", "eq", featureKey);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute("DynamicEntities", resolve, reject, null);
        });
    };
    ApplicationFeatureSetting.prototype.retrieveApplicationFeatureSettings = function (featurename, division, orgkey2, orgkey3, orgkey4) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fetchAppFeatures = new MobileCRM.FetchXml.Entity('dw_applicationfeaturesetting');
            fetchAppFeatures.addAttributes();
            _this.createFetchFilterForSettings(fetchAppFeatures, featurename, division, orgkey2, orgkey3, orgkey4);
            var featureFetch = new MobileCRM.FetchXml.Fetch(fetchAppFeatures);
            featureFetch.execute('JSON', function (results) {
                var _a;
                if (results && results.length > 0) {
                    var checkTestTools = false;
                    var completeTestSteps = false;
                    var twaVersion = '';
                    var twaApplicationSettings = new applicationfeature_settings_1.ApplicationFeatureSettings();
                    (_a = _this.extractSettingsFromApplicationFeatures(results, checkTestTools, completeTestSteps, twaVersion), checkTestTools = _a.checkTestTools, completeTestSteps = _a.completeTestSteps, twaApplicationSettings = _a.twaApplicationSettings, twaVersion = _a.twaVersion);
                    return resolve(twaApplicationSettings);
                }
                return reject('No application features settings found');
            }, function (err) {
                return reject(err);
            }, null);
        });
    };
    ApplicationFeatureSetting.prototype.extractSettingsFromApplicationFeatures = function (results, checkTestTools, completeTestSteps, twaVersion) {
        var checkTestToolsKey = 'TWA.Close.CheckTestTools';
        var completeTestStepsKey = 'TWA.Close.CompleteTeststeps';
        var twaVersionKey = 'TwaVersionNumber';
        for (var i = 0; i < results.length; i++) {
            if (results[i].dw_featurekey === checkTestToolsKey) {
                checkTestTools = results[i].dw_featurevalue.toLowerCase();
            }
            if (results[i].dw_featurekey === completeTestStepsKey) {
                completeTestSteps = results[i].dw_featurevalue.toLowerCase();
            }
            if (results[i].dw_featurekey === twaVersionKey) {
                twaVersion = results[i].dw_featurevalue;
            }
        }
        var twaApplicationSettings = new applicationfeature_settings_1.ApplicationFeatureSettings();
        twaApplicationSettings.IsCompleteAllTestStepsRequired = completeTestSteps;
        twaApplicationSettings.IsCheckTestToolsRequired = checkTestTools;
        twaApplicationSettings.SupportedTwaVersion = twaVersion;
        return { twaApplicationSettings: twaApplicationSettings, checkTestTools: checkTestTools, completeTestSteps: completeTestSteps, twaVersion: twaVersion };
    };
    ApplicationFeatureSetting.prototype.createFetchFilterForSingleSetting = function (fetchAppFeatures, featurename, featurekey, division, orgkey2, orgkey3, orgkey4) {
        fetchAppFeatures.addAttribute("dw_applicationfeaturesettingid");
        fetchAppFeatures.filter = new MobileCRM.FetchXml.Filter();
        fetchAppFeatures.filter.where("dw_featurekey", "eq", featurekey);
        fetchAppFeatures.filter.where("dw_featurevalue", "eq", true);
        var linkEntity = fetchAppFeatures.addLink("dw_applicationfeature", "dw_applicationfeatureid", "dw_applicationfeatureid", "inner");
        linkEntity.filter = new MobileCRM.FetchXml.Filter();
        if (featurename) {
            linkEntity.filter.startsWith("dw_featurename", featurename);
        }
        linkEntity.filter.where("dw_division", "eq", division);
        var orgKey2Filter = new MobileCRM.FetchXml.Filter();
        orgKey2Filter.type = "or";
        orgKey2Filter.where("dw_org_key_2", "eq", orgkey2);
        orgKey2Filter.where("dw_org_key_2", "not-null", null);
        linkEntity.filter.filters.push(orgKey2Filter);
        var orgKey3Filter = new MobileCRM.FetchXml.Filter();
        orgKey3Filter.type = "or";
        orgKey3Filter.where("dw_org_key_3", "eq", orgkey3);
        orgKey3Filter.where("dw_org_key_3", "not-null", null);
        linkEntity.filter.filters.push(orgKey3Filter);
        var orgKey4Filter = new MobileCRM.FetchXml.Filter();
        orgKey4Filter.type = "or";
        orgKey4Filter.where("dw_org_key_4", "eq", orgkey4);
        orgKey4Filter.where("dw_org_key_4", "not-null", null);
        linkEntity.filter.filters.push(orgKey4Filter);
    };
    ApplicationFeatureSetting.prototype.createFetchFilterForSettings = function (fetchAppFeatures, featurename, division, orgkey2, orgkey3, orgkey4) {
        var linkEntity = fetchAppFeatures.addLink('dw_applicationfeature', 'dw_applicationfeatureid', 'dw_applicationfeatureid', 'outer');
        linkEntity.addAttribute('dw_featurename');
        linkEntity.addAttribute('dw_division');
        linkEntity.addAttribute('dw_org_key_2');
        linkEntity.addAttribute('dw_org_key_3');
        linkEntity.addAttribute('dw_org_key_4');
        linkEntity.filter = new MobileCRM.FetchXml.Filter();
        var featureFilter = new MobileCRM.FetchXml.Filter();
        featureFilter.startsWith('dw_featurename', featurename);
        linkEntity.filter.filters.push(featureFilter);
        var divisionFilter = new MobileCRM.FetchXml.Filter();
        divisionFilter.where('dw_division', 'eq', division);
        linkEntity.filter.filters.push(divisionFilter);
        var key2Filter = new MobileCRM.FetchXml.Filter();
        key2Filter.where('dw_org_key_2', 'eq', orgkey2);
        linkEntity.filter.filters.push(key2Filter);
        var key3Filter = new MobileCRM.FetchXml.Filter();
        key3Filter.where('dw_org_key_3', 'eq', orgkey3);
        linkEntity.filter.filters.push(key3Filter);
        var key4Filter = new MobileCRM.FetchXml.Filter();
        key4Filter.where('dw_org_key_4', 'eq', orgkey4);
        linkEntity.filter.filters.push(key4Filter);
    };
    return ApplicationFeatureSetting;
}());
exports.ApplicationFeatureSetting = ApplicationFeatureSetting;


/***/ }),

/***/ "./src/contractline/contractline.entity-names.ts":
/*!*******************************************************!*\
  !*** ./src/contractline/contractline.entity-names.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContractLineEntityNames = (function () {
    function ContractLineEntityNames() {
        this.entityLogicalName = 'dw_contractline';
        this.contractLineId = 'dw_contractlineid';
        this.contractLineNumber = 'dw_contractlinenumber';
        this.contractLineValue = 'dw_contractlinevalue';
        this.contractNoId = 'dw_contractnoid';
        this.contractTypeDescription = 'dw_contracttypedescription';
        this.contractTypeId = 'dw_contracttypeid';
        this.description = 'dw_description';
        this.materialNumber = 'dw_materialnumber';
        this.netPrice = 'dw_netprice';
        this.quantity = 'dw_quantity';
    }
    return ContractLineEntityNames;
}());
exports.ContractLineEntityNames = ContractLineEntityNames;


/***/ }),

/***/ "./src/contractline/contractline.entity.ts":
/*!*************************************************!*\
  !*** ./src/contractline/contractline.entity.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contractline_entity_names_1 = __webpack_require__(/*! ./contractline.entity-names */ "./src/contractline/contractline.entity-names.ts");
var ContractLineEntity = (function () {
    function ContractLineEntity(entity) {
        var clEnityNames = new contractline_entity_names_1.ContractLineEntityNames();
        if (entity) {
            this.contractLineId = entity.properties[clEnityNames.contractLineId];
            this.contractLineNumber =
                entity.properties[clEnityNames.contractLineNumber];
            this.contractLineValue =
                entity.properties[clEnityNames.contractLineValue];
            this.contractNoId = entity.properties[clEnityNames.contractNoId];
            this.contractTypeDescription =
                entity.properties[clEnityNames.contractTypeDescription];
            this.contractTypeId = entity.properties[clEnityNames.contractTypeId];
            this.description = entity.properties[clEnityNames.description];
            this.materialNumber = entity.properties[clEnityNames.materialNumber];
            this.netPrice = entity.properties[clEnityNames.netPrice];
            this.quantity = entity.properties[clEnityNames.quantity];
        }
    }
    return ContractLineEntity;
}());
exports.ContractLineEntity = ContractLineEntity;


/***/ }),

/***/ "./src/contractline/contractline.ts":
/*!******************************************!*\
  !*** ./src/contractline/contractline.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contractline_entity_names_1 = __webpack_require__(/*! ./contractline.entity-names */ "./src/contractline/contractline.entity-names.ts");
var ContractLine = (function () {
    function ContractLine() {
    }
    ContractLine.prototype.retrieveById = function (contractLineId) {
        return new Promise(function (resolve, reject) {
            var clEntityNames = new contractline_entity_names_1.ContractLineEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(clEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(clEntityNames.contractLineId, 'eq', contractLineId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                var contractlineResult;
                if (results && results.length > 0) {
                    contractlineResult = results[0];
                }
                resolve(contractlineResult);
            }, function (error) {
                alert("ContractLine retrieveById error:\n " + error);
                reject(error);
            }, null);
        });
    };
    return ContractLine;
}());
exports.ContractLine = ContractLine;


/***/ }),

/***/ "./src/contracttype/contracttype.entity-names.ts":
/*!*******************************************************!*\
  !*** ./src/contracttype/contracttype.entity-names.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContracttypeEntityNames = (function () {
    function ContracttypeEntityNames() {
        this.entityLogicalName = 'dw_contracttype';
        this.contracttypeId = 'dw_contracttypeid';
        this.name = 'dw_name';
        this.erpContracttypeCode = 'dw_erpcontracttypecode';
    }
    return ContracttypeEntityNames;
}());
exports.ContracttypeEntityNames = ContracttypeEntityNames;


/***/ }),

/***/ "./src/contracttype/contracttype.ts":
/*!******************************************!*\
  !*** ./src/contracttype/contracttype.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contracttype_entity_names_1 = __webpack_require__(/*! ./contracttype.entity-names */ "./src/contracttype/contracttype.entity-names.ts");
var Contracttype = (function () {
    function Contracttype() {
    }
    Contracttype.prototype.retrieveByTypeCode = function (typeCode) {
        return new Promise(function (resolve, reject) {
            var fields = new contracttype_entity_names_1.ContracttypeEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(fields.erpContracttypeCode, 'eq', typeCode);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0 && results[0]) {
                    resolve(results[0]);
                }
                else {
                    reject("Contracttype.retrieveByTypeCode: record not found!");
                }
            }, function (error) {
                reject("Contracttype.retrieveByTypeCode error:\n " + error);
            }, null);
        });
    };
    return Contracttype;
}());
exports.Contracttype = Contracttype;


/***/ }),

/***/ "./src/costestimation/dispatch.costestimation.process.ts":
/*!***************************************************************!*\
  !*** ./src/costestimation/dispatch.costestimation.process.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_entity_names_1 = __webpack_require__(/*! ../dispatch/dispatch.entity-names */ "./src/dispatch/dispatch.entity-names.ts");
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder/serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var serviceorder_entity_names_1 = __webpack_require__(/*! ../serviceorder/serviceorder.entity-names */ "./src/serviceorder/serviceorder.entity-names.ts");
var DispatchCostEstimationProcess = (function () {
    function DispatchCostEstimationProcess() {
        this.dispatchEntityNames = new dispatch_entity_names_1.DispatchEntityNames();
        this.serviceOrderEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
    }
    DispatchCostEstimationProcess.prototype.executeRequestCostEstimationLogic = function (entityForm) {
        var _this = this;
        var lstServiceOrderStatuses = [];
        lstServiceOrderStatuses.push(100000001);
        var serviceOrderData = new serviceorder_data_1.ServiceorderData();
        var waitingDialog = MobileCRM.UI.Form.showPleaseWait('Starting ...');
        serviceOrderData.retrieveByDispatchIdAndServiceOrderStatuses(entityForm.entity.id, lstServiceOrderStatuses).then(function (costEstimationServiceOrders) {
            if (costEstimationServiceOrders != null && costEstimationServiceOrders.length > 0) {
                var lstServiceOrdersToUpdate_1 = [];
                costEstimationServiceOrders.forEach(function (serviceOrderToUpdate) {
                    var serviceOrderId = serviceOrderToUpdate[_this.serviceOrderEntityNames.serviceorderid];
                    var soToUpdate = new MobileCRM.DynamicEntity(_this.serviceOrderEntityNames.entityLogicalName, serviceOrderId);
                    soToUpdate.properties[_this.serviceOrderEntityNames.costestimationsenttoerp] = entityForm.entity.properties[_this.dispatchEntityNames.costEstimationRequestDate];
                    lstServiceOrdersToUpdate_1.push(soToUpdate);
                });
                var promisesSave = serviceOrderData.updateServiceOrders(lstServiceOrdersToUpdate_1);
                Promise.all(promisesSave)
                    .then(function () {
                    waitingDialog.close();
                    _this.showSuccessMessageBox();
                })
                    .catch(function (error) {
                    alert('Could not update related service orders. Error: ' + error);
                });
            }
        });
    };
    DispatchCostEstimationProcess.prototype.showSuccessMessageBox = function () {
        MobileCRM.Localization.initialize(function () {
            var localizedMessage = MobileCRM.Localization.getTextOrDefault('Alert.Dispatch.RequestCostEstimation.Success', 'Cost Estimation Request initiated successfully. Please sync your data to Dynamics 365 to trigger the ERP cost estimation process.');
            var msgBox = new MobileCRM.UI.MessageBox(localizedMessage);
            msgBox.items = ["ok"];
            msgBox.multiLine = true;
            msgBox.show(function (button) {
                if (button == "ok") {
                    MobileCRM.UI.EntityForm.save();
                }
            });
        });
    };
    return DispatchCostEstimationProcess;
}());
exports.DispatchCostEstimationProcess = DispatchCostEstimationProcess;


/***/ }),

/***/ "./src/dispatch/dispatch.complete.process.ts":
/*!***************************************************!*\
  !*** ./src/dispatch/dispatch.complete.process.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder/serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var serviceorder_complete_rules_1 = __webpack_require__(/*! ../serviceorder/serviceorder.complete.rules */ "./src/serviceorder/serviceorder.complete.rules.ts");
var serviceorder_proforma_details_1 = __webpack_require__(/*! ../serviceorder/serviceorder.proforma-details */ "./src/serviceorder/serviceorder.proforma-details.ts");
var DispatchCompleteProcess = (function () {
    function DispatchCompleteProcess() {
        this.confirmationDateFieldName = 'dw_confirmationdate';
        this.mobileFfflineFormFieldName = 'dw_mobileofflineform';
        this.proformFlagFieldName = 'blnProFormaFlag';
        this.proformaEmailFieldName = 'dw_proformaemail';
    }
    DispatchCompleteProcess.prototype.startCompleteServiceordersFromDispatch = function (entityForm) {
        var generalView = entityForm.getDetailView('General');
        if (generalView) {
            var errMsgField = generalView.getItemByName('ErrorMessage');
            var confirmationDateField = generalView.getItemByName(this.confirmationDateFieldName);
            var proformFlagField = generalView.getItemByName(this.proformFlagFieldName);
            var proformaEmailField = generalView.getItemByName(this.proformaEmailFieldName);
            var isProforma = proformFlagField &&
                proformFlagField.value !== null &&
                proformFlagField.value !== undefined &&
                proformFlagField.value === true;
            var proformaDetails = new serviceorder_proforma_details_1.ServiceorderProformaDetails();
            proformaDetails.isProforma = isProforma;
            proformaDetails.proformaEmail = proformaEmailField.value;
            var mobileofflineform = entityForm.entity.properties[this.mobileFfflineFormFieldName] &&
                entityForm.entity.properties[this.mobileFfflineFormFieldName] ===
                    100000000;
            if (mobileofflineform ||
                (confirmationDateField && confirmationDateField.isVisible) ||
                (errMsgField && errMsgField.isVisible)) {
                var confirmationdate = confirmationDateField.value;
                this.initiateDispatchComplete(entityForm.entity.id, confirmationdate, proformaDetails);
            }
        }
    };
    DispatchCompleteProcess.prototype.completRelatedServiceorders = function (dispatchId, confirmationdate, proformaDetails) {
        var _this = this;
        var waitingDialog = MobileCRM.UI.Form.showPleaseWait("Starting ...");
        try {
            var soData = new serviceorder_data_1.ServiceorderData();
            return soData
                .retrieveByDispatchId(dispatchId)
                .then(function (dynSoList) {
                var completed = false;
                var soCompletePromiseList = [];
                if (dynSoList && dynSoList.length > 0) {
                    dynSoList.forEach(function (item) {
                        var soCompletePromise = _this.createServiceorderCompletPromises(item.id, confirmationdate, proformaDetails);
                        soCompletePromiseList.push(soCompletePromise);
                    });
                    if (soCompletePromiseList.length > 0) {
                        return _this.executeCompletionPromises(waitingDialog, soCompletePromiseList);
                    }
                    else {
                        _this.closeWaitingDialog(waitingDialog);
                        return Promise.resolve(completed);
                    }
                }
                else {
                    _this.closeWaitingDialog(waitingDialog);
                    alert("\n            The related Serviceorders are either completed or canceled.\n            Serviceorder complete validation rules cannot be checked.\n            ");
                    return Promise.resolve(completed);
                }
            })
                .catch(function (completeError) {
                _this.closeWaitingDialog(waitingDialog);
                alert("completRelatedServiceorders unexpected error:\n" + JSON.stringify(completeError));
                return Promise.resolve(false);
            });
        }
        catch (exception) {
            this.closeWaitingDialog(waitingDialog);
            alert(" " + JSON.stringify(exception));
        }
    };
    DispatchCompleteProcess.prototype.executeCompletionPromises = function (waitingDialog, soCompletePromiseList) {
        var _this = this;
        return Promise.all(soCompletePromiseList)
            .then(function (validationResults) {
            var completed = true;
            if (validationResults) {
                var invalidRecords_1 = 0;
                validationResults.forEach(function (result) {
                    if (result && !result.success) {
                        invalidRecords_1 = invalidRecords_1 + 1;
                        completed = false;
                    }
                });
                _this.closeWaitingDialog(waitingDialog);
                if (!completed) {
                    var completedMessages = "[" + invalidRecords_1 + "] Serviceorders failed the completion requirements.";
                    alert("" + completedMessages);
                }
                return Promise.resolve(completed);
            }
            else {
                _this.closeWaitingDialog(waitingDialog);
                return Promise.resolve(completed);
            }
        }, function (error) {
            _this.closeWaitingDialog(waitingDialog);
            alert("DispatchCompleteProcess executeCompletionPromises soCompletePromiseList\n             error:\n              " + error);
            return Promise.resolve(false);
        })
            .catch(function (error) {
            _this.closeWaitingDialog(waitingDialog);
            alert("executeCompletionPromises Promise.all error: " + error);
            return Promise.resolve(false);
        });
    };
    DispatchCompleteProcess.prototype.createServiceorderCompletPromises = function (serviceorderId, confirmationdate, proformaDetails) {
        var soCompleteRules = new serviceorder_complete_rules_1.ServiceorderCompleteRules();
        return soCompleteRules.completeServiceorder(serviceorderId, confirmationdate, proformaDetails);
    };
    DispatchCompleteProcess.prototype.closeWaitingDialog = function (waitingDialog) {
        if (waitingDialog) {
            waitingDialog.close();
        }
    };
    DispatchCompleteProcess.prototype.initiateDispatchComplete = function (entityId, completionDate, proformaDetails) {
        this.completRelatedServiceorders(entityId, completionDate, proformaDetails).then(function (allCompleted) {
            if (allCompleted) {
                alert("Finished validation and completion of related Serviceorders!");
            }
            MobileCRM.UI.EntityForm.refreshForm();
        });
    };
    return DispatchCompleteProcess;
}());
exports.DispatchCompleteProcess = DispatchCompleteProcess;


/***/ }),

/***/ "./src/dispatch/dispatch.data.ts":
/*!***************************************!*\
  !*** ./src/dispatch/dispatch.data.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_entity_names_1 = __webpack_require__(/*! ./dispatch.entity-names */ "./src/dispatch/dispatch.entity-names.ts");
var DispatchData = (function () {
    function DispatchData() {
    }
    DispatchData.prototype.retrieveById = function (dispatchId) {
        return new Promise(function (resolve, reject) {
            var dispatchEntityNames = new dispatch_entity_names_1.DispatchEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(dispatchEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(dispatchEntityNames.dispatchId, 'eq', dispatchId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject("No Dispatch record found with the Id: " + dispatchId);
                }
            }, function (error) {
                alert("DispatchData retrieveById error:\n " + error);
                reject(error);
            }, null);
        });
    };
    return DispatchData;
}());
exports.DispatchData = DispatchData;


/***/ }),

/***/ "./src/dispatch/dispatch.entity-names.ts":
/*!***********************************************!*\
  !*** ./src/dispatch/dispatch.entity-names.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DispatchEntityNames = (function () {
    function DispatchEntityNames() {
        this.entityLogicalName = 'dw_dispatch';
        this.id = 'id';
        this.dispatchId = 'dw_dispatchid';
        this.dispatchStartedOn = 'dw_dispatchstartedon';
        this.businessLogicCommand = 'im_businesslogiccommand';
        this.dispatchStatus = 'dw_dispatchstatus';
        this.accountid = 'dw_accountid';
        this.confirmationdate = 'dw_confirmationdate';
        this.updatelastmaintenancedate = 'dw_updatelastmaintenancedate';
        this.contractNo = 'dw_contractno';
        this.purchaserfromcontact = 'dw_purchaserfromcontact';
        this.proformaEmail = 'dw_proformaemail';
        this.proformaRequestDate = 'dw_proformarequestdate';
        this.soldToParty = 'dw_soldtopartyid';
        this.purchaseOrderNo = 'dw_purchaseorderno';
        this.distributePurchaseOrderNo = 'dw_distributepurchaseorderno';
        this.accountnumber = 'dw_accountnumber';
        this.dispatchNumber = 'dw_dispatchnumber';
        this.groupCriteria = 'dw_groupcriteria';
        this.sortCriteria = 'dw_sortcriteria';
        this.costEstimationRequestDate = 'dw_costestimationrequestdate';
        this.mobileofflineform = 'dw_mobileofflineform';
    }
    return DispatchEntityNames;
}());
exports.DispatchEntityNames = DispatchEntityNames;


/***/ }),

/***/ "./src/dispatch/dispatch.entity.ts":
/*!*****************************************!*\
  !*** ./src/dispatch/dispatch.entity.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_entity_names_1 = __webpack_require__(/*! ./dispatch.entity-names */ "./src/dispatch/dispatch.entity-names.ts");
var DispatchEntity = (function () {
    function DispatchEntity(entity) {
        if (entity) {
            var dispatchEntityNames = new dispatch_entity_names_1.DispatchEntityNames();
            this.dispatchId = entity.properties[dispatchEntityNames.dispatchId];
            this.accountId = entity.properties[dispatchEntityNames.accountid];
            this.soldToParty = entity.properties[dispatchEntityNames.soldToParty];
            this.accountnumber = entity.properties[dispatchEntityNames.accountnumber];
            this.contractno = entity.properties[dispatchEntityNames.contractNo];
            this.dispatchNumber =
                entity.properties[dispatchEntityNames.dispatchNumber];
            this.dispatchStatus =
                entity.properties[dispatchEntityNames.dispatchStatus];
            this.sortCriteria = entity.properties[dispatchEntityNames.sortCriteria];
            this.groupCriteria = entity.properties[dispatchEntityNames.groupCriteria];
        }
    }
    return DispatchEntity;
}());
exports.DispatchEntity = DispatchEntity;


/***/ }),

/***/ "./src/dispatch/dispatch.form.ts":
/*!***************************************!*\
  !*** ./src/dispatch/dispatch.form.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_complete_process_1 = __webpack_require__(/*! ./dispatch.complete.process */ "./src/dispatch/dispatch.complete.process.ts");
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder/serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var sorting_process_1 = __webpack_require__(/*! ../serviceorder/sorting/sorting.process */ "./src/serviceorder/sorting/sorting.process.ts");
var dispatch_entity_names_1 = __webpack_require__(/*! ./dispatch.entity-names */ "./src/dispatch/dispatch.entity-names.ts");
var recalculate_price_1 = __webpack_require__(/*! ../serviceorderitem/recalculate.price */ "./src/serviceorderitem/recalculate.price.ts");
var dispatch_costestimation_process_1 = __webpack_require__(/*! ../costestimation/dispatch.costestimation.process */ "./src/costestimation/dispatch.costestimation.process.ts");
var DispatchForm = (function () {
    function DispatchForm() {
    }
    DispatchForm.prototype.initialize = function () {
        var _this = this;
        this.dispatchEntityNames = new dispatch_entity_names_1.DispatchEntityNames();
        MobileCRM.UI.EntityForm.onCommand('custom_Complete', function (entityForm) {
            var entity = entityForm.entity;
            entity.properties['dw_mobileofflineform'] =
                100000000;
            MobileCRM.UI.EntityForm.save();
        }, true);
        MobileCRM.UI.EntityForm.onCommand('custom_Report', function (entityForm) {
            _this.RunCalculation(entityForm).then(function () {
                MobileCRM.UI.EntityForm.executeCommandByName("RunMobileReport", function (entityForm) {
                }, function (error) {
                    if (error) {
                        MobileCRM.bridge.alert(error);
                    }
                }, null);
            });
        }, true);
        MobileCRM.UI.EntityForm.onCommand('custom_Cancel', function (entityForm) {
            if (entityForm) {
                var entity_1 = entityForm.entity;
                var soData = new serviceorder_data_1.ServiceorderData();
                soData.retrieveNotCancelledByDispatchId(entity_1.id).then(function (dynSoList) {
                    if (dynSoList && dynSoList.length === 0) {
                        entity_1.properties['dw_dispatchstatus'] = 100000003;
                        MobileCRM.UI.EntityForm.save();
                    }
                    else {
                        alert("Not all related Service Orders have been set to Service Order Status Cancelled.");
                    }
                });
            }
        }, true);
        MobileCRM.UI.EntityForm.onCommand('custom_Return', function (entityForm) {
            var entity = entityForm.entity;
            entity.properties['dw_mobileofflineform'] = -1;
            MobileCRM.UI.EntityForm.save();
        }, true);
        MobileCRM.UI.EntityForm.onCommand('custom_CompleteServiceOrders', function (entityForm) {
            if (entityForm) {
                var dispCompleteProcess = new dispatch_complete_process_1.DispatchCompleteProcess();
                dispCompleteProcess.startCompleteServiceordersFromDispatch(entityForm);
            }
        }, true, null);
        MobileCRM.UI.EntityForm.onCommand('custom_RequestCostEstimation', function (entityForm) {
            var entity = entityForm.entity;
            entity.properties[_this.dispatchEntityNames.mobileofflineform] =
                100000001;
            MobileCRM.UI.EntityForm.save();
        }, true);
        MobileCRM.UI.EntityForm.onCommand('custom_PrepareDocumentation', function (entityForm) {
            if (entityForm) {
                _this.RunCalculation(entityForm);
            }
        }, true, null);
        MobileCRM.UI.EntityForm.onPostSave(function (entityForm) {
            if (entityForm) {
                var dispNames = new dispatch_entity_names_1.DispatchEntityNames();
                var dispatchStatus = entityForm.entity.properties[dispNames.dispatchStatus];
                if (dispatchStatus == 100000002) {
                    var postSaveHandler_1 = entityForm.suspendPostSave();
                    var soSortingProcess = new sorting_process_1.SortingProcess();
                    var dispatchId = entityForm.entity ? entityForm.entity.id : null;
                    soSortingProcess.startServiceorderSorting(dispatchId).then(function () {
                        postSaveHandler_1.resumePostSave();
                    });
                }
            }
        }, true, null);
        MobileCRM.UI.EntityForm.onSave(function (entityForm) {
            var saveHandler = entityForm.suspendSave();
            var shipToParty = null;
            var soldToParty = null;
            if (entityForm.entity.properties['ShipToParty'] != null) {
                shipToParty = entityForm.entity.properties['ShipToParty'];
            }
            if (entityForm.entity.properties['SoldToParty'] != null) {
                soldToParty = entityForm.entity.properties['SoldToParty'];
            }
            if (shipToParty != null || soldToParty != null) {
                var serviceOrderData_1 = new serviceorder_data_1.ServiceorderData();
                serviceOrderData_1
                    .retrieveAllByDispatchId(entityForm.entity.id)
                    .then(function (serviceOrders) {
                    if (serviceOrders == null || serviceOrders.length === 0) {
                        saveHandler.resumeSave();
                        return;
                    }
                    var promisesSave = serviceOrderData_1.createSoUpdatePromises(serviceOrders, soldToParty, shipToParty);
                    Promise.all(promisesSave)
                        .then(function () {
                        saveHandler.resumeSave();
                    })
                        .catch(function (error) {
                        entityForm.cancelValidation(error);
                    });
                })
                    .catch(function (error) {
                    MobileCRM.bridge.alert(error);
                    entityForm.cancelValidation(error);
                });
            }
            else {
                saveHandler.resumeSave();
            }
        }, true, null);
        MobileCRM.UI.EntityForm.onChange(function (entityForm) {
            var changedItem = entityForm.context["changedItem"];
            if (changedItem == _this.dispatchEntityNames.costEstimationRequestDate && entityForm.entity.properties[_this.dispatchEntityNames.costEstimationRequestDate] != null) {
                var dispatchCostEstimationProcess = new dispatch_costestimation_process_1.DispatchCostEstimationProcess();
                dispatchCostEstimationProcess.executeRequestCostEstimationLogic(entityForm);
            }
        }, true, null);
    };
    DispatchForm.prototype.RunCalculation = function (entityForm) {
        return new Promise(function (resolve, reject) {
            var soSortingProcess = new sorting_process_1.SortingProcess();
            var dispatchId = entityForm.entity ? entityForm.entity.id : null;
            soSortingProcess
                .startServiceorderSorting(dispatchId)
                .then(function (sortSuccess) {
                if (sortSuccess) {
                    var recalculatePrice = new recalculate_price_1.RecalculatePrice();
                    MobileCRM.UI.Form.showToast('Start of the price recalculation.', 'Home.Now.png');
                    recalculatePrice
                        .byDispatchId(dispatchId)
                        .then(function (PriceCalcSuccess) {
                        if (PriceCalcSuccess) {
                            MobileCRM.UI.Form.showToast('Price recalculation  finished.', 'Home.Now.png');
                            resolve();
                        }
                        else {
                            reject("Please review the error reported and restart the prepare documentation process.");
                        }
                    });
                }
            });
        });
    };
    return DispatchForm;
}());
exports.DispatchForm = DispatchForm;


/***/ }),

/***/ "./src/error/error.entity-names.ts":
/*!*****************************************!*\
  !*** ./src/error/error.entity-names.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorEntityNames = (function () {
    function ErrorEntityNames() {
        this.entityLogicalName = 'dw_error';
        this.errorId = 'dw_errorid';
        this.identity = 'dw_identity';
        this.name = 'dw_name';
        this.assemblypartId = 'dw_assemblypartid';
        this.informationRequiered = 'dw_informationrequiered';
        this.dw_languageid = 'dw_languageid';
        this.qualityProductFamilyId = 'dw_qualityproductfamilyid';
    }
    return ErrorEntityNames;
}());
exports.ErrorEntityNames = ErrorEntityNames;


/***/ }),

/***/ "./src/groupvalue/groupvalue.entity-names.ts":
/*!***************************************************!*\
  !*** ./src/groupvalue/groupvalue.entity-names.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GroupvalueEntityNames = (function () {
    function GroupvalueEntityNames() {
        this.entityLogicalName = 'dw_groupvalue';
        this.dispatchId = 'dw_dispatchid';
        this.groupvalue = 'dw_groupvalue';
        this.groupvalueId = 'dw_groupvalueid';
    }
    return GroupvalueEntityNames;
}());
exports.GroupvalueEntityNames = GroupvalueEntityNames;


/***/ }),

/***/ "./src/groupvalue/groupvalue.ts":
/*!**************************************!*\
  !*** ./src/groupvalue/groupvalue.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var groupvalue_entity_names_1 = __webpack_require__(/*! ./groupvalue.entity-names */ "./src/groupvalue/groupvalue.entity-names.ts");
var dispatch_entity_names_1 = __webpack_require__(/*! ../dispatch/dispatch.entity-names */ "./src/dispatch/dispatch.entity-names.ts");
var Groupvalue = (function () {
    function Groupvalue() {
    }
    Groupvalue.prototype.CreateRecord = function (dispatchReference, groupValue) {
        var gvEntityNames = new groupvalue_entity_names_1.GroupvalueEntityNames();
        var groupvalueEntity = MobileCRM.DynamicEntity.createNew(gvEntityNames.entityLogicalName);
        var props = groupvalueEntity.properties;
        if (dispatchReference) {
            props[gvEntityNames.dispatchId] = dispatchReference;
        }
        if (groupValue) {
            props[gvEntityNames.groupvalue] = groupValue;
        }
        return new Promise(function (resolve, reject) {
            try {
                groupvalueEntity.save(function (saveError) {
                    if (saveError) {
                        alert("Groupvalue CreateRecord unexpected error:\n           " + saveError);
                        reject(saveError);
                    }
                    else {
                        var groupvalueRef = new MobileCRM.Reference(groupvalueEntity.entityName, groupvalueEntity.id, groupvalueEntity.primaryName);
                        resolve(groupvalueRef);
                    }
                });
            }
            catch (exception) {
                alert("Groupvalue.CreateRecord exception:\n " + JSON.stringify(exception));
            }
        });
    };
    Groupvalue.prototype.reterieveByPrimaryNameDispatchId = function (dispatchId, groupValue) {
        return new Promise(function (resolve, reject) {
            var gvEntityNames = new groupvalue_entity_names_1.GroupvalueEntityNames();
            var gvEntity = new MobileCRM.FetchXml.Entity(gvEntityNames.entityLogicalName);
            gvEntity.addAttributes();
            var groupValueFilter = new MobileCRM.FetchXml.Filter();
            groupValueFilter.type = 'and';
            groupValueFilter.where(gvEntityNames.groupvalue, 'eq', groupValue);
            gvEntity.filter = new MobileCRM.FetchXml.Filter();
            gvEntity.filter.filters = [groupValueFilter];
            var dispEntityNames = new dispatch_entity_names_1.DispatchEntityNames();
            var linkEntity = gvEntity.addLink(dispEntityNames.entityLogicalName, dispEntityNames.dispatchId, gvEntityNames.dispatchId, 'inner');
            linkEntity
                .addFilter()
                .where(dispEntityNames.dispatchId, 'eq', dispatchId);
            var fetch = new MobileCRM.FetchXml.Fetch(gvEntity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("Groupvalue reterieveByPrimaryName [" + groupValue + "] error:\n " + error);
            }, null);
        });
    };
    Groupvalue.prototype.reterieveByDispatchId = function (dispatchId) {
        return new Promise(function (resolve, reject) {
            var gvEntityNames = new groupvalue_entity_names_1.GroupvalueEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(gvEntityNames.entityLogicalName);
            soEntity.addAttributes();
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.where(gvEntityNames.dispatchId, 'eq', dispatchId);
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("Groupvalue reterieveByDispatchId [" + dispatchId + "] error:\n " + error);
            }, null);
        });
    };
    Groupvalue.prototype.deleteByDispatchId = function (dispatchId) {
        var _this = this;
        return this.reterieveByDispatchId(dispatchId)
            .then(function (dynGroupValueResult) {
            if (dynGroupValueResult && dynGroupValueResult.length > 0) {
                var delGroupValuePromises_1 = [];
                dynGroupValueResult.forEach(function (dynGroupValue) {
                    var delGroupValue = _this.deleteRecord(dynGroupValue.id);
                    delGroupValuePromises_1.push(delGroupValue);
                });
                return Promise.all(delGroupValuePromises_1).then(function (delResults) {
                    var success = true;
                    if (delResults) {
                        delResults.forEach(function (deleted) {
                            if (!deleted) {
                                success = false;
                            }
                        });
                    }
                    return Promise.resolve(success);
                });
            }
            else {
                return Promise.resolve(true);
            }
        })
            .catch(function (retrieveError) {
            var errMsg = "catch deleteByDispatchId: " + JSON.stringify(retrieveError);
            return Promise.reject(errMsg);
        });
    };
    Groupvalue.prototype.deleteRecord = function (groupvalueId) {
        return new Promise(function (resolve, reject) {
            var gvEntityNames = new groupvalue_entity_names_1.GroupvalueEntityNames();
            MobileCRM.DynamicEntity.deleteById(gvEntityNames.entityLogicalName, groupvalueId, function () {
                resolve(true);
            }, function (error) {
                MobileCRM.bridge.alert("Groupvalue deleteRecord [" + groupvalueId + "] error:\n" + error);
                reject(false);
            });
        });
    };
    return Groupvalue;
}());
exports.Groupvalue = Groupvalue;


/***/ }),

/***/ "./src/installedbase/installedbase.entity-names.ts":
/*!*********************************************************!*\
  !*** ./src/installedbase/installedbase.entity-names.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InstalledBaseEntityNames = (function () {
    function InstalledBaseEntityNames() {
        this.entityLogicalName = "speed1_installedbase";
        this.createdon = "createdon";
        this.alarmlevel1 = "dw_alarmlevel1";
        this.alarmlevel2 = "dw_alarmlevel2";
        this.barcodenumber = "dw_barcodenumber";
        this.calibrationvalue = "dw_calibrationvalue";
        this.certificate = "dw_certificate";
        this.channel = "dw_channel";
        this.contractlineid = "dw_contractlineid";
        this.contractnumberid = "dw_contractnumberid";
        this.contracttypeid = "dw_contracttypeid";
        this.documentslink = "dw_documentslink";
        this.enduserpartyid = "dw_enduserpartyid";
        this.eqart = "dw_eqart";
        this.foldernumber = "dw_foldernumber";
        this.functionalunitid = "dw_functionalunitid";
        this.ibdocumentationweblink = "dw_ibdocumentationweblink";
        this.ibtoenduserid = "dw_ibtoenduserid";
        this.lastmaintenancedate = "dw_lastmaintenancedate";
        this.lastsafetycheck = "dw_lastsafetycheck";
        this.localmaterialid = "dw_localmaterialid";
        this.location1erp = "dw_location1erp";
        this.maininstitutionshipto = "dw_maininstitutionid_shipto";
        this.maintenanceintervalerp = "dw_maintenanceintervalerp";
        this.materialdescription = "dw_materialdescription";
        this.measuringrange = "dw_measuringrange";
        this.nextexchange = "dw_nextexchange";
        this.nextmaintenancedue = "dw_nextmaintenancedue";
        this.parentinstalledbaseid = "dw_parentinstalledbaseid";
        this.plannergroupid = "dw_plannergroupid";
        this.planplant = "dw_planplant";
        this.protectionclass = "dw_protectionclass";
        this.reinstallationdate = "dw_reinstallationdate";
        this.safetychecknumber = "dw_safetychecknumber";
        this.safetycheckresult = "dw_safetycheckresult";
        this.sensorexchangedate = "dw_sensorexchangedate";
        this.sensortype = "dw_sensortype";
        this.servicecharacteristics = "dw_servicecharacteristics";
        this.serviceoption = "dw_serviceoption";
        this.softwareversionid = "dw_softwareversionid";
        this.specificlocationtwo = "dw_specificlocationtwo";
        this.systemcharacteristics = "dw_systemcharacteristics";
        this.targetgas = "dw_targetgas";
        this.technicalid = "dw_technicalid";
        this.testgas = "dw_testgas";
        this.tgtext1 = "dw_tgtext1";
        this.udirelevant = "dw_udirelevant";
        this.uniquedeviceidentifier = "dw_uniquedeviceidentifier";
        this.modifiedby = "modifiedby";
        this.modifiedon = "modifiedon";
        this.ownerid = "ownerid";
        this.companycode = "speed1_companycode";
        this.costcentercustomer = "speed1_costcentercustomer";
        this.customerinventorynumber = "speed1_customerinventorynumber";
        this.dateofmanufacture = "speed1_dateofmanufacture";
        this.endoflife = "speed1_endoflife";
        this.endofservice = "speed1_endofservice";
        this.endwarrantydate = "speed1_endwarrantydate";
        this.equipmentmanagerid = "speed1_equipmentmanagerid";
        this.equipmentnumber = "speed1_equipmentnumber";
        this.extendedwarrantyend = "speed1_extendedwarrantyend";
        this.installationdate = "speed1_installationdate";
        this.installedbaseid = "speed1_installedbaseid";
        this.iserp = "speed1_iserp";
        this.location = "speed1_location";
        this.materialnumberid = "speed1_materialnumberid";
        this.name = "speed1_name";
        this.quantity = "speed1_quantity";
        this.replacementdate = "speed1_replacementdate";
        this.serialnumber = "speed1_serialnumber";
        this.shipmentdate = "speed1_shipmentdate";
        this.shippedtoid = "speed1_shippedtoid";
        this.soldtoid = "speed1_soldtoid";
        this.startwarrantydate = "speed1_startwarrantydate";
        this.transactioncurrencyid = "transactioncurrencyid";
    }
    return InstalledBaseEntityNames;
}());
exports.InstalledBaseEntityNames = InstalledBaseEntityNames;


/***/ }),

/***/ "./src/installedbase/installedbase.entity.ts":
/*!***************************************************!*\
  !*** ./src/installedbase/installedbase.entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var installedbase_entity_names_1 = __webpack_require__(/*! ./installedbase.entity-names */ "./src/installedbase/installedbase.entity-names.ts");
var InstalledBaseEntity = (function () {
    function InstalledBaseEntity(entity) {
        if (entity && entity.properties) {
            var _fields = new installedbase_entity_names_1.InstalledBaseEntityNames();
            this.createdon = entity.properties[_fields.createdon];
            this.alarmlevel1 = entity.properties[_fields.alarmlevel1];
            this.alarmlevel2 = entity.properties[_fields.alarmlevel2];
            this.barcodenumber = entity.properties[_fields.barcodenumber];
            this.calibrationvalue = entity.properties[_fields.calibrationvalue];
            this.certificate = entity.properties[_fields.certificate];
            this.channel = entity.properties[_fields.channel];
            this.contractlineid = entity.properties[_fields.contractlineid];
            this.contractnumberid = entity.properties[_fields.contractnumberid];
            this.contracttypeid = entity.properties[_fields.contracttypeid];
            this.documentslink = entity.properties[_fields.documentslink];
            this.enduserpartyid = entity.properties[_fields.enduserpartyid];
            this.eqart = entity.properties[_fields.eqart];
            this.foldernumber = entity.properties[_fields.foldernumber];
            this.functionalunitid = entity.properties[_fields.functionalunitid];
            this.ibdocumentationweblink =
                entity.properties[_fields.ibdocumentationweblink];
            this.ibtoenduserid = entity.properties[_fields.ibtoenduserid];
            this.lastmaintenancedate = entity.properties[_fields.lastmaintenancedate];
            this.lastsafetycheck = entity.properties[_fields.lastsafetycheck];
            this.localmaterialid = entity.properties[_fields.localmaterialid];
            this.location1erp = entity.properties[_fields.location1erp];
            this.maininstitutionshipto =
                entity.properties[_fields.maininstitutionshipto];
            this.maintenanceintervalerp =
                entity.properties[_fields.maintenanceintervalerp];
            this.materialdescription = entity.properties[_fields.materialdescription];
            this.measuringrange = entity.properties[_fields.measuringrange];
            this.nextexchange = entity.properties[_fields.nextexchange];
            this.nextmaintenancedue = entity.properties[_fields.nextmaintenancedue];
            this.parentinstalledbaseid =
                entity.properties[_fields.parentinstalledbaseid];
            this.plannergroupid = entity.properties[_fields.plannergroupid];
            this.planplant = entity.properties[_fields.planplant];
            this.protectionclass = entity.properties[_fields.protectionclass];
            this.reinstallationdate = entity.properties[_fields.reinstallationdate];
            this.safetychecknumber = entity.properties[_fields.safetychecknumber];
            this.safetycheckresult = entity.properties[_fields.safetycheckresult];
            this.sensorexchangedate = entity.properties[_fields.sensorexchangedate];
            this.sensortype = entity.properties[_fields.sensortype];
            this.servicecharacteristics =
                entity.properties[_fields.servicecharacteristics];
            this.serviceoption = entity.properties[_fields.serviceoption];
            this.softwareversionid = entity.properties[_fields.softwareversionid];
            this.specificlocationtwo = entity.properties[_fields.specificlocationtwo];
            this.systemcharacteristics =
                entity.properties[_fields.systemcharacteristics];
            this.targetgas = entity.properties[_fields.targetgas];
            this.technicalid = entity.properties[_fields.technicalid];
            this.testgas = entity.properties[_fields.testgas];
            this.tgtext1 = entity.properties[_fields.tgtext1];
            this.udirelevant = entity.properties[_fields.udirelevant];
            this.uniquedeviceidentifier =
                entity.properties[_fields.uniquedeviceidentifier];
            this.modifiedby = entity.properties[_fields.modifiedby];
            this.modifiedon = entity.properties[_fields.modifiedon];
            this.ownerid = entity.properties[_fields.ownerid];
            this.companycode = entity.properties[_fields.companycode];
            this.costcentercustomer = entity.properties[_fields.costcentercustomer];
            this.customerinventorynumber =
                entity.properties[_fields.customerinventorynumber];
            this.dateofmanufacture = entity.properties[_fields.dateofmanufacture];
            this.endoflife = entity.properties[_fields.endoflife];
            this.endofservice = entity.properties[_fields.endofservice];
            this.endwarrantydate = entity.properties[_fields.endwarrantydate];
            this.equipmentmanagerid = entity.properties[_fields.equipmentmanagerid];
            this.equipmentnumber = entity.properties[_fields.equipmentnumber];
            this.extendedwarrantyend = entity.properties[_fields.extendedwarrantyend];
            this.installationdate = entity.properties[_fields.installationdate];
            this.installedbaseid = entity.properties[_fields.installedbaseid];
            this.iserp = entity.properties[_fields.iserp];
            this.location = entity.properties[_fields.location];
            this.materialnumberid = entity.properties[_fields.materialnumberid];
            this.name = entity.properties[_fields.name];
            this.quantity = entity.properties[_fields.quantity];
            this.replacementdate = entity.properties[_fields.replacementdate];
            this.serialnumber = entity.properties[_fields.serialnumber];
            this.shipmentdate = entity.properties[_fields.shipmentdate];
            this.shippedtoid = entity.properties[_fields.shippedtoid];
            this.soldtoid = entity.properties[_fields.soldtoid];
            this.startwarrantydate = entity.properties[_fields.startwarrantydate];
            this.transactioncurrencyid =
                entity.properties[_fields.transactioncurrencyid];
        }
    }
    return InstalledBaseEntity;
}());
exports.InstalledBaseEntity = InstalledBaseEntity;


/***/ }),

/***/ "./src/installedbase/installedbase.ts":
/*!********************************************!*\
  !*** ./src/installedbase/installedbase.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var installedbase_entity_names_1 = __webpack_require__(/*! ./installedbase.entity-names */ "./src/installedbase/installedbase.entity-names.ts");
var InstalledBase = (function () {
    function InstalledBase() {
    }
    InstalledBase.prototype.retrieveInstalledBaseByIds = function (installedBaseIds) {
        return new Promise(function (resolve, reject) {
            if (installedBaseIds == null || installedBaseIds.length === 0) {
                resolve(null);
            }
            var so = new MobileCRM.FetchXml.Entity('speed1_installedbase');
            so.addAttributes();
            so.filter = new MobileCRM.FetchXml.Filter();
            so.filter.isIn('speed1_installedbaseid', installedBaseIds);
            var soFetch = new MobileCRM.FetchXml.Fetch(so);
            soFetch.execute('JSON', function (results) {
                if (results != null && results.length > 0) {
                    resolve(results);
                }
                resolve(null);
            }, function (err) {
                reject(err);
            }, null);
        });
    };
    InstalledBase.prototype.retrieveById = function (id) {
        return new Promise(function (resolve, reject) {
            var _fields = new installedbase_entity_names_1.InstalledBaseEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(_fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(_fields.installedbaseid, 'eq', id);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                var ibResult = new MobileCRM.DynamicEntity(_fields.entityLogicalName);
                if (results && results.length > 0) {
                    ibResult = results[0];
                }
                resolve(ibResult);
            }, function (error) {
                reject("InstalledBase retrieveById [" + id + "] error:\n " + error);
            }, null);
        });
    };
    return InstalledBase;
}());
exports.InstalledBase = InstalledBase;


/***/ }),

/***/ "./src/localmaterial/localmaterial.data.ts":
/*!*************************************************!*\
  !*** ./src/localmaterial/localmaterial.data.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localmaterial_entity_names_1 = __webpack_require__(/*! ./localmaterial.entity-names */ "./src/localmaterial/localmaterial.entity-names.ts");
var LocalMaterialData = (function () {
    function LocalMaterialData() {
    }
    LocalMaterialData.prototype.retrieveById = function (localMaterialId) {
        return new Promise(function (resolve, reject) {
            var locMatEntityNames = new localmaterial_entity_names_1.LocalmaterialEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(locMatEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(locMatEntityNames.localmaterialid, 'eq', localMaterialId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject("Record not found!");
                }
            }, function (error) {
                alert("LocalMaterialData retrieveByLocalMaterialId error:\n " + error);
                reject(error);
            }, null);
        });
    };
    LocalMaterialData.prototype.retrieveByMvke = function (materialNumber, businessUnitId) {
        return new Promise(function (resolve, reject) {
            var locMatEntityNames = new localmaterial_entity_names_1.LocalmaterialEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(locMatEntityNames.entityLogicalName);
            entity.addAttributes();
            var mvkeLink = entity.addLink('speed1_mvke', 'speed1_mvkeid', 'dw_materialnoid', 'inner');
            mvkeLink.filter = new MobileCRM.FetchXml.Filter();
            mvkeLink.filter.where('speed1_materialnumber', 'eq', materialNumber);
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where('owningbusinessunit', 'eq', businessUnitId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject("Record not found!");
                }
            }, function (error) {
                alert("LocalMaterialData retrieveByMvke error:\n " + error);
                reject(error);
            }, null);
        });
    };
    return LocalMaterialData;
}());
exports.LocalMaterialData = LocalMaterialData;


/***/ }),

/***/ "./src/localmaterial/localmaterial.entity-names.ts":
/*!*********************************************************!*\
  !*** ./src/localmaterial/localmaterial.entity-names.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalmaterialEntityNames = (function () {
    function LocalmaterialEntityNames() {
        this.entityLogicalName = "dw_localmaterial";
        this.createdon = "createdon";
        this.activitytypeid = "dw_activitytypeid";
        this.alternativequantity = "dw_alternativequantity";
        this.alternativeunitid = "dw_alternativeunitid";
        this.calibrationinterval = "dw_calibrationinterval";
        this.charge = "dw_charge";
        this.companycode = "dw_companycode";
        this.configurablematerial = "dw_configurablematerial";
        this.consumablepart = "dw_consumablepart";
        this.deliveryunit = "dw_deliveryunit";
        this.erpcreated = "dw_erpcreated";
        this.exporthandling = "dw_exporthandling";
        this.languageid = "dw_languageid";
        this.localmaterialid = "dw_localmaterialid";
        this.materialnoid = "dw_materialnoid";
        this.materialnumber = "dw_materialnumber";
        this.name = "dw_name";
        this.parttobereturned = "dw_parttobereturned";
        this.parttobereturnedconditions = "dw_parttobereturnedconditions";
        this.pricegroup = "dw_pricegroup";
        this.protectionclass = "dw_protectionclass";
        this.repairallowed = "dw_repairallowed";
        this.salesorganisation = "dw_salesorganisation";
        this.serviceproduct = "dw_serviceproduct";
        this.servicetool = "dw_servicetool";
        this.traceablepart = "dw_traceablepart";
        this.type = "dw_type";
        this.typeofuserpart = "dw_typeofuserpart";
        this.udirelevant = "dw_udirelevant";
        this.unitdescription = "dw_unitdescription";
        this.unitid = "dw_unitid";
        this.modifiedon = "modifiedon";
        this.ownerid = "ownerid";
    }
    return LocalmaterialEntityNames;
}());
exports.LocalmaterialEntityNames = LocalmaterialEntityNames;


/***/ }),

/***/ "./src/localmaterial/localmaterial.entity.ts":
/*!***************************************************!*\
  !*** ./src/localmaterial/localmaterial.entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localmaterial_entity_names_1 = __webpack_require__(/*! ../localmaterial/localmaterial.entity-names */ "./src/localmaterial/localmaterial.entity-names.ts");
var LocalmaterialEntity = (function () {
    function LocalmaterialEntity(entity) {
        if (entity) {
            var locMatEntityNames = new localmaterial_entity_names_1.LocalmaterialEntityNames();
            this.createdon = entity.properties[locMatEntityNames.createdon];
            this.activitytypeid = entity.properties[locMatEntityNames.activitytypeid];
            this.alternativequantity = entity.properties[locMatEntityNames.alternativequantity];
            this.alternativeunitid = entity.properties[locMatEntityNames.alternativeunitid];
            this.calibrationinterval = entity.properties[locMatEntityNames.calibrationinterval];
            this.charge = entity.properties[locMatEntityNames.charge];
            this.companycode = entity.properties[locMatEntityNames.companycode];
            this.configurablematerial = entity.properties[locMatEntityNames.configurablematerial];
            this.consumablepart = entity.properties[locMatEntityNames.consumablepart];
            this.deliveryunit = entity.properties[locMatEntityNames.deliveryunit];
            this.erpcreated = entity.properties[locMatEntityNames.erpcreated];
            this.exporthandling = entity.properties[locMatEntityNames.exporthandling];
            this.languageid = entity.properties[locMatEntityNames.languageid];
            this.localmaterialid = entity.properties[locMatEntityNames.localmaterialid];
            this.materialnoid = entity.properties[locMatEntityNames.materialnoid];
            this.materialnumber = entity.properties[locMatEntityNames.materialnumber];
            this.name = entity.properties[locMatEntityNames.name];
            this.parttobereturned = entity.properties[locMatEntityNames.parttobereturned];
            this.parttobereturnedconditions = entity.properties[locMatEntityNames.parttobereturnedconditions];
            this.pricegroup = entity.properties[locMatEntityNames.pricegroup];
            this.protectionclass = entity.properties[locMatEntityNames.protectionclass];
            this.repairallowed = entity.properties[locMatEntityNames.repairallowed];
            this.salesorganisation = entity.properties[locMatEntityNames.salesorganisation];
            this.serviceproduct = entity.properties[locMatEntityNames.serviceproduct];
            this.servicetool = entity.properties[locMatEntityNames.servicetool];
            this.traceablepart = entity.properties[locMatEntityNames.traceablepart];
            this.type = entity.properties[locMatEntityNames.type];
            this.typeofuserpart = entity.properties[locMatEntityNames.typeofuserpart];
            this.udirelevant = entity.properties[locMatEntityNames.udirelevant];
            this.unitdescription = entity.properties[locMatEntityNames.unitdescription];
            this.unitid = entity.properties[locMatEntityNames.unitid];
            this.modifiedon = entity.properties[locMatEntityNames.modifiedon];
            this.ownerid = entity.properties[locMatEntityNames.ownerid];
        }
    }
    return LocalmaterialEntity;
}());
exports.LocalmaterialEntity = LocalmaterialEntity;


/***/ }),

/***/ "./src/materialdetermination/material-determination.entity-names.ts":
/*!**************************************************************************!*\
  !*** ./src/materialdetermination/material-determination.entity-names.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialDeterminationEntityNames = (function () {
    function MaterialDeterminationEntityNames() {
        this.entityLogicalName = 'dw_materialdetermination';
        this.activitytypeid = 'dw_activitytypeid';
        this.costcenter = 'dw_costcenter';
        this.materialdeterminationid = 'dw_materialdeterminationid';
        this.materialnoid = 'dw_materialnoid';
        this.name = 'dw_name';
        this.plant = 'dw_plant';
        this.position = 'dw_position';
        this.pricegroup = 'dw_pricegroup';
        this.pricegroupfrom = 'dw_pricegroupfrom';
        this.pricegroupto = 'dw_pricegroupto';
    }
    return MaterialDeterminationEntityNames;
}());
exports.MaterialDeterminationEntityNames = MaterialDeterminationEntityNames;


/***/ }),

/***/ "./src/materialdetermination/material-determination.entity.ts":
/*!********************************************************************!*\
  !*** ./src/materialdetermination/material-determination.entity.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_determination_entity_names_1 = __webpack_require__(/*! ./material-determination.entity-names */ "./src/materialdetermination/material-determination.entity-names.ts");
var MaterialDeterminationEntity = (function () {
    function MaterialDeterminationEntity(entity) {
        if (entity) {
            var names = new material_determination_entity_names_1.MaterialDeterminationEntityNames();
            if (entity.entityName != names.entityLogicalName) {
                throw new Error("MaterialDeterminationEntity.constructor: invalid argument! Entity must be of type " + names.entityLogicalName);
            }
            this.activitytypeid = entity.properties[names.activitytypeid];
            this.costcenter = entity.properties[names.costcenter];
            this.materialdeterminationid = entity.properties[names.materialdeterminationid];
            this.materialnoid = entity.properties[names.materialnoid];
            this.name = entity.properties[names.name];
            this.plant = entity.properties[names.plant];
            this.position = entity.properties[names.position];
            this.pricegroup = entity.properties[names.pricegroup];
            this.pricegroupfrom = entity.properties[names.pricegroupfrom];
            this.pricegroupto = entity.properties[names.pricegroupto];
        }
    }
    return MaterialDeterminationEntity;
}());
exports.MaterialDeterminationEntity = MaterialDeterminationEntity;


/***/ }),

/***/ "./src/materialdetermination/material-determination.ts":
/*!*************************************************************!*\
  !*** ./src/materialdetermination/material-determination.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_determination_entity_names_1 = __webpack_require__(/*! ./material-determination.entity-names */ "./src/materialdetermination/material-determination.entity-names.ts");
var MaterialDetermination = (function () {
    function MaterialDetermination() {
    }
    MaterialDetermination.prototype.retrieveByActivityType = function (activityTypeId) {
        return new Promise(function (resolve, reject) {
            var fields = new material_determination_entity_names_1.MaterialDeterminationEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(fields.activitytypeid, 'eq', activityTypeId);
            var sortOrder = new MobileCRM.FetchXml.Order(fields.position, false);
            entity.order.push(sortOrder);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', resolve, reject, null);
        });
    };
    return MaterialDetermination;
}());
exports.MaterialDetermination = MaterialDetermination;


/***/ }),

/***/ "./src/mvke/mvke.entity-names.ts":
/*!***************************************!*\
  !*** ./src/mvke/mvke.entity-names.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MvkeEntityNames = (function () {
    function MvkeEntityNames() {
        this.entityLogicalName = 'speed1_mvke';
        this.odataEntitySetName = 'speed1_mvkes';
        this.name = 'speed1_materialnumber';
        this.mvkeId = 'speed1_mvkeid';
        this.materialnumber = 'speed1_materialnumber';
        this.qualityproductfamilyid = 'dw_QualityProductFamilyId';
        this.productlineid = 'dw_productlineid';
        this.productType = 'dw_producttype';
        this.salesRelevance = 'dw_salesrelevance';
        this.sourceSystem = 'dw_sourcesystem';
        this.rmaPart = 'dw_rmapart';
        this.productFamily = 'dw_productfamily';
        this.productDescription = 'dw_productdescription';
        this.endOfService = 'dw_endofservice';
        this.endOfLife = 'dw_endoflife';
        this.deviceId = 'dw_deviceid';
        this.dangerousGoods = 'dw_dangerousgoods';
        this.crmProductGroup = 'dw_crmproductgroup';
        this.companyCode = 'dw_companycode';
        this.baseUnitId = 'dw_baseunitid';
    }
    return MvkeEntityNames;
}());
exports.MvkeEntityNames = MvkeEntityNames;


/***/ }),

/***/ "./src/mvke/mvke.entity.ts":
/*!*********************************!*\
  !*** ./src/mvke/mvke.entity.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mvke_entity_names_1 = __webpack_require__(/*! ./mvke.entity-names */ "./src/mvke/mvke.entity-names.ts");
var MvkeEntity = (function () {
    function MvkeEntity(entity) {
        if (entity) {
            var mvkeEntityNames = new mvke_entity_names_1.MvkeEntityNames();
            this.mvkeId = entity.properties[mvkeEntityNames.mvkeId];
            this.name = entity.properties[mvkeEntityNames.name];
            this.materialnumber = entity.properties[mvkeEntityNames.materialnumber];
            this.qualityproductfamilyid =
                entity.properties[mvkeEntityNames.qualityproductfamilyid];
            this.productlineid = entity.properties[mvkeEntityNames.productlineid];
            this.productType = entity.properties[mvkeEntityNames.productType];
            this.salesRelevance = entity.properties[mvkeEntityNames.salesRelevance];
            this.sourceSystem = entity.properties[mvkeEntityNames.sourceSystem];
            this.rmaPart = entity.properties[mvkeEntityNames.rmaPart];
            this.productFamily = entity.properties[mvkeEntityNames.productFamily];
            this.productDescription =
                entity.properties[mvkeEntityNames.productDescription];
            this.endOfService = entity.properties[mvkeEntityNames.endOfService];
            this.endOfLife = entity.properties[mvkeEntityNames.endOfLife];
            this.deviceId = entity.properties[mvkeEntityNames.deviceId];
            this.dangerousGoods = entity.properties[mvkeEntityNames.dangerousGoods];
            this.companyCode = entity.properties[mvkeEntityNames.companyCode];
            this.baseUnitId = entity.properties[mvkeEntityNames.baseUnitId];
        }
    }
    return MvkeEntity;
}());
exports.MvkeEntity = MvkeEntity;


/***/ }),

/***/ "./src/mvke/mvke.ts":
/*!**************************!*\
  !*** ./src/mvke/mvke.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mvke_entity_names_1 = __webpack_require__(/*! ./mvke.entity-names */ "./src/mvke/mvke.entity-names.ts");
var Mvke = (function () {
    function Mvke() {
    }
    Mvke.prototype.retrieveById = function (mvkeId) {
        return new Promise(function (resolve, reject) {
            var mvkeEntityNames = new mvke_entity_names_1.MvkeEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(mvkeEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(mvkeEntityNames.mvkeId, 'eq', mvkeId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject('MVKE Record not found!');
                }
            }, function (error) {
                alert("Mvke retrieveById error:\n " + error);
                reject(error);
            }, null);
        });
    };
    Mvke.prototype.retrieveJsonById = function (mvkeId) {
        return new Promise(function (resolve, reject) {
            var mvkeEntityNames = new mvke_entity_names_1.MvkeEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(mvkeEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(mvkeEntityNames.mvkeId, 'eq', mvkeId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject('MVKE Record not found!');
                }
            }, function (error) {
                alert("Mvke retrieveById error:\n " + error);
                reject(error);
            }, null);
        });
    };
    Mvke.prototype.retrieveJsonByMaterialNo = function (materialNumber) {
        return new Promise(function (resolve, reject) {
            var mvkeEntityNames = new mvke_entity_names_1.MvkeEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(mvkeEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(mvkeEntityNames.materialnumber, 'eq', materialNumber);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject('MVKE Record not found!');
                }
            }, function (error) {
                alert("Mvke retrieveById error:\n " + error);
                reject(error);
            }, null);
        });
    };
    return Mvke;
}());
exports.Mvke = Mvke;


/***/ }),

/***/ "./src/pricecalculation/price-calculation.context.ts":
/*!***********************************************************!*\
  !*** ./src/pricecalculation/price-calculation.context.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PriceCalculationContext = (function () {
    function PriceCalculationContext(localMaterialEntity, systemUserEntity, serviceOrderEntity) {
        this.localMaterialEntity = localMaterialEntity;
        this.systemUserEntity = systemUserEntity;
        this.serviceOrderEntity = serviceOrderEntity;
    }
    return PriceCalculationContext;
}());
exports.PriceCalculationContext = PriceCalculationContext;


/***/ }),

/***/ "./src/pricecalculation/price-calculation.manager.ts":
/*!***********************************************************!*\
  !*** ./src/pricecalculation/price-calculation.manager.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var price_calculation_result_1 = __webpack_require__(/*! ./price-calculation.result */ "./src/pricecalculation/price-calculation.result.ts");
var systemuser_1 = __webpack_require__(/*! ../systemuser/systemuser */ "./src/systemuser/systemuser.ts");
var applicationfeature_1 = __webpack_require__(/*! ../applicationfeature/applicationfeature */ "./src/applicationfeature/applicationfeature.ts");
var localmaterial_data_1 = __webpack_require__(/*! ../localmaterial/localmaterial.data */ "./src/localmaterial/localmaterial.data.ts");
var systemuser_entity_1 = __webpack_require__(/*! ../systemuser/systemuser.entity */ "./src/systemuser/systemuser.entity.ts");
var localmaterial_entity_1 = __webpack_require__(/*! ../localmaterial/localmaterial.entity */ "./src/localmaterial/localmaterial.entity.ts");
var pricelistitem_data_1 = __webpack_require__(/*! ../pricelistitem/pricelistitem.data */ "./src/pricelistitem/pricelistitem.data.ts");
var price_calculation_context_1 = __webpack_require__(/*! ../pricecalculation/price-calculation.context */ "./src/pricecalculation/price-calculation.context.ts");
var installedbase_1 = __webpack_require__(/*! ../installedbase/installedbase */ "./src/installedbase/installedbase.ts");
var installedbase_entity_1 = __webpack_require__(/*! ../installedbase/installedbase.entity */ "./src/installedbase/installedbase.entity.ts");
var material_determination_entity_1 = __webpack_require__(/*! ../materialdetermination/material-determination.entity */ "./src/materialdetermination/material-determination.entity.ts");
var material_determination_1 = __webpack_require__(/*! ../materialdetermination/material-determination */ "./src/materialdetermination/material-determination.ts");
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder/serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var serviceorder_entity_1 = __webpack_require__(/*! ../serviceorder/serviceorder.entity */ "./src/serviceorder/serviceorder.entity.ts");
var servicedevicemapping_1 = __webpack_require__(/*! ../serviceordermapping/servicedevicemapping */ "./src/serviceordermapping/servicedevicemapping.ts");
var pricelistitem_entity_1 = __webpack_require__(/*! ../pricelistitem/pricelistitem.entity */ "./src/pricelistitem/pricelistitem.entity.ts");
var contracttype_1 = __webpack_require__(/*! ../contracttype/contracttype */ "./src/contracttype/contracttype.ts");
var PriceCalculationManager = (function () {
    function PriceCalculationManager() {
    }
    PriceCalculationManager.prototype.execute = function (localMaterialId, ownerId, serviceOrderId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (localMaterialId === null ||
                localMaterialId === '' ||
                ownerId === null ||
                ownerId === '' ||
                serviceOrderId === null ||
                serviceOrderId === '') {
                resolve(_this.generateInvalidPriceResult());
            }
            else {
                var localMaterialData = new localmaterial_data_1.LocalMaterialData();
                var systemUserData_1 = new systemuser_1.SystemUser();
                var serviceOrderData_1 = new serviceorder_data_1.ServiceorderData();
                localMaterialData.retrieveById(localMaterialId).then(function (localMaterial) {
                    var localMaterialEntity = new localmaterial_entity_1.LocalmaterialEntity(localMaterial);
                    systemUserData_1.retrieveById(ownerId).then(function (systemUser) {
                        var systemUserEntity = new systemuser_entity_1.SystemUserEntity(systemUser);
                        serviceOrderData_1.retrieveById(serviceOrderId).then(function (serviceOrder) {
                            var serviceOrderEntity = new serviceorder_entity_1.ServiceorderEntity(serviceOrder);
                            var context = new price_calculation_context_1.PriceCalculationContext(localMaterialEntity, systemUserEntity, serviceOrderEntity);
                            if (localMaterialEntity.type ===
                                100000000 &&
                                localMaterialEntity.charge) {
                                _this.calculateChargedPrice(context).then(function (result) {
                                    resolve(result);
                                });
                            }
                            else {
                                _this.calculatePrice(context).then(function (result) {
                                    resolve(result);
                                });
                            }
                        }, function (error) {
                            reject("price calculation,  get serviceOrder: \n " + error);
                        });
                    }, function (error) {
                        reject("price calculation,  get systemuser: \n " + error);
                    });
                }, function (error) {
                    reject("price calculation,  get localMaterial: \n " + error);
                });
            }
        });
    };
    PriceCalculationManager.prototype.executePriceCalculationForMaterialTypeWithoutServiceOrder = function (localMaterialId, ownerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (localMaterialId == null ||
                localMaterialId === '' ||
                ownerId == null ||
                ownerId === '') {
                resolve(_this.generateInvalidPriceResult());
            }
            var localMaterialData = new localmaterial_data_1.LocalMaterialData();
            var systemUserData = new systemuser_1.SystemUser();
            localMaterialData.retrieveById(localMaterialId).then(function (localMaterial) {
                var localMaterialEntity = new localmaterial_entity_1.LocalmaterialEntity(localMaterial);
                systemUserData.retrieveById(ownerId).then(function (systemUser) {
                    var systemUserEntity = new systemuser_entity_1.SystemUserEntity(systemUser);
                    var context = new price_calculation_context_1.PriceCalculationContext(localMaterialEntity, systemUserEntity, null);
                    if (localMaterialEntity.type ===
                        100000001) {
                        _this.calculatePrice(context).then(function (result) {
                            resolve(result);
                        });
                    }
                    else {
                        resolve(null);
                    }
                }, function (error) {
                    reject("price calculation,  get systemuser: \n " + error);
                });
            }, function (error) {
                reject("price calculation,  get localMaterial: \n " + error);
            });
        });
    };
    PriceCalculationManager.prototype.calculateChargedPrice = function (context) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var installedbaseId = context.serviceOrderEntity.installedbaseid.id;
            var installedBase = new installedbase_1.InstalledBase();
            installedBase.retrieveById(installedbaseId).then(function (installedBase) {
                var installedBaseEntity = new installedbase_entity_1.InstalledBaseEntity(installedBase);
                var mvkeId = context.serviceOrderEntity &&
                    context.serviceOrderEntity.materialnumberid
                    ? context.serviceOrderEntity.materialnumberid.id
                    : null;
                if (mvkeId == null) {
                    resolve(_this.generateInvalidChargedPriceResult());
                }
                var serviceOption = installedBaseEntity.serviceoption;
                var systemChar = installedBaseEntity.systemcharacteristics;
                return _this.retrieveServiceProduct(mvkeId, serviceOption, systemChar).then(function (serviceProductId) {
                    if (serviceProductId == null) {
                        resolve(_this.generateInvalidChargedPriceResult());
                    }
                    resolve(_this.getContracttypeByTypeCode(context, serviceProductId));
                }, function (error) {
                    reject("price calculation,  get serviceProduct: \n " + error);
                });
            }, function (error) {
                reject("price calculation,  get installedbase: \n " + error);
            });
        });
    };
    PriceCalculationManager.prototype.getContracttypeByTypeCode = function (context, serviceProductId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contractType = new contracttype_1.Contracttype();
            var applicationFeature = new applicationfeature_1.ApplicationFeatureSetting();
            applicationFeature
                .retrieveByFeatureKey('Maintenance.DefaultContractTypeName')
                .then(function (appFeatures) {
                if (appFeatures && appFeatures.length > 0) {
                    contractType
                        .retrieveByTypeCode(appFeatures[0].properties['dw_featurevalue'])
                        .then(function (contractTypes) {
                        if (contractTypes && contractTypes.length > 0) {
                            var contractTypeId = contractTypes[0].id;
                            if (context.serviceOrderEntity &&
                                context.serviceOrderEntity.contracttypeid != null) {
                                contractTypeId =
                                    context.serviceOrderEntity.contracttypeid.id;
                            }
                            if (contractTypeId != null && contractTypeId !== undefined) {
                                resolve(_this.getPricelistItem(serviceProductId, contractTypeId));
                            }
                            else {
                                resolve(null);
                            }
                        }
                        else {
                            reject(' PriceCalculationManager.getContracttypeByTypeCode: contract type not found.');
                        }
                    });
                }
                else {
                    reject(' PriceCalculationManager.getContracttypeByTypeCode: application feature not found.');
                }
            });
        });
    };
    PriceCalculationManager.prototype.retrieveServiceProduct = function (mvkeId, serviceOption, systemCharacteristic) {
        return new Promise(function (resolve, reject) {
            var serviceDeviceMapping = new servicedevicemapping_1.ServiceDeviceMapping();
            serviceDeviceMapping
                .retrieveDeviceMappingByMvkeIdAndParams(mvkeId, serviceOption, systemCharacteristic)
                .then(function (deviceMappings) {
                if (deviceMappings.length === 0) {
                    return null;
                }
                if (deviceMappings.length > 1) {
                    return null;
                }
                resolve(deviceMappings[0].properties['serviceProductId'].id);
            }, function (error) {
                reject("price calculation,  get service device mappings: \n " + error);
            });
        });
    };
    PriceCalculationManager.prototype.calculatePrice = function (context) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.identifyMatchingMvke(context).then(function (mvke) {
                if (mvke === null || mvke === undefined || mvke === '') {
                    resolve(_this.generateInvalidPriceResult());
                }
                var priceListItemData = new pricelistitem_data_1.PriceListItemData();
                var contracttypeid = context.serviceOrderEntity &&
                    context.serviceOrderEntity.contracttypeid
                    ? context.serviceOrderEntity.contracttypeid.id
                    : null;
                var salesorganization = context.systemUserEntity
                    ? context.systemUserEntity.salesorganization
                    : null;
                return priceListItemData
                    .retrieveByMaterialContractTypeAndSalesOrg(mvke, contracttypeid, salesorganization)
                    .then(function (priceListItems) {
                    var priceListItemEntity = null;
                    if (priceListItems && priceListItems.length > 0) {
                        priceListItemEntity = new pricelistitem_entity_1.PriceListItemEntity(priceListItems[0]);
                    }
                    if (priceListItemEntity == null ||
                        priceListItemEntity.price == null ||
                        priceListItemEntity.price === 0) {
                        return priceListItemData
                            .retrieveByMaterialSalesOrg(mvke, context.systemUserEntity.salesorganization)
                            .then(function (priceListItems2) {
                            if (priceListItems2 && priceListItems2.length > 0) {
                                resolve(new price_calculation_result_1.PriceCalculationResult(priceListItems2[0]));
                            }
                            else {
                                resolve(_this.generateInvalidPriceResult());
                            }
                        }, function (error) {
                            reject(error +
                                (" price calculation,  retrieve pricelistitem without contracttypeid: \n " + error));
                        });
                    }
                    else {
                        resolve(new price_calculation_result_1.PriceCalculationResult(priceListItems[0]));
                    }
                }, function (error) {
                    reject(" price calculation,  retrieve pricelistitem with contracttypeid: \n " + error);
                });
            }, function (error) {
                reject(" price calculation,  identifyMatchingMvke: \n " + error);
            });
        }).catch(function (priceCalcError) {
            alert("PriceCalculationManager calculatePrice\n      unexpected error:\n      " + JSON.stringify(priceCalcError));
            return Promise.reject(priceCalcError);
        });
    };
    PriceCalculationManager.prototype.generateInvalidPriceResult = function () {
        var priceResult = new price_calculation_result_1.PriceCalculationResult();
        priceResult.isCalculated = false;
        return Promise.resolve(priceResult);
    };
    PriceCalculationManager.prototype.generateInvalidChargedPriceResult = function () {
        var priceResult = new price_calculation_result_1.PriceCalculationResult();
        priceResult.isCalculated = false;
        priceResult.isCharged = true;
        return Promise.resolve(priceResult);
    };
    PriceCalculationManager.prototype.identifyMatchingMvke = function (context) {
        if (context.localMaterialEntity &&
            context.localMaterialEntity.type === 100000000) {
            return this.getMvkeForActivity(context);
        }
        return this.getMvkeForMaterial(context);
    };
    PriceCalculationManager.prototype.getMvkeForMaterial = function (context) {
        var materialno = context &&
            context.localMaterialEntity &&
            context.localMaterialEntity.materialnoid
            ? context.localMaterialEntity.materialnoid.id
            : null;
        return Promise.resolve(materialno);
    };
    PriceCalculationManager.prototype.getMvkeForActivity = function (context) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getPriceGroup(context).then(function (priceGroup) {
                if (priceGroup == null ||
                    priceGroup == undefined ||
                    priceGroup === 0) {
                    resolve('');
                }
                else {
                    var activityTypeId = context &&
                        context.localMaterialEntity &&
                        context.localMaterialEntity.activitytypeid
                        ? context.localMaterialEntity.activitytypeid.id
                        : null;
                    var costCenter = context &&
                        context.systemUserEntity &&
                        context.systemUserEntity.costcenter
                        ? Number(context.systemUserEntity.costcenter)
                        : null;
                    var plant = context && context.systemUserEntity
                        ? context.systemUserEntity.plant
                        : null;
                    if (activityTypeId != null) {
                        return _this.getMatchingMvkeFromMaterialDetermination(activityTypeId, costCenter, priceGroup, plant).then(function (mvkeId) {
                            resolve(mvkeId);
                        }, function (error) {
                            var errMsg = ">>> price calculation, getMatchingMvkeFromMaterialDetermination <<< \n          " + error;
                            reject(errMsg);
                        });
                    }
                    else {
                        resolve(null);
                    }
                }
            }, function (error) {
                var errMsg = ">>> price calculation, getMvkeForActivity getPriceGroup <<< \n          " + error;
                reject(errMsg);
            });
        });
    };
    PriceCalculationManager.prototype.getPriceGroup = function (context) {
        return new Promise(function (resolve, reject) {
            if (context.serviceOrderEntity &&
                context.serviceOrderEntity.serviceordertype ===
                    1) {
                var featureKey = 'ServiceOrderItem.Time.NonEquipment.PriceGroup';
                var applicationFeature = new applicationfeature_1.ApplicationFeatureSetting();
                applicationFeature
                    .retrieveByFeatureKey(featureKey)
                    .then(function (afs) {
                    var priceGroup = 0;
                    if (afs.length > 0) {
                        priceGroup = afs[0].properties['dw_featurevalue'];
                    }
                    resolve(Number(priceGroup));
                });
            }
            var installedBase = new installedbase_1.InstalledBase();
            var installedBaseId = context.serviceOrderEntity && context.serviceOrderEntity.installedbaseid
                ? context.serviceOrderEntity.installedbaseid.id
                : null;
            installedBase.retrieveById(installedBaseId).then(function (installedbaseEntity) {
                var installedBase = new installedbase_entity_1.InstalledBaseEntity(installedbaseEntity);
                var localMaterialId = installedBase && installedBase.localmaterialid
                    ? installedBase.localmaterialid.id
                    : null;
                if (localMaterialId) {
                    var localMaterialData = new localmaterial_data_1.LocalMaterialData();
                    return localMaterialData.retrieveById(localMaterialId).then(function (localMaterialEntity) {
                        var localMaterial = new localmaterial_entity_1.LocalmaterialEntity(localMaterialEntity);
                        if (localMaterial.pricegroup == null ||
                            localMaterial.pricegroup == undefined ||
                            localMaterial.pricegroup === '0') {
                            resolve(0);
                        }
                        resolve(Number(localMaterial.pricegroup));
                    }, function (error) {
                        reject(error +
                            ' price calculation, retrieve localMaterial from installedbase to get price group: \n');
                    });
                }
                else {
                    resolve(null);
                }
            }, function (error) {
                reject(error + ' price calculation, installed base from serviceorder: \n');
            });
        });
    };
    PriceCalculationManager.prototype.getMatchingMvkeFromMaterialDetermination = function (activityTypeId, matchingCostCenter, matchingPriceGroup, matchingPlant) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var materialDetermination = new material_determination_1.MaterialDetermination();
            materialDetermination.retrieveByActivityType(activityTypeId).then(function (materialDeterminations) {
                var materialNoId = '';
                for (var i = 0; i < materialDeterminations.length &&
                    (materialNoId === '' || materialNoId === null); i++) {
                    var mdRecord = new material_determination_entity_1.MaterialDeterminationEntity(materialDeterminations[i]);
                    if (mdRecord.materialnoid === null ||
                        mdRecord.materialnoid.id === '') {
                        continue;
                    }
                    if (mdRecord.activitytypeid !== null &&
                        mdRecord.activitytypeid.id !== activityTypeId) {
                        continue;
                    }
                    materialNoId = _this.getMaterialNoId(mdRecord, matchingPlant, matchingCostCenter, matchingPriceGroup);
                }
                resolve(materialNoId);
            }, function (error) {
                reject(error +
                    ' price calculation, get matching MVKE for material determination: \n');
            });
        });
    };
    PriceCalculationManager.prototype.getMaterialNoId = function (mdRecord, matchingPlant, matchingCostCenter, matchingPriceGroup) {
        var materialNoId = '';
        var priceGroupFrom = Number(mdRecord.pricegroupfrom);
        var priceGroupTo = Number(mdRecord.pricegroupto);
        var costCenter = Number(mdRecord.costcenter);
        var priceGroup = Number(mdRecord.pricegroup);
        if ((isNaN(costCenter) || costCenter === matchingCostCenter) &&
            (mdRecord.plant == null || mdRecord.plant === matchingPlant) &&
            (isNaN(priceGroup) || priceGroup === matchingPriceGroup) &&
            (isNaN(priceGroupFrom) || priceGroupFrom <= matchingPriceGroup) &&
            (isNaN(priceGroupTo) || priceGroupTo >= matchingPriceGroup)) {
            materialNoId = mdRecord.materialnoid.id;
        }
        return materialNoId;
    };
    PriceCalculationManager.prototype.getPricelistItem = function (serviceProductId, contractTypeId) {
        return new Promise(function (resolve, reject) {
            var priceListItemData = new pricelistitem_data_1.PriceListItemData();
            priceListItemData
                .retrieveByServiceProductIdContractType(serviceProductId, contractTypeId)
                .then(function (priceListItems) {
                if (priceListItems && priceListItems.length > 0) {
                    var result = new price_calculation_result_1.PriceCalculationResult(priceListItems[0]);
                    result.isCharged = true;
                    resolve(result);
                }
                else {
                    resolve(null);
                }
            }, reject);
        });
    };
    return PriceCalculationManager;
}());
exports.PriceCalculationManager = PriceCalculationManager;


/***/ }),

/***/ "./src/pricecalculation/price-calculation.result.ts":
/*!**********************************************************!*\
  !*** ./src/pricecalculation/price-calculation.result.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pricelistitem_entity_1 = __webpack_require__(/*! ../pricelistitem/pricelistitem.entity */ "./src/pricelistitem/pricelistitem.entity.ts");
var pricelistitem_entity_names_1 = __webpack_require__(/*! ../pricelistitem/pricelistitem.entity-names */ "./src/pricelistitem/pricelistitem.entity-names.ts");
var PriceCalculationResult = (function () {
    function PriceCalculationResult(entity) {
        if (entity) {
            var names = new pricelistitem_entity_names_1.PriceListItemEntityNames();
            if (entity.entityName != names.entityLogicalName) {
                throw new Error("PriceCalculationResult.constructor: invalid argument! Entity must be of type " + names.entityLogicalName);
            }
            var priceListItem = new pricelistitem_entity_1.PriceListItemEntity(entity);
            this.currencyname = priceListItem.transactioncurrencyid.primaryName;
            this.isCalculated = priceListItem.price != null;
            this.isCharged = false;
            this.price = priceListItem.price;
        }
        else {
            this.isCalculated = false;
            ;
        }
    }
    return PriceCalculationResult;
}());
exports.PriceCalculationResult = PriceCalculationResult;


/***/ }),

/***/ "./src/pricelistitem/pricelistitem.data.ts":
/*!*************************************************!*\
  !*** ./src/pricelistitem/pricelistitem.data.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pricelistitem_entity_names_1 = __webpack_require__(/*! ./pricelistitem.entity-names */ "./src/pricelistitem/pricelistitem.entity-names.ts");
var PriceListItemData = (function () {
    function PriceListItemData() {
    }
    PriceListItemData.prototype.retrieveByServiceProductIdContractType = function (serviceProductId, contractTypeId) {
        return new Promise(function (resolve, reject) {
            var fields = new pricelistitem_entity_names_1.PriceListItemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(fields.materialnoid, 'eq', serviceProductId);
            entity.filter.where(fields.contracttype, 'eq', contractTypeId);
            var orderByModified = new MobileCRM.FetchXml.Order(fields.modifiedon, true);
            entity.order.push(orderByModified);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', resolve, reject, null);
        });
    };
    PriceListItemData.prototype.retrieveByMaterialSalesOrg = function (materialId, salesOrganization) {
        return new Promise(function (resolve, reject) {
            var fields = new pricelistitem_entity_names_1.PriceListItemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(fields.materialnoid, 'eq', materialId);
            entity.filter.where(fields.salesorganization, 'eq', salesOrganization);
            var orderByModified = new MobileCRM.FetchXml.Order(fields.modifiedon, true);
            entity.order.push(orderByModified);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', resolve, reject, null);
        });
    };
    PriceListItemData.prototype.retrieveByMaterialContractTypeAndSalesOrg = function (materialId, contractTypeId, salesOrganization) {
        return new Promise(function (resolve, reject) {
            var fields = new pricelistitem_entity_names_1.PriceListItemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(fields.materialnoid, 'eq', materialId);
            entity.filter.where(fields.contracttype, 'eq', contractTypeId);
            entity.filter.where(fields.salesorganization, 'eq', salesOrganization);
            var orderByModified = new MobileCRM.FetchXml.Order(fields.modifiedon, true);
            entity.order.push(orderByModified);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', resolve, reject, null);
        });
    };
    PriceListItemData.prototype.retrieveJsonByMvkeAndBusinessUnit = function (mvkeId, businessUnitId) {
        return new Promise(function (resolve, reject) {
            var priceListItemEntityNames = new pricelistitem_entity_names_1.PriceListItemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(priceListItemEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(priceListItemEntityNames.materialnoid, 'eq', mvkeId);
            entity.filter.where(priceListItemEntityNames.owningbusinessunit, 'eq', businessUnitId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    resolve(null);
                }
            }, function (error) {
                MobileCRM.bridge.alert(error);
                reject(error);
            }, null);
        });
    };
    return PriceListItemData;
}());
exports.PriceListItemData = PriceListItemData;


/***/ }),

/***/ "./src/pricelistitem/pricelistitem.entity-names.ts":
/*!*********************************************************!*\
  !*** ./src/pricelistitem/pricelistitem.entity-names.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PriceListItemEntityNames = (function () {
    function PriceListItemEntityNames() {
        this.entityLogicalName = "dw_pricelistitem";
        this.contracttype = "dw_contracttypeid";
        this.createdon = "createdon";
        this.transactioncurrencyid = "transactioncurrencyid";
        this.material = "dw_name";
        this.materialnoid = "dw_materialnoid";
        this.modifiedon = "modifiedon";
        this.owner = "ownerid";
        this.price = "dw_price";
        this.pricelistitemid = "dw_pricelistitemid";
        this.salesorganization = "dw_salesorganization";
        this.owningbusinessunit = 'owningbusinessunit';
    }
    return PriceListItemEntityNames;
}());
exports.PriceListItemEntityNames = PriceListItemEntityNames;


/***/ }),

/***/ "./src/pricelistitem/pricelistitem.entity.ts":
/*!***************************************************!*\
  !*** ./src/pricelistitem/pricelistitem.entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pricelistitem_entity_names_1 = __webpack_require__(/*! ./pricelistitem.entity-names */ "./src/pricelistitem/pricelistitem.entity-names.ts");
var PriceListItemEntity = (function () {
    function PriceListItemEntity(entity) {
        if (entity) {
            var fields = new pricelistitem_entity_names_1.PriceListItemEntityNames();
            this.contracttype = entity.properties[fields.contracttype];
            this.createdon = entity.properties[fields.createdon];
            this.transactioncurrencyid = entity.properties[fields.transactioncurrencyid];
            this.material = entity.properties[fields.material];
            this.materialnoid = entity.properties[fields.materialnoid];
            this.modifiedon = entity.properties[fields.modifiedon];
            this.owner = entity.properties[fields.owner];
            this.price = entity.properties[fields.price];
            this.pricelistitemid = entity.properties[fields.pricelistitemid];
            this.salesorganization = entity.properties[fields.salesorganization];
        }
    }
    return PriceListItemEntity;
}());
exports.PriceListItemEntity = PriceListItemEntity;


/***/ }),

/***/ "./src/serviceorder/serviceorder.complete.rules.ts":
/*!*********************************************************!*\
  !*** ./src/serviceorder/serviceorder.complete.rules.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_data_1 = __webpack_require__(/*! ./serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var serviceorder_entity_1 = __webpack_require__(/*! ./serviceorder.entity */ "./src/serviceorder/serviceorder.entity.ts");
var serviceorder_complete_validation_1 = __webpack_require__(/*! ./serviceorder.complete.validation */ "./src/serviceorder/serviceorder.complete.validation.ts");
var serviceorder_validation_result_1 = __webpack_require__(/*! ./serviceorder.validation.result */ "./src/serviceorder/serviceorder.validation.result.ts");
var serviceorder_messages_1 = __webpack_require__(/*! ./serviceorder.messages */ "./src/serviceorder/serviceorder.messages.ts");
var serviceorder_entity_names_1 = __webpack_require__(/*! ./serviceorder.entity-names */ "./src/serviceorder/serviceorder.entity-names.ts");
var systemuser_entity_names_1 = __webpack_require__(/*! ../systemuser/systemuser.entity-names */ "./src/systemuser/systemuser.entity-names.ts");
var installedbase_1 = __webpack_require__(/*! ../installedbase/installedbase */ "./src/installedbase/installedbase.ts");
var installedbase_entity_1 = __webpack_require__(/*! ../installedbase/installedbase.entity */ "./src/installedbase/installedbase.entity.ts");
var ServiceorderCompleteRules = (function () {
    function ServiceorderCompleteRules() {
    }
    ServiceorderCompleteRules.prototype.completeServiceorder = function (serviceorderId, confirmationdate, proformaDetails) {
        var _this = this;
        var soData = new serviceorder_data_1.ServiceorderData();
        return soData.retrieveById(serviceorderId).then(function (soDynEntity) {
            if (soDynEntity) {
                var soRecord_1 = new serviceorder_entity_1.ServiceorderEntity(soDynEntity);
                if (_this.hasConfirmationDate(confirmationdate) &&
                    _this.hasValidStatus(soRecord_1.serviceorderstatus)) {
                    var completeValidation = new serviceorder_complete_validation_1.ServiceorderCompleteValidation(soRecord_1);
                    return completeValidation.validateFieldsForCompletion().then(function (validationResult) {
                        if (validationResult && validationResult.success) {
                            return _this.UpdateServiceorder(soRecord_1, validationResult, confirmationdate, proformaDetails);
                        }
                        else if (validationResult.completioncheckresult &&
                            validationResult.completioncheckresult > 0) {
                            return _this.updateCompletionCheckResult(soData, serviceorderId, validationResult);
                        }
                        else {
                            alert("completeServiceorder unexpected validation error:\n                  " + validationResult.message);
                            return Promise.resolve(validationResult);
                        }
                    }, function (error) {
                        var validationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
                        validationResult.success = false;
                        validationResult.message = "ServiceorderCompleteRules validateFieldsForCompletion error:\n                 " + error;
                        return Promise.resolve(validationResult);
                    });
                }
                else {
                    return _this.checkAndSetInvalidStatusError(soRecord_1, confirmationdate);
                }
            }
            else {
                var validationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
                validationResult.success = false;
                validationResult.message = "No Serviceorder was found with the Id: [" + serviceorderId + "]";
                return Promise.resolve(validationResult);
            }
        }, function (error) {
            var errMsg = "ServiceorderCompleteRules completeServiceorder error:\n        " + error + " ";
            alert(errMsg);
            var validationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
            validationResult.success = false;
            validationResult.message = errMsg;
            return Promise.resolve(validationResult);
        });
    };
    ServiceorderCompleteRules.prototype.updateCompletionCheckResult = function (soData, serviceorderId, validationResult) {
        var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
        var soEntity = new MobileCRM.DynamicEntity(soEntityNames.entityLogicalName, serviceorderId);
        var props = soEntity.properties;
        props[soEntityNames.completioncheckresult] =
            validationResult.completioncheckresult;
        return soData.UpdateServiceorderProperties(soEntity).then(function (soUpdated) {
            if (!soUpdated) {
                alert("could not update the Serviceorder record:\n          " + JSON.stringify(soEntity));
            }
            return Promise.resolve(validationResult);
        });
    };
    ServiceorderCompleteRules.prototype.checkAndSetInvalidStatusError = function (soRecord, confirmationdate) {
        var soMessages = new serviceorder_messages_1.ServiceorderMessages();
        var validationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
        validationResult.success = false;
        if (!this.hasValidStatus(soRecord.serviceorderstatus)) {
            if (this.isStatusGatekeeperOrProforma) {
                validationResult.success = true;
            }
            validationResult.message =
                '[' +
                    soRecord.serviceordernumber +
                    '] ' +
                    soMessages.serviceorderStatusMessageDefault;
            validationResult.messageKey = soMessages.serviceorderStatusMessageKey;
        }
        else if (!this.hasConfirmationDate(confirmationdate)) {
            validationResult.message =
                '[' +
                    soRecord.serviceordernumber +
                    '] ' +
                    soMessages.serviceorderConfirmationDateMessageDefault;
            validationResult.messageKey =
                soMessages.serviceorderConfirmationDateMessageKey;
        }
        else {
            validationResult.message = "ServiceorderCompleteRules Invalid Serviceorderstatus: >>\n      " + soRecord.serviceorderstatus + "<<";
        }
        return Promise.resolve(validationResult);
    };
    ServiceorderCompleteRules.prototype.UpdateServiceorder = function (soRecord, validationResult, confirmationdate, proformaDetails) {
        var _this = this;
        return this.getRescoExecutingUserSettings().then(function (userSettings) {
            if (userSettings) {
                var serviceorderId_1 = soRecord.serviceorderid;
                var soEntityNames_1 = new serviceorder_entity_names_1.ServiceorderEntityNames();
                var soEntity_1 = new MobileCRM.DynamicEntity(soEntityNames_1.entityLogicalName, serviceorderId_1);
                var props_1 = soEntity_1.properties;
                var sysUserEntityNames = new systemuser_entity_names_1.SystemUserEntityNames();
                var systemuserReference = new MobileCRM.Reference(sysUserEntityNames.entityLogicalName, userSettings.systemUserId);
                props_1[soEntityNames_1.completedby] = systemuserReference;
                props_1[soEntityNames_1.completedon] = new Date().toJSON();
                props_1[soEntityNames_1.completioncheckresult] = -1;
                var soData_1 = new serviceorder_data_1.ServiceorderData();
                return _this.isErpCreated(soRecord).then(function (isCreatedByErp) {
                    if (!isCreatedByErp &&
                        soRecord.serviceordertype !==
                            1) {
                        props_1[soEntityNames_1.serviceorderstatus] =
                            100000002;
                        props_1[soEntityNames_1.gatekeeperreason] =
                            100000001;
                        props_1[soEntityNames_1.serviceorderstatus] =
                            100000002;
                        props_1[soEntityNames_1.mobileofflineaction] =
                            100000003;
                        props_1[soEntityNames_1.statuscode] =
                            100000003;
                    }
                    else {
                        props_1[soEntityNames_1.gatekeeperreason] = null;
                        if (proformaDetails.isProforma) {
                            100000003;
                            props_1[soEntityNames_1.proformacompletiondate] = new Date().toJSON();
                            props_1[soEntityNames_1.serviceorderstatus] =
                                100000003;
                            props_1[soEntityNames_1.mobileofflineaction] =
                                100000004;
                            props_1[soEntityNames_1.statuscode] =
                                100000004;
                        }
                        else {
                            props_1[soEntityNames_1.serviceorderstatus] =
                                2;
                            props_1[soEntityNames_1.mobileofflineaction] =
                                100000002;
                            props_1[soEntityNames_1.statuscode] =
                                100000002;
                            props_1[soEntityNames_1.confirmationdate] = confirmationdate.toJSON();
                        }
                    }
                    return soData_1
                        .UpdateServiceorderProperties(soEntity_1)
                        .then(function (updated) {
                        return _this.handleUpdateServiceorderResults(validationResult, updated, soRecord.serviceordernumber, serviceorderId_1);
                    })
                        .catch(function (error) {
                        return _this.handleUpdateServiceorderError(validationResult, error);
                    });
                });
            }
            else {
                alert("ServiceorderCompleteRules \n          Cannot update the Servicerder without userId!. " + JSON.stringify(soRecord));
                return Promise.resolve(validationResult);
            }
        });
    };
    ServiceorderCompleteRules.prototype.handleUpdateServiceorderResults = function (validationResult, updated, serviceordernumber, serviceorderId) {
        var completeResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
        completeResult.completioncheckresult =
            validationResult.completioncheckresult;
        completeResult.success = updated;
        if (!updated) {
            var errMsg = "ServiceorderCompleteRules Update of Serviceorder failed! \n      serviceordernumber: " + serviceordernumber + " \n      Id: [" + serviceorderId + "]";
            alert(errMsg);
            completeResult.message = errMsg;
        }
        return Promise.resolve(completeResult);
    };
    ServiceorderCompleteRules.prototype.handleUpdateServiceorderError = function (validationResult, soUpdateError) {
        var completeResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
        completeResult.completioncheckresult =
            validationResult.completioncheckresult;
        completeResult.success = false;
        var errMsg = "ServiceorderCompleteRules \n  Update Serviceorder after validation. unexpected error: \n" + JSON.stringify(soUpdateError);
        validationResult.message = errMsg;
        alert("" + errMsg);
        completeResult.message = errMsg;
        return Promise.resolve(completeResult);
    };
    ServiceorderCompleteRules.prototype.getRescoExecutingUserSettings = function () {
        return new Promise(function (resolve, reject) {
            MobileCRM.Configuration.requestObject(function (config) {
                resolve(config.settings);
            }, function (error) {
                MobileCRM.bridge.alert("ServiceorderCompleteRules UpdateServiceorder getExecutingUserId an error occurred:\n            " + error + " ");
                reject(error);
            }, null);
        });
    };
    ServiceorderCompleteRules.prototype.isErpCreated = function (soRecord) {
        if (soRecord.installedbaseid) {
            var ib = new installedbase_1.InstalledBase();
            return ib.retrieveById(soRecord.installedbaseid.id).then(function (dynIb) {
                if (dynIb) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIb);
                    var isErP = ibRecord.iserp &&
                        ibRecord.equipmentnumber !== null &&
                        ibRecord.equipmentnumber !== undefined &&
                        ibRecord.equipmentnumber !== '';
                    return Promise.resolve(isErP);
                }
                else {
                    return Promise.resolve(false);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    ServiceorderCompleteRules.prototype.hasConfirmationDate = function (confirmationDate) {
        return confirmationDate !== null && confirmationDate != undefined;
    };
    ServiceorderCompleteRules.prototype.hasValidStatus = function (serviceorderStatus) {
        return (serviceorderStatus === 1 ||
            serviceorderStatus === 100000000 ||
            serviceorderStatus === 100000001);
    };
    ServiceorderCompleteRules.prototype.isStatusGatekeeperOrProforma = function (serviceorderStatus) {
        return (serviceorderStatus === 100000002 ||
            serviceorderStatus === 100000003);
    };
    return ServiceorderCompleteRules;
}());
exports.ServiceorderCompleteRules = ServiceorderCompleteRules;


/***/ }),

/***/ "./src/serviceorder/serviceorder.complete.validation.ts":
/*!**************************************************************!*\
  !*** ./src/serviceorder/serviceorder.complete.validation.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_validation_result_1 = __webpack_require__(/*! ./serviceorder.validation.result */ "./src/serviceorder/serviceorder.validation.result.ts");
var serviceorder_messages_1 = __webpack_require__(/*! ./serviceorder.messages */ "./src/serviceorder/serviceorder.messages.ts");
var softwareversion_1 = __webpack_require__(/*! ./softwareversion */ "./src/serviceorder/softwareversion.ts");
var serviceorderitem_1 = __webpack_require__(/*! ../serviceorderitem/serviceorderitem. */ "./src/serviceorderitem/serviceorderitem..ts");
var accountingindicator_1 = __webpack_require__(/*! ../accountingindicator/accountingindicator */ "./src/accountingindicator/accountingindicator.ts");
var accountingindicator_entity_1 = __webpack_require__(/*! ../accountingindicator/accountingindicator.entity */ "./src/accountingindicator/accountingindicator.entity.ts");
var mvke_1 = __webpack_require__(/*! ../mvke/mvke */ "./src/mvke/mvke.ts");
var mvke_entity_1 = __webpack_require__(/*! ../mvke/mvke.entity */ "./src/mvke/mvke.entity.ts");
var installedbase_1 = __webpack_require__(/*! ../installedbase/installedbase */ "./src/installedbase/installedbase.ts");
var installedbase_entity_1 = __webpack_require__(/*! ../installedbase/installedbase.entity */ "./src/installedbase/installedbase.entity.ts");
var serviceorderitem_entity_1 = __webpack_require__(/*! ../serviceorderitem/serviceorderitem.entity */ "./src/serviceorderitem/serviceorderitem.entity.ts");
var ServiceorderCompleteValidation = (function () {
    function ServiceorderCompleteValidation(serviceorderRecord) {
        this.serviceorderRecord = serviceorderRecord;
        this.serviceorderMsg = new serviceorder_messages_1.ServiceorderMessages();
    }
    ServiceorderCompleteValidation.prototype.validateFieldsForCompletion = function () {
        var soValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
        soValidationResult.success = true;
        if (!this.hasWorkperformed(this.serviceorderRecord.workperformed)) {
            soValidationResult.success = false;
            soValidationResult.completioncheckresult =
                270000002;
            soValidationResult.message =
                '[' +
                    this.serviceorderRecord.serviceordernumber +
                    '] ' +
                    this.serviceorderMsg.workPerformedMessageDefault;
            soValidationResult.messageKey = this.serviceorderMsg.workPerformedKey;
        }
        if (soValidationResult.success &&
            this.emptyOfficeActionAndInvoiceBlockOactYes(this.serviceorderRecord.officeaction, this.serviceorderRecord.invoiceblockoact)) {
            soValidationResult.success = false;
            soValidationResult.completioncheckresult =
                270000003;
            soValidationResult.message =
                '[' +
                    this.serviceorderRecord.serviceordernumber +
                    '] ' +
                    this.serviceorderMsg.oactMessageDefault;
            soValidationResult.messageKey = this.serviceorderMsg.oactKey;
        }
        if (soValidationResult.success &&
            this.isTestProcedureInProgress(this.serviceorderRecord.testprocedurestatus, this.serviceorderRecord.serviceordertype)) {
            soValidationResult.success = false;
            soValidationResult.completioncheckresult =
                270000014;
            soValidationResult.message =
                '[' +
                    this.serviceorderRecord.serviceordernumber +
                    '] ' +
                    this.serviceorderMsg.testProcedureStatusMessageDefault;
            soValidationResult.messageKey = this.serviceorderMsg.testProcedureStatusKey;
        }
        if (soValidationResult.success &&
            this.isStatusCostEstimation(this.serviceorderRecord.serviceorderstatus)) {
            soValidationResult.success = false;
            soValidationResult.completioncheckresult =
                270000015;
            soValidationResult.message =
                '[' +
                    this.serviceorderRecord.serviceordernumber +
                    '] ' +
                    this.serviceorderMsg.costEstimationStatusMessageDefault;
            soValidationResult.messageKey = this.serviceorderMsg.costEstimationStatusKey;
        }
        if (soValidationResult.success) {
            return this.validatePromiseDependentFields();
        }
        else {
            return Promise.resolve(soValidationResult);
        }
    };
    ServiceorderCompleteValidation.prototype.validatePromiseDependentFields = function () {
        var _this = this;
        return this.hasMultipleSoftwareVersions(this.serviceorderRecord.softwareversionid, this.serviceorderRecord.installedbaseid)
            .then(function (hasMultipleVersions) {
            if (hasMultipleVersions) {
                var soValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
                soValidationResult.success = false;
                soValidationResult.completioncheckresult =
                    270000004;
                soValidationResult.message =
                    '[' +
                        _this.serviceorderRecord.serviceordernumber +
                        '] ' +
                        _this.serviceorderMsg.softwareVersionMessageDefault;
                soValidationResult.messageKey = _this.serviceorderMsg.softwareVersionKey;
                return Promise.resolve(soValidationResult);
            }
            else {
                return _this.istTimeForRepairORMaintenanceRegistered(_this.serviceorderRecord.serviceordertype, _this.serviceorderRecord.serviceorderid).then(function (isTimeRegistered) {
                    if (!isTimeRegistered) {
                        return _this.resolveResults(false, 270000001, _this.serviceorderMsg.timeForRepairOrMaintenanceMessageDefault, _this.serviceorderMsg.timeForRepairOrMaintenanceMessageKey);
                    }
                    else {
                        return _this.isSoWithoutEquipmentAndNoServiceorderitemsRegistered(_this.serviceorderRecord.serviceordertype, _this.serviceorderRecord.serviceorderid).then(function (hasNoSoItemsRegistered) {
                            if (hasNoSoItemsRegistered) {
                                return _this.resolveResults(false, 270000000, _this.serviceorderMsg.timeOrMaterialMessageDefault, _this.serviceorderMsg.timeOrMaterialMessageKey);
                            }
                            else {
                                return _this.validateRelatedRecordsConditionPartOne();
                            }
                        });
                    }
                });
            }
        }, function (error) {
            var soValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
            soValidationResult.success = false;
            soValidationResult.message = "validatePromiseDependentFields hasMultipleSoftwareVersions error:\n          serviceordernumber: " + _this.serviceorderRecord.serviceordernumber + "\n          error: " + error;
            alert("" + soValidationResult.message);
            return Promise.resolve(soValidationResult);
        })
            .catch(function (error) {
            var soValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
            soValidationResult.success = false;
            soValidationResult.message = "validatePromiseDependentFields catch: \n         serviceordernumber: " + _this.serviceorderRecord.serviceordernumber + "\n        error: " + error;
            alert("" + soValidationResult.message);
            return Promise.resolve(soValidationResult);
        });
    };
    ServiceorderCompleteValidation.prototype.validateRelatedRecordsConditionPartOne = function () {
        var _this = this;
        return this.isAnyTraceablePartWithRequiredFieldsEmpty(this.serviceorderRecord.serviceorderid).then(function (missingRequiredFields) {
            if (missingRequiredFields) {
                return _this.resolveResults(false, 270000011, _this.serviceorderMsg.traceablePartsMessageDefault, _this.serviceorderMsg.traceablePartsMessageKey);
            }
            else {
                var soItem = new serviceorderitem_1.ServiceOrderItem();
                return soItem
                    .existsAnySoItemWithoutQuantity(_this.serviceorderRecord.serviceorderid)
                    .then(function (hasRecordsWithoutQuantity) {
                    if (hasRecordsWithoutQuantity) {
                        return _this.resolveResults(false, 270000012, _this.serviceorderMsg.quantityMessageDefault, _this.serviceorderMsg.quantityMessageKey);
                    }
                    else {
                        var soItem_1 = new serviceorderitem_1.ServiceOrderItem();
                        return soItem_1
                            .existsAnySoItemRecordWithoutPrice(_this.serviceorderRecord.serviceorderid)
                            .then(function (hasRecordWithoutPrice) {
                            if (hasRecordWithoutPrice) {
                                return _this.resolveResults(false, 270000013, _this.serviceorderMsg.priceMessageDefault, _this.serviceorderMsg.priceMessageKey);
                            }
                            else {
                                return _this.validateRelatedRecordsConditionPartTwo();
                            }
                        });
                    }
                });
            }
        });
    };
    ServiceorderCompleteValidation.prototype.validateRelatedRecordsConditionPartTwo = function () {
        var _this = this;
        return this.validateAccountingIndicator().then(function (accIndResult) {
            if (accIndResult && accIndResult.success) {
                return _this.hasValidErrorTree(_this.serviceorderRecord.serviceorderid).then(function (validErrorTree) {
                    if (!validErrorTree) {
                        return _this.resolveResults(false, 270000006, _this.serviceorderMsg.errorTreeMessageDefault, _this.serviceorderMsg.errorTreeMessageKey);
                    }
                    else {
                        return _this.validateUdi();
                    }
                });
            }
            else {
                return Promise.resolve(accIndResult);
            }
        });
    };
    ServiceorderCompleteValidation.prototype.validateUdi = function () {
        var _this = this;
        return this.isMaterialUdiRelevantAndMissingUdi(this.serviceorderRecord.serviceorderid).then(function (missingUdi) {
            if (missingUdi) {
                return _this.resolveResults(false, 270000010, _this.serviceorderMsg.udiMaterialMessageDefault, _this.serviceorderMsg.udiMaterialMessageKey);
            }
            else {
                return _this.isEquipmentUdiRelevantAndMissingUdi().then(function (missingUdiForEquip) {
                    if (missingUdiForEquip) {
                        return _this.resolveResults(false, 270000009, _this.serviceorderMsg.udiEquipmentMessageDefault, _this.serviceorderMsg.udiEquipmentMessageKey);
                    }
                    else {
                        var soValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
                        soValidationResult.success = true;
                        soValidationResult.message = _this.serviceorderMsg.validationSuccessMessageDefault;
                        soValidationResult.messageKey = _this.serviceorderMsg.validationSuccessMessageKey;
                        return Promise.resolve(soValidationResult);
                    }
                });
            }
        });
    };
    ServiceorderCompleteValidation.prototype.isEquipmentUdiRelevantAndMissingUdi = function () {
        var _this = this;
        var installedbaseId = this.serviceorderRecord.installedbaseid
            ? this.serviceorderRecord.installedbaseid.id
            : null;
        if (installedbaseId === null) {
            return Promise.resolve(false);
        }
        else {
            var ib = new installedbase_1.InstalledBase();
            return ib.retrieveById(installedbaseId).then(function (dynInstalledbase) {
                var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynInstalledbase);
                return Promise.resolve(ibRecord.udirelevant &&
                    (_this.serviceorderRecord.uniquedeviceidentifier === null ||
                        _this.serviceorderRecord.uniquedeviceidentifier === undefined ||
                        _this.serviceorderRecord.uniquedeviceidentifier === ''));
            });
        }
    };
    ServiceorderCompleteValidation.prototype.isMaterialUdiRelevantAndMissingUdi = function (serviceorderId) {
        var soItem = new serviceorderitem_1.ServiceOrderItem();
        return soItem
            .retrieveItemsWithMissingUdiForMaterial(serviceorderId)
            .then(function (dynSoItems) {
            var missingUdi = false;
            if (dynSoItems && dynSoItems.length > 0) {
                for (var i = 0; i < dynSoItems.length && !missingUdi; i++) {
                    var soItemRecord = new serviceorderitem_entity_1.ServiceOrderItemEntity(dynSoItems[0]);
                    if (soItemRecord &&
                        (soItemRecord.uniqueDeviceIdentifier === null ||
                            soItemRecord.uniqueDeviceIdentifier === undefined)) {
                        missingUdi = true;
                    }
                }
            }
            return Promise.resolve(missingUdi);
        });
    };
    ServiceorderCompleteValidation.prototype.validateAccountingIndicator = function () {
        var _this = this;
        var accountingIndicatorId = this.serviceorderRecord.accountingindicatorid
            ? this.serviceorderRecord.accountingindicatorid.id
            : null;
        return this.hasAccountingIndicatorWithoutInternalOrder(accountingIndicatorId).then(function (intenalOrderValidationFailed) {
            if (intenalOrderValidationFailed) {
                return _this.resolveResults(false, 270000008, _this.serviceorderMsg.internalorderMessageDefault, _this.serviceorderMsg.internalorderMessageKey);
            }
            else {
                return _this.hasAccountingIndicatorWithoutCostcenter(accountingIndicatorId).then(function (costcenterValidationFailed) {
                    if (costcenterValidationFailed) {
                        return _this.resolveResults(false, 270000007, _this.serviceorderMsg.costcenterMessageDefault, _this.serviceorderMsg.costcenterMessageKey);
                    }
                    else {
                        return _this.validateErrorCausingPart(accountingIndicatorId);
                    }
                });
            }
        });
    };
    ServiceorderCompleteValidation.prototype.validateErrorCausingPart = function (accountingIndicatorId) {
        var _this = this;
        return this.hasAccountingIndicatorWithoutErrorCause(accountingIndicatorId).then(function (errorCauseValidationFailed) {
            if (errorCauseValidationFailed) {
                return _this.resolveResults(false, 270000005, _this.serviceorderMsg.errorCauseWarantyMessageDefault, _this.serviceorderMsg.errorCauseWarrantyMessageKey);
            }
            else {
                var accIndValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
                accIndValidationResult.success = true;
                return Promise.resolve(accIndValidationResult);
            }
        });
    };
    ServiceorderCompleteValidation.prototype.hasValidErrorTree = function (serviceorderId) {
        var _this = this;
        var soItem = new serviceorderitem_1.ServiceOrderItem();
        var mvkeId = this.serviceorderRecord.materialnumberid
            ? this.serviceorderRecord.materialnumberid.id
            : null;
        return this.hasQualityProductFamily(mvkeId).then(function (hasQPF) {
            if (hasQPF) {
                return soItem
                    .getNumberOfErrorCausingParts(serviceorderId)
                    .then(function (errorCauseCounter) {
                    if (errorCauseCounter > 0) {
                        return _this.isErrorTreeAndDescriptionValid(serviceorderId, errorCauseCounter).then(function (isValid) {
                            return Promise.resolve(isValid);
                        });
                    }
                    else {
                        return soItem
                            .getNumberOfMissingErrorDescription(serviceorderId)
                            .then(function (errorDescriptionCounter) {
                            return Promise.resolve(errorDescriptionCounter > 0);
                        });
                    }
                });
            }
            else {
                return Promise.resolve(true);
            }
        });
    };
    ServiceorderCompleteValidation.prototype.isErrorTreeAndDescriptionValid = function (serviceorderId, errorCauseCounter) {
        var soItem = new serviceorderitem_1.ServiceOrderItem();
        return soItem
            .getNumberOfErrorTree(serviceorderId)
            .then(function (errorTreeCounter) {
            if (errorTreeCounter < errorCauseCounter) {
                return Promise.resolve(false);
            }
            else {
                return soItem
                    .getNumberOfMissingErrorDescription(serviceorderId)
                    .then(function (errorDescriptionCounter) {
                    return Promise.resolve(errorDescriptionCounter > 0);
                });
            }
        });
    };
    ServiceorderCompleteValidation.prototype.hasQualityProductFamily = function (mvkeId) {
        var mvke = new mvke_1.Mvke();
        if (mvkeId != null) {
            return mvke.retrieveById(mvkeId).then(function (dynMmvke) {
                var mvkeRecord = new mvke_entity_1.MvkeEntity(dynMmvke);
                return Promise.resolve(mvkeRecord &&
                    mvkeRecord.qualityproductfamilyid !== null &&
                    mvkeRecord.qualityproductfamilyid !== undefined);
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    ServiceorderCompleteValidation.prototype.resolveResults = function (success, completioncheckresult, message, messageKey) {
        var soValidationResult = new serviceorder_validation_result_1.ServiceorderValidationResult();
        soValidationResult.success = success;
        soValidationResult.completioncheckresult = completioncheckresult;
        soValidationResult.message =
            '[' + this.serviceorderRecord.serviceordernumber + '] ' + message;
        soValidationResult.messageKey = messageKey;
        return Promise.resolve(soValidationResult);
    };
    ServiceorderCompleteValidation.prototype.hasWorkperformed = function (workperformed) {
        return workperformed !== null && workperformed !== undefined;
    };
    ServiceorderCompleteValidation.prototype.emptyOfficeActionAndInvoiceBlockOactYes = function (officeaction, invoiceblockoact) {
        return ((officeaction === null || officeaction === undefined) &&
            invoiceblockoact === 100000001);
    };
    ServiceorderCompleteValidation.prototype.isTestProcedureInProgress = function (testprocedurestatus, serviceorderType) {
        return (this.isTypeRepairOrMaintenance(serviceorderType) &&
            testprocedurestatus == 1);
    };
    ServiceorderCompleteValidation.prototype.isTypeRepairOrMaintenance = function (serviceorderType) {
        return (serviceorderType === 4 ||
            serviceorderType == 3);
    };
    ServiceorderCompleteValidation.prototype.isStatusCostEstimation = function (serviceorderstatus) {
        return serviceorderstatus === 100000001;
    };
    ServiceorderCompleteValidation.prototype.hasMultipleSoftwareVersions = function (softwareversionid, installedbaseid) {
        var invalidSoftwareVersionId = softwareversionid === null || softwareversionid === undefined;
        var validInstalledbaseId = installedbaseid !== null && installedbaseid !== undefined;
        if (invalidSoftwareVersionId) {
            if (validInstalledbaseId) {
                var swVersion = new softwareversion_1.SoftwareVersion();
                return swVersion
                    .retrieveByInstalledbaseId(installedbaseid.id)
                    .then(function (dynSoftwareVersions) {
                    return Promise.resolve(invalidSoftwareVersionId &&
                        dynSoftwareVersions &&
                        dynSoftwareVersions.length > 0);
                });
            }
            else {
                return Promise.resolve(false);
            }
        }
        else {
            return Promise.resolve(false);
        }
    };
    ServiceorderCompleteValidation.prototype.istTimeForRepairORMaintenanceRegistered = function (serviceorderType, serviceorderId) {
        if (this.isTypeRepairOrMaintenance(serviceorderType)) {
            var soItem = new serviceorderitem_1.ServiceOrderItem();
            return soItem
                .retrieveByActivityTypeServiceorderId(serviceorderId, 270000000)
                .then(function (dynSoItems) {
                var isTimeRegistered = false;
                if (dynSoItems && dynSoItems.length > 0) {
                    isTimeRegistered = true;
                }
                return Promise.resolve(isTimeRegistered);
            });
        }
        else {
            return Promise.resolve(true);
        }
    };
    ServiceorderCompleteValidation.prototype.isSoWithoutEquipmentAndNoServiceorderitemsRegistered = function (serviceorderType, serviceorderId) {
        if (serviceorderType === 1) {
            var soItem = new serviceorderitem_1.ServiceOrderItem();
            return soItem
                .retrieveByServiceorderId(serviceorderId)
                .then(function (dynSoItems) {
                return Promise.resolve(dynSoItems && dynSoItems.length === 0);
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    ServiceorderCompleteValidation.prototype.isAnyTraceablePartWithRequiredFieldsEmpty = function (serviceorderId) {
        var soItem = new serviceorderitem_1.ServiceOrderItem();
        return soItem
            .retrieveRelatedLocalMaterialWithTraceablePartsFlagYes(serviceorderId)
            .then(function (dynSoItemsTraceable) {
            var isRequiredFieldEmpty = false;
            if (dynSoItemsTraceable && dynSoItemsTraceable.length > 0) {
                for (var j = 0; j < dynSoItemsTraceable.length && !isRequiredFieldEmpty; j++) {
                    var soItemRecord = new serviceorderitem_entity_1.ServiceOrderItemEntity(dynSoItemsTraceable[j]);
                    if (soItemRecord.serialNoOfErrorPart === undefined ||
                        soItemRecord.serialNoOfErrorPart === null ||
                        soItemRecord.serialNoOfNewPart === undefined ||
                        soItemRecord.serialNoOfNewPart === null ||
                        soItemRecord.materialNoOfErrorPart === undefined ||
                        soItemRecord.materialNoOfErrorPart === null) {
                        isRequiredFieldEmpty = true;
                    }
                }
            }
            return Promise.resolve(isRequiredFieldEmpty);
        });
    };
    ServiceorderCompleteValidation.prototype.hasAccountingIndicatorWithoutInternalOrder = function (accountingIndicatorId) {
        var accIndicator = new accountingindicator_1.AcountingIndicator();
        var emptyInternalOrder = this.serviceorderRecord.internalorder === null ||
            this.serviceorderRecord.internalorder === undefined;
        if (accountingIndicatorId && emptyInternalOrder) {
            return accIndicator
                .retrieveById(accountingIndicatorId)
                .then(function (dynAccIndicator) {
                var accIndRecord = new accountingindicator_entity_1.AccountingIndicatorEntity(dynAccIndicator);
                if (accIndRecord &&
                    (accIndRecord.erpAccountingIndicatorCode ===
                        "CA" ||
                        accIndRecord.erpAccountingIndicatorCode ===
                            "IO" ||
                        accIndRecord.erpAccountingIndicatorCode ===
                            "PS")) {
                    return Promise.resolve(true);
                }
                else {
                    return Promise.resolve(false);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    ServiceorderCompleteValidation.prototype.hasAccountingIndicatorWithoutCostcenter = function (accountingIndicatorId) {
        var accIndicator = new accountingindicator_1.AcountingIndicator();
        var emptyCostcenter = this.serviceorderRecord.costcenter === null ||
            this.serviceorderRecord.costcenter === undefined;
        if (accountingIndicatorId && emptyCostcenter) {
            return accIndicator
                .retrieveById(accountingIndicatorId)
                .then(function (dynAccIndicator) {
                var accIndRecord = new accountingindicator_entity_1.AccountingIndicatorEntity(dynAccIndicator);
                if (accIndRecord &&
                    (accIndRecord.erpAccountingIndicatorCode ===
                        "GW" ||
                        accIndRecord.erpAccountingIndicatorCode ===
                            "SC")) {
                    return Promise.resolve(true);
                }
                else {
                    return Promise.resolve(false);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    ServiceorderCompleteValidation.prototype.hasAccountingIndicatorWithoutErrorCause = function (accountingIndicatorId) {
        var _this = this;
        var accIndicator = new accountingindicator_1.AcountingIndicator();
        if (accountingIndicatorId) {
            return accIndicator
                .retrieveById(accountingIndicatorId)
                .then(function (dynAccIndicator) {
                var accIndRecord = new accountingindicator_entity_1.AccountingIndicatorEntity(dynAccIndicator);
                if (accIndRecord &&
                    accIndRecord.erpAccountingIndicatorCode ===
                        "WR") {
                    var soItem = new serviceorderitem_1.ServiceOrderItem();
                    return soItem
                        .getNumberOfErrorCausingParts(_this.serviceorderRecord.serviceorderid)
                        .then(function (numberOfErrorCausingParts) {
                        return Promise.resolve(numberOfErrorCausingParts === 0);
                    });
                }
                else {
                    return Promise.resolve(false);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    return ServiceorderCompleteValidation;
}());
exports.ServiceorderCompleteValidation = ServiceorderCompleteValidation;


/***/ }),

/***/ "./src/serviceorder/serviceorder.data.ts":
/*!***********************************************!*\
  !*** ./src/serviceorder/serviceorder.data.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_entity_1 = __webpack_require__(/*! ./serviceorder.entity */ "./src/serviceorder/serviceorder.entity.ts");
var serviceorder_entity_names_1 = __webpack_require__(/*! ./serviceorder.entity-names */ "./src/serviceorder/serviceorder.entity-names.ts");
var ServiceorderData = (function () {
    function ServiceorderData() {
    }
    ServiceorderData.prototype.retrieveById = function (serviceOrderId) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.where(soEntityNames.serviceorderid, 'eq', serviceOrderId);
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0) {
                    resolve(results[0]);
                }
                else {
                    reject("ServiceorderData retrieveById: record not found!:\n");
                }
            }, function (error) {
                reject("ServiceorderData retrieveById error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.retrieveByDispatchId = function (dispatchId) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            var dispatchIdFilter = new MobileCRM.FetchXml.Filter();
            dispatchIdFilter.type = 'and';
            dispatchIdFilter.where(soEntityNames.dispatchid, 'eq', dispatchId);
            var completedFilter = new MobileCRM.FetchXml.Filter();
            completedFilter.type = 'and';
            completedFilter.where(soEntityNames.serviceorderstatus, 'ne', 2);
            var cancelledFilter = new MobileCRM.FetchXml.Filter();
            cancelledFilter.type = 'and';
            cancelledFilter.where(soEntityNames.serviceorderstatus, 'ne', 3);
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.filters.push(dispatchIdFilter);
            soEntity.filter.filters.push(completedFilter);
            soEntity.filter.filters.push(cancelledFilter);
            var sortOrder = new MobileCRM.FetchXml.Order(soEntityNames.serviceordernumber, false);
            soEntity.order.push(sortOrder);
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceorderData retrieveByDispatchId error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.retrieveNotCancelledByDispatchId = function (dispatchId) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            var dispatchIdFilter = new MobileCRM.FetchXml.Filter();
            dispatchIdFilter.type = 'and';
            dispatchIdFilter.where(soEntityNames.dispatchid, 'eq', dispatchId);
            var cancelledFilter = new MobileCRM.FetchXml.Filter();
            cancelledFilter.type = 'and';
            cancelledFilter.where(soEntityNames.serviceorderstatus, 'ne', 3);
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.filters.push(dispatchIdFilter);
            soEntity.filter.filters.push(cancelledFilter);
            var sortOrder = new MobileCRM.FetchXml.Order(soEntityNames.serviceordernumber, false);
            soEntity.order.push(sortOrder);
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceorderData retrieveByDispatchId error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.retrieveAllDynamicEntitiesByDispatchId = function (dispatchId) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            var dispatchIdFilter = new MobileCRM.FetchXml.Filter();
            dispatchIdFilter.type = 'and';
            dispatchIdFilter.where(soEntityNames.dispatchid, 'eq', dispatchId);
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.filters.push(dispatchIdFilter);
            var sortOrder = new MobileCRM.FetchXml.Order(soEntityNames.serviceordernumber, false);
            soEntity.order.push(sortOrder);
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceorderData retrieveAllDynamicEntitiesByDispatchId error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.retrieveAllByDispatchId = function (dispatchId) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.where(soEntityNames.dispatchid, 'eq', dispatchId);
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('JSON', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceorderData retrieveAllByDispatchId error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.UpdateServiceorderProperties = function (serviceorderEntity) {
        return new Promise(function (resolve, reject) {
            serviceorderEntity.save(function (saveError) {
                if (saveError) {
                    alert("ServiceorderData UpdateServiceorderProperties unexpected error:\n           " + saveError);
                    reject(saveError);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    ServiceorderData.prototype.retrieveServiceorderByIdList = function (serviceOrderIds, serviceorderStatusFilter) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            var soIdFilter = new MobileCRM.FetchXml.Filter();
            soIdFilter.isIn(soEntityNames.serviceorderid, serviceOrderIds);
            var soStatusFilter = new MobileCRM.FetchXml.Filter();
            soStatusFilter.type = 'or';
            soStatusFilter.isIn(soEntityNames.serviceorderstatus, serviceorderStatusFilter);
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            soEntity.filter.filters.push(soIdFilter);
            soEntity.filter.filters.push(soStatusFilter);
            var soFetch = new MobileCRM.FetchXml.Fetch(soEntity);
            soFetch.execute('JSON', function (results) {
                var soEntityList = [];
                if (results && results.length > 0) {
                    results.forEach(function (element) {
                        var soRecord = new serviceorder_entity_1.ServiceorderEntity();
                        soRecord.serviceorderid = element[soEntityNames.serviceorderid];
                        soRecord.serviceordernumber =
                            element[soEntityNames.serviceordernumber];
                        soRecord.serviceorderstatus =
                            element[soEntityNames.serviceorderstatus];
                        soRecord.dispatchid = element[soEntityNames.dispatchid];
                        soEntityList.push(soRecord);
                    });
                }
                resolve(soEntityList);
            }, function (error) {
                alert("ServiceorderData retrieveServiceorderByIdList error: \n          " + error);
                reject(error);
            }, null);
        });
    };
    ServiceorderData.prototype.retrieveSortedRecords = function (recordsFilters, sortingOrder) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.filters = recordsFilters;
            entity.order = sortingOrder;
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceorderData.retrieveRecordsWithFilter error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.retrieveByDispatchIdAndServiceOrderStatuses = function (dispatchId, serviceorderStatuses) {
        return new Promise(function (resolve, reject) {
            var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
            var soEntity = new MobileCRM.FetchXml.Entity(soEntityNames.entityLogicalName);
            soEntity.addAttributes();
            soEntity.filter = new MobileCRM.FetchXml.Filter();
            var dispatchIdFilter = new MobileCRM.FetchXml.Filter();
            dispatchIdFilter.type = 'and';
            dispatchIdFilter.where(soEntityNames.dispatchid, 'eq', dispatchId);
            soEntity.filter.filters.push(dispatchIdFilter);
            serviceorderStatuses.forEach(function (serviceOrderStatus) {
                var statusFilter = new MobileCRM.FetchXml.Filter();
                statusFilter.type = 'and';
                statusFilter.where(soEntityNames.serviceorderstatus, 'eq', serviceOrderStatus);
                soEntity.filter.filters.push(statusFilter);
            });
            var fetch = new MobileCRM.FetchXml.Fetch(soEntity);
            fetch.execute('JSON', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceorderData retrieveByDispatchId error:\n " + error);
            }, null);
        });
    };
    ServiceorderData.prototype.createSoUpdatePromises = function (serviceOrders, soldToParty, shipToParty) {
        var promisesSave = [];
        var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
        serviceOrders.forEach(function (serviceOrder) {
            var serviceOrderId = serviceOrder[soEntityNames.serviceorderid];
            var soToUpdate = new MobileCRM.DynamicEntity(soEntityNames.entityLogicalName, serviceOrderId);
            if (soldToParty != null) {
                var referSoldTo = new MobileCRM.Reference(soldToParty.entityName, soldToParty.id, soldToParty.primaryName);
                soToUpdate.properties[soEntityNames.soldtopartyid] = referSoldTo;
            }
            if (shipToParty != null) {
                var referShipTo = new MobileCRM.Reference(shipToParty.entityName, shipToParty.id, shipToParty.primaryName);
                soToUpdate.properties[soEntityNames.shiptoparty] = referShipTo;
            }
            promisesSave.push(soToUpdate.save(function (error) {
                if (error) {
                    MobileCRM.bridge.alert(error);
                }
            }));
        });
        return promisesSave;
    };
    ServiceorderData.prototype.updateServiceOrders = function (serviceOrders) {
        var promisesSave = [];
        serviceOrders.forEach(function (serviceOrderToUpdate) {
            promisesSave.push(serviceOrderToUpdate.save(function (callBackError) {
                if (callBackError) {
                    MobileCRM.bridge.alert(callBackError);
                }
            }));
        });
        return promisesSave;
    };
    return ServiceorderData;
}());
exports.ServiceorderData = ServiceorderData;


/***/ }),

/***/ "./src/serviceorder/serviceorder.entity-names.ts":
/*!*******************************************************!*\
  !*** ./src/serviceorder/serviceorder.entity-names.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceorderEntityNames = (function () {
    function ServiceorderEntityNames() {
        this.entityLogicalName = 'dw_serviceorder';
        this.id = 'id';
        this.odataEntitySetName = 'dw_serviceorders';
        this.ownerIdSchemaName = 'OwnerId';
        this.createdby = 'createdby';
        this.createdon = 'createdon';
        this.shiptoparty = 'dw_accountid';
        this.accountingindicatorid = 'dw_accountingindicatorid';
        this.accountingindicatorlocked = 'dw_accountingindicatorlocked';
        this.activitycodedate = 'dw_activitycodedate';
        this.activitycodeid = 'dw_activitycodeid';
        this.activitycodename = 'dw_activitycodename';
        this.barcodenumber = 'dw_barcodenumber';
        this.basicenddate = 'dw_basicenddate';
        this.basicstartdate = 'dw_basicstartdate';
        this.charge = 'dw_charge';
        this.companycode = 'dw_companycode';
        this.completedby = 'dw_completedby';
        this.completedon = 'dw_completedon';
        this.completioncheckresult = 'dw_completioncheckresult';
        this.confirmationdate = 'dw_confirmationdate';
        this.contractnumberid = 'dw_contractnumberid';
        this.contracttypeid = 'dw_contracttypeid';
        this.costcenter = 'dw_costcenter';
        this.costestimationacceptancedate = 'dw_costestimationacceptancedate';
        this.costestimationcreationdate = 'dw_costestimationcreationdate';
        this.costestimationresultid = 'dw_costestimationresultid';
        this.costestimationresultname = 'dw_costestimationresultname';
        this.costestimationsenttoerp = 'dw_costestimationsenttoerp';
        this.dispatchid = 'dw_dispatchid';
        this.equipmentnumber = 'dw_equipmentnumber';
        this.erpcreated = 'dw_erpcreated';
        this.fcaserviceorderid = 'dw_fcaserviceorderid';
        this.fsetestcompletiondate = 'dw_fsetestcompletiondate';
        this.gatekeeperreason = 'dw_gatekeeperreason';
        this.groupcriteria = 'dw_groupcriteria';
        this.groupvalue = 'dw_groupvalue';
        this.groupvalueId = 'dw_groupvalueid';
        this.installedbaseid = 'dw_installedbaseid';
        this.internalorder = 'dw_internalorder';
        this.invoiceblockoact = 'dw_invoiceblockoact';
        this.maintenancesequence = 'dw_maintenancesequence';
        this.materialnumberid = 'dw_materialnumberid';
        this.mobileofflineaction = 'dw_mobileofflineaction';
        this.mobileofflineform = 'dw_mobileofflineform';
        this.officeaction = 'dw_officeaction';
        this.plannedservicetime = 'dw_plannedservicetime';
        this.planningvalue = 'dw_planningvalue';
        this.prioritycode = 'dw_prioritycode';
        this.problemreportedon = 'dw_problemreportedon';
        this.productgroupid = 'dw_productgroupid';
        this.proformacompletiondate = 'dw_proformacompletiondate';
        this.purchaseorderno = 'dw_purchaseorderno';
        this.purchaserfromcontact = 'dw_purchaserfromcontact';
        this.reportedproblem = 'dw_reportedproblem';
        this.serialnumber = 'dw_serialnumber';
        this.servicenotification = 'dw_servicenotification';
        this.serviceorderid = 'dw_serviceorderid';
        this.serviceordernumber = 'dw_serviceordernumber';
        this.serviceorderstatus = 'dw_serviceorderstatus';
        this.serviceorderstatusreason = 'dw_serviceorderstatusreason';
        this.serviceordertype = 'dw_serviceordertype';
        this.serviceproductid = 'dw_serviceproductid';
        this.serviceproductquantity = 'dw_serviceproductquantity';
        this.shippinginformation = 'dw_shippinginformation';
        this.signedbyalternative = 'dw_signedbyalternative';
        this.signedbyid = 'dw_signedbyid';
        this.softwareversionid = 'dw_softwareversionid';
        this.soldtopartyid = 'dw_soldtopartyid';
        this.sortcriteria = 'dw_sortcriteria';
        this.subtotalmaterial = 'dw_subtotalmaterial';
        this.subtotalservice = 'dw_subtotalservice';
        this.testprocedurestatus = 'dw_testprocedurestatus';
        this.testtype = 'dw_testtype';
        this.totalamount = 'dw_totalamount';
        this.uniquedeviceidentifier = 'dw_uniquedeviceidentifier';
        this.workperformed = 'dw_workperformed';
        this.modifiedby = 'modifiedby';
        this.modifiedon = 'modifiedon';
        this.ownerid = 'ownerid';
        this.statecode = 'statecode';
        this.statuscode = 'statuscode';
        this.transactioncurrencyid = 'transactioncurrencyid';
        this.sortOrder = 'dw_sortorder';
        this.saveAsReport = 'dw_saveasreport';
    }
    return ServiceorderEntityNames;
}());
exports.ServiceorderEntityNames = ServiceorderEntityNames;


/***/ }),

/***/ "./src/serviceorder/serviceorder.entity.ts":
/*!*************************************************!*\
  !*** ./src/serviceorder/serviceorder.entity.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_entity_names_1 = __webpack_require__(/*! ../serviceorder/serviceorder.entity-names */ "./src/serviceorder/serviceorder.entity-names.ts");
var ServiceorderEntity = (function () {
    function ServiceorderEntity(entity) {
        if (entity && entity.properties) {
            var names = new serviceorder_entity_names_1.ServiceorderEntityNames();
            this.createdby = entity.properties[names.createdby];
            this.createdon = entity.properties[names.createdon];
            this.shiptoparty = entity.properties[names.shiptoparty];
            this.accountingindicatorid =
                entity.properties[names.accountingindicatorid];
            this.accountingindicatorlocked =
                entity.properties[names.accountingindicatorlocked];
            this.activitycodedate = entity.properties[names.activitycodedate];
            this.activitycodeid = entity.properties[names.activitycodeid];
            this.activitycodename = entity.properties[names.activitycodename];
            this.barcodenumber = entity.properties[names.barcodenumber];
            this.basicenddate = entity.properties[names.basicenddate];
            this.basicstartdate = entity.properties[names.basicstartdate];
            this.charge = entity.properties[names.charge];
            this.companycode = entity.properties[names.companycode];
            this.completedby = entity.properties[names.completedby];
            this.completedon = entity.properties[names.completedon];
            this.completioncheckresult =
                entity.properties[names.completioncheckresult];
            this.confirmationdate = entity.properties[names.confirmationdate];
            this.contractnumberid = entity.properties[names.contractnumberid];
            this.contracttypeid = entity.properties[names.contracttypeid];
            this.costcenter = entity.properties[names.costcenter];
            this.costestimationacceptancedate =
                entity.properties[names.costestimationacceptancedate];
            this.costestimationcreationdate =
                entity.properties[names.costestimationcreationdate];
            this.costestimationresultid =
                entity.properties[names.costestimationresultid];
            this.costestimationresultname =
                entity.properties[names.costestimationresultname];
            this.costestimationsenttoerp =
                entity.properties[names.costestimationsenttoerp];
            this.dispatchid = entity.properties[names.dispatchid];
            this.equipmentnumber = entity.properties[names.equipmentnumber];
            this.erpcreated = entity.properties[names.erpcreated];
            this.fcaserviceorderid = entity.properties[names.fcaserviceorderid];
            this.fsetestcompletiondate =
                entity.properties[names.fsetestcompletiondate];
            this.gatekeeperreason = entity.properties[names.gatekeeperreason];
            this.groupcriteria = entity.properties[names.groupcriteria];
            this.groupvalue = entity.properties[names.groupvalue];
            this.groupvalueId = entity.properties[names.groupvalueId];
            this.installedbaseid = entity.properties[names.installedbaseid];
            this.internalorder = entity.properties[names.internalorder];
            this.invoiceblockoact = entity.properties[names.invoiceblockoact];
            this.maintenancesequence = entity.properties[names.maintenancesequence];
            this.materialnumberid = entity.properties[names.materialnumberid];
            this.mobileofflineaction = entity.properties[names.mobileofflineaction];
            this.mobileofflineform = entity.properties[names.mobileofflineform];
            this.officeaction = entity.properties[names.officeaction];
            this.plannedservicetime = entity.properties[names.plannedservicetime];
            this.planningvalue = entity.properties[names.planningvalue];
            this.prioritycode = entity.properties[names.prioritycode];
            this.problemreportedon = entity.properties[names.problemreportedon];
            this.productgroupid = entity.properties[names.productgroupid];
            this.proformacompletiondate =
                entity.properties[names.proformacompletiondate];
            this.purchaseorderno = entity.properties[names.purchaseorderno];
            this.purchaserfromcontact = entity.properties[names.purchaserfromcontact];
            this.reportedproblem = entity.properties[names.reportedproblem];
            this.serialnumber = entity.properties[names.serialnumber];
            this.servicenotification = entity.properties[names.servicenotification];
            this.serviceorderid = entity.properties[names.serviceorderid];
            this.serviceordernumber = entity.properties[names.serviceordernumber];
            this.serviceorderstatus = entity.properties[names.serviceorderstatus];
            this.serviceorderstatusreason =
                entity.properties[names.serviceorderstatusreason];
            this.serviceordertype = entity.properties[names.serviceordertype];
            this.serviceproductid = entity.properties[names.serviceproductid];
            this.serviceproductquantity =
                entity.properties[names.serviceproductquantity];
            this.shippinginformation = entity.properties[names.shippinginformation];
            this.signedbyalternative = entity.properties[names.signedbyalternative];
            this.signedbyid = entity.properties[names.signedbyid];
            this.softwareversionid = entity.properties[names.softwareversionid];
            this.soldtopartyid = entity.properties[names.soldtopartyid];
            this.sortcriteria = entity.properties[names.sortcriteria];
            this.subtotalmaterial = entity.properties[names.subtotalmaterial];
            this.subtotalservice = entity.properties[names.subtotalservice];
            this.testprocedurestatus = entity.properties[names.testprocedurestatus];
            this.testtype = entity.properties[names.testtype];
            this.totalamount = entity.properties[names.totalamount];
            this.uniquedeviceidentifier =
                entity.properties[names.uniquedeviceidentifier];
            this.workperformed = entity.properties[names.workperformed];
            this.modifiedby = entity.properties[names.modifiedby];
            this.modifiedon = entity.properties[names.modifiedon];
            this.ownerid = entity.properties[names.ownerid];
            this.statecode = entity.properties[names.statecode];
            this.statuscode = entity.properties[names.statuscode];
            this.transactioncurrencyid =
                entity.properties[names.transactioncurrencyid];
        }
    }
    return ServiceorderEntity;
}());
exports.ServiceorderEntity = ServiceorderEntity;


/***/ }),

/***/ "./src/serviceorder/serviceorder.messages.ts":
/*!***************************************************!*\
  !*** ./src/serviceorder/serviceorder.messages.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceorderMessages = (function () {
    function ServiceorderMessages() {
        this.workPerformedKey = 'ServiceorderValidationWorkPerformed';
        this.workPerformedMessageDefault = 'Enter Work Performed';
        this.oactKey = 'ServiceOrdeValidationOACt';
        this.oactMessageDefault = 'Enter OACT or set OACT required';
        this.testProcedureStatusKey = 'ServiceordeValidationTestInstruction';
        this.testProcedureStatusMessageDefault = 'Complete or cancel Test Instructions';
        this.costEstimationStatusKey = 'ServiceorderValidationCostEstimation';
        this.costEstimationStatusMessageDefault = 'Complete Cost Estimation';
        this.softwareVersionKey = 'ServiceordeValidationSoftwareVersion';
        this.softwareVersionMessageDefault = 'Enter Software Version';
        this.timeForRepairOrMaintenanceMessageKey = 'ServiceordeValidationRepairOrMaintenance';
        this.timeForRepairOrMaintenanceMessageDefault = 'Register Time for Repair or Maintenance';
        this.timeOrMaterialMessageKey = 'ServiceordeValidationTimeOrMaterial';
        this.timeOrMaterialMessageDefault = 'Register Time or Material for Service Order w/o Equipment';
        this.traceablePartsMessageKey = 'ServiceordeValidationTraceablePartsDetails';
        this.traceablePartsMessageDefault = 'Enter Traceable Parts details';
        this.serviceorderStatusMessageKey = 'ServiceordeValidationInvaidStatus';
        this.serviceorderStatusMessageDefault = 'Service Order Status does not allow Service Order to be completed.';
        this.serviceorderConfirmationDateMessageKey = 'ServiceordeValidationInvaidStatus';
        this.serviceorderConfirmationDateMessageDefault = 'Missing confirmation date.';
        this.quantityMessageKey = 'ServiceordeValidationMissingQuantity';
        this.quantityMessageDefault = 'Enter Quantity greater than 0';
        this.priceMessageKey = 'ServiceordeValidationMissingPrice';
        this.priceMessageDefault = 'Enter Price on Time and Material';
        this.internalorderMessageKey = 'ServiceordeValidationMissingInternalorder';
        this.internalorderMessageDefault = 'Enter Internal Order for Accounting Indicator';
        this.costcenterMessageKey = 'ServiceordeValidationMissingCostcenter';
        this.costcenterMessageDefault = 'Enter Cost Center for Accounting Indicator';
        this.errorCauseWarrantyMessageKey = 'ServiceordeValidationMissingWarrantyErrorCause';
        this.errorCauseWarantyMessageDefault = 'Warranty requires Error Cause';
        this.errorTreeMessageKey = 'ServiceordeValidationMissingErrorTree';
        this.errorTreeMessageDefault = 'Specify Error for Error Cause';
        this.udiMaterialMessageKey = 'ServiceordeValidationMissingUdiMaterial';
        this.udiMaterialMessageDefault = 'Enter UDI for Material';
        this.udiEquipmentMessageKey = 'ServiceordeValidationMissingUdiEquipment';
        this.udiEquipmentMessageDefault = 'Enter UDI for Service Order';
        this.validationSuccessMessageKey = 'ServiceordeValidationSuccess';
        this.validationSuccessMessageDefault = 'Finished validation successfully!';
    }
    return ServiceorderMessages;
}());
exports.ServiceorderMessages = ServiceorderMessages;


/***/ }),

/***/ "./src/serviceorder/serviceorder.proforma-details.ts":
/*!***********************************************************!*\
  !*** ./src/serviceorder/serviceorder.proforma-details.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceorderProformaDetails = (function () {
    function ServiceorderProformaDetails() {
    }
    return ServiceorderProformaDetails;
}());
exports.ServiceorderProformaDetails = ServiceorderProformaDetails;


/***/ }),

/***/ "./src/serviceorder/serviceorder.validation.result.ts":
/*!************************************************************!*\
  !*** ./src/serviceorder/serviceorder.validation.result.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceorderValidationResult = (function () {
    function ServiceorderValidationResult() {
    }
    return ServiceorderValidationResult;
}());
exports.ServiceorderValidationResult = ServiceorderValidationResult;


/***/ }),

/***/ "./src/serviceorder/softwareversion.ts":
/*!*********************************************!*\
  !*** ./src/serviceorder/softwareversion.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var software_version_entity_names_1 = __webpack_require__(/*! ../softwareversion/software.version.entity-names */ "./src/softwareversion/software.version.entity-names.ts");
var installedbase_entity_1 = __webpack_require__(/*! ../installedbase/installedbase.entity */ "./src/installedbase/installedbase.entity.ts");
var installedbase_1 = __webpack_require__(/*! ../installedbase/installedbase */ "./src/installedbase/installedbase.ts");
var SoftwareVersion = (function () {
    function SoftwareVersion() {
    }
    SoftwareVersion.prototype.retrieveByInstalledbaseId = function (installedbaseId) {
        var _this = this;
        return this.retrieveInstalledbase(installedbaseId).then(function (ibRecord) {
            var swResult = [];
            if (ibRecord) {
                var mvkeId = ibRecord.materialnumberid
                    ? ibRecord.materialnumberid.id
                    : null;
                if (mvkeId) {
                    return _this.retriveByMvkeId(mvkeId);
                }
                else {
                    return Promise.resolve(swResult);
                }
            }
        });
    };
    SoftwareVersion.prototype.retriveByMvkeId = function (mvkeId) {
        return new Promise(function (resolve, reject) {
            var swVersionEntityNames = new software_version_entity_names_1.SoftwareVersionEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(swVersionEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(swVersionEntityNames.materialnumberid, 'eq', mvkeId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                alert("SoftwareVersion retriveByMvkeId error:\n " + error);
                reject(error);
            }, null);
        });
    };
    SoftwareVersion.prototype.retrieveInstalledbase = function (installedbaseId) {
        var installedBase = new installedbase_1.InstalledBase();
        return installedBase
            .retrieveById(installedbaseId)
            .then(function (dynInstalledbase) {
            return new installedbase_entity_1.InstalledBaseEntity(dynInstalledbase);
        });
    };
    return SoftwareVersion;
}());
exports.SoftwareVersion = SoftwareVersion;


/***/ }),

/***/ "./src/serviceorder/sorting/equipment.sorting.result.ts":
/*!**************************************************************!*\
  !*** ./src/serviceorder/sorting/equipment.sorting.result.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EquipmentSortingResult = (function () {
    function EquipmentSortingResult() {
    }
    return EquipmentSortingResult;
}());
exports.EquipmentSortingResult = EquipmentSortingResult;


/***/ }),

/***/ "./src/serviceorder/sorting/equipment.sorting.ts":
/*!*******************************************************!*\
  !*** ./src/serviceorder/sorting/equipment.sorting.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var installedbase_1 = __webpack_require__(/*! ../../installedbase/installedbase */ "./src/installedbase/installedbase.ts");
var equipment_sorting_result_1 = __webpack_require__(/*! ./equipment.sorting.result */ "./src/serviceorder/sorting/equipment.sorting.result.ts");
var serviceorder_entity_1 = __webpack_require__(/*! ../serviceorder.entity */ "./src/serviceorder/serviceorder.entity.ts");
var installedbase_entity_1 = __webpack_require__(/*! ../../installedbase/installedbase.entity */ "./src/installedbase/installedbase.entity.ts");
var contractline_1 = __webpack_require__(/*! ../../contractline/contractline */ "./src/contractline/contractline.ts");
var contractline_entity_1 = __webpack_require__(/*! ../../contractline/contractline.entity */ "./src/contractline/contractline.entity.ts");
var account_1 = __webpack_require__(/*! ../../account/account */ "./src/account/account.ts");
var account_entity_1 = __webpack_require__(/*! ../../account/account.entity */ "./src/account/account.entity.ts");
var EquipmentSorting = (function () {
    function EquipmentSorting() {
    }
    EquipmentSorting.prototype.sortServiceordersByEquipmentProperties = function (dispatchId, sortCriteria) {
        var _this = this;
        try {
            var soData = new serviceorder_data_1.ServiceorderData();
            return soData
                .retrieveAllDynamicEntitiesByDispatchId(dispatchId)
                .then(function (dynServiceorders) {
                if (dynServiceorders) {
                    var sortEquipPromiseList = _this.createSortByEquipPromiseList(sortCriteria, dynServiceorders);
                    return Promise.all(sortEquipPromiseList).then(function (sortEquipResults) {
                        return _this.handleSortByEquipmentPropertyResult(sortCriteria, sortEquipResults);
                    }, function (locationErpPromiseError) {
                        var errMsg = "sortServiceordersByEquipmentLocation Promise.all(locationErpPromiseList) locationErpPromiseError:\n                " + JSON.stringify(locationErpPromiseError) + " ";
                        alert(errMsg);
                        return Promise.reject(errMsg);
                    });
                }
                else {
                    var sortedSoResult = [];
                    return Promise.resolve(sortedSoResult);
                }
            })
                .catch(function (equipLocSortError) {
                var errMsg = "EquipmentLocation sortServiceordersByEquipmentLocation  unexpected error:\n        " + JSON.stringify(equipLocSortError);
                return Promise.reject(errMsg);
            });
        }
        catch (exception) {
            var errMsg = "EquipmentLocation sortServiceordersByEquipmentLocation exception:\n         " + JSON.stringify(exception);
            alert(errMsg);
            return Promise.reject(errMsg);
        }
    };
    EquipmentSorting.prototype.createSortByEquipPromiseList = function (sortCriteria, dynServiceorders) {
        var _this = this;
        var sortEquipPromiseList = [];
        dynServiceorders.forEach(function (dynItem) {
            var soRecord = new serviceorder_entity_1.ServiceorderEntity(dynItem);
            var sortIbPromise;
            switch (sortCriteria) {
                case 3:
                    sortIbPromise = _this.createLocationErpPromises(soRecord);
                    break;
                case 4:
                    sortIbPromise = _this.createCustomerInventoryNumberPromises(soRecord);
                    break;
                case 5:
                    sortIbPromise = _this.createCustomerCostCenterPromises(soRecord);
                    break;
                case 6:
                    sortIbPromise = _this.createInstallbaseNamePromises(soRecord);
                    break;
                case 7:
                    sortIbPromise = _this.createContractPositionPromises(soRecord);
                    break;
                case 8:
                    sortIbPromise = _this.createFunctionalUnitPromises(soRecord);
                    break;
                case 9:
                    sortIbPromise = _this.createAccountNumberLocationPromises(soRecord);
                    break;
                default:
                    var errMsg = "No implementation for the sorting Nr. [" + sortCriteria + "]";
                    alert(errMsg);
                    break;
            }
            sortEquipPromiseList.push(sortIbPromise);
        });
        return sortEquipPromiseList;
    };
    EquipmentSorting.prototype.handleSortByEquipmentPropertyResult = function (sortCriteria, unsortedEquipResults) {
        var sortedEquipResults;
        switch (sortCriteria) {
            case 3:
                sortedEquipResults = this.sortLocation1ErpCompletionDateSoNumber(unsortedEquipResults);
                break;
            case 4:
                sortedEquipResults = this.sortCustomerInventoryNumberSoNumber(unsortedEquipResults);
                break;
            case 5:
                sortedEquipResults = this.sortCostcenterCustomerSoNumber(unsortedEquipResults);
                break;
            case 6:
                sortedEquipResults = this.sortInstalledBaseNameSoNumber(unsortedEquipResults);
                break;
            case 7:
                sortedEquipResults = this.sortContractPositionSoNumber(unsortedEquipResults);
                break;
            case 8:
                sortedEquipResults = this.sortFunctionalUnitNameSoNumber(unsortedEquipResults);
                break;
            case 9:
                sortedEquipResults = this.sortAccountNumberLocationNameSoNumber(unsortedEquipResults);
                break;
            default:
                break;
        }
        return Promise.resolve(sortedEquipResults);
    };
    EquipmentSorting.prototype.createCustomerInventoryNumberPromises = function (soRecord) {
        var equipSortResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    equipSortResult.installedbaseRecord = ibRecord;
                    if (ibRecord.customerinventorynumber) {
                        equipSortResult.customerInventoryNumber =
                            ibRecord.customerinventorynumber;
                    }
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.createCustomerCostCenterPromises = function (soRecord) {
        var equipSortResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    equipSortResult.installedbaseRecord = ibRecord;
                    if (ibRecord.costcentercustomer) {
                        equipSortResult.costcenterCustomer = ibRecord.costcentercustomer;
                    }
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.createInstallbaseNamePromises = function (soRecord) {
        var equipSortResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    equipSortResult.installedbaseRecord = ibRecord;
                    if (ibRecord.name) {
                        equipSortResult.installedBaseName = ibRecord.name;
                    }
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.createFunctionalUnitPromises = function (soRecord) {
        var equipSortResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    equipSortResult.installedbaseRecord = ibRecord;
                    if (ibRecord.functionalunitid &&
                        ibRecord.functionalunitid.primaryName) {
                        equipSortResult.functionalUnitName =
                            ibRecord.functionalunitid.primaryName;
                    }
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.createAccountNumberLocationPromises = function (soRecord) {
        var _this = this;
        var equipSortResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    equipSortResult.installedbaseRecord = ibRecord;
                    _this.setLocationAccountNumber(ibRecord, equipSortResult)
                        .then(function (locAccountResult) {
                        equipSortResult = locAccountResult;
                        return Promise.resolve(equipSortResult);
                    })
                        .catch(function () {
                        return Promise.resolve(equipSortResult);
                    });
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.setLocationAccountNumber = function (ibRecord, equipLocResult) {
        var accountId = ibRecord.shippedtoid ? ibRecord.shippedtoid.id : null;
        if (ibRecord.location1erp && ibRecord.location1erp.primaryName) {
            equipLocResult.locationName = ibRecord.location1erp.primaryName;
        }
        if (accountId) {
            var account = new account_1.Account();
            return account
                .retrieveById(accountId)
                .then(function (dynAccount) {
                if (dynAccount) {
                    var accRecord = new account_entity_1.AccountEntity(dynAccount);
                    if (accRecord.accountNumber) {
                        equipLocResult.accountNumber = accRecord.accountNumber;
                    }
                }
                return Promise.resolve(equipLocResult);
            })
                .catch(function () {
                return Promise.resolve(equipLocResult);
            });
        }
        else {
            return Promise.resolve(equipLocResult);
        }
    };
    EquipmentSorting.prototype.createContractPositionPromises = function (soRecord) {
        var _this = this;
        var equipSortingResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    return _this.setContractInformation(dynIbResult, equipSortingResult)
                        .then(function (clineEquipResult) {
                        equipSortingResult = clineEquipResult;
                        return Promise.resolve(equipSortingResult);
                    })
                        .catch(function () {
                        return Promise.resolve(equipSortingResult);
                    });
                }
                else {
                    return Promise.resolve(equipSortingResult);
                }
            })
                .catch(function () {
                return Promise.resolve(equipSortingResult);
            });
        }
        else {
            return Promise.resolve(equipSortingResult);
        }
    };
    EquipmentSorting.prototype.setContractInformation = function (dynIbResult, equipSortResult) {
        var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
        equipSortResult.installedbaseRecord = ibRecord;
        if (ibRecord.contractnumberid && ibRecord.contractnumberid.primaryName) {
            equipSortResult.contractNumber = ibRecord.contractnumberid.primaryName;
        }
        if (ibRecord.contractlineid) {
            var contractlineId = ibRecord.contractlineid
                ? ibRecord.contractlineid.id
                : null;
            var contractLine = new contractline_1.ContractLine();
            return contractLine
                .retrieveById(contractlineId)
                .then(function (dynClineResult) {
                if (dynIbResult) {
                    var clineRecord = new contractline_entity_1.ContractLineEntity(dynClineResult);
                    if (clineRecord.contractLineNumber) {
                        equipSortResult.contractLineNumber =
                            clineRecord.contractLineNumber;
                    }
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.sortLocation1ErpCompletionDateSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareLocationName = function (a, b) {
                return _this.compareItems(a.locationName, b.locationName);
            };
            var compareCompletedOn = function (a, b) {
                var completedOnA = a.completedOn ? a.completedOn.valueOf() : null;
                var completedOnB = b.completedOn ? b.completedOn.valueOf() : null;
                return _this.compareItems(completedOnA, completedOnB);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return (compareLocationName(a, b) ||
                compareCompletedOn(a, b) ||
                compareServiceorderNumber(a, b));
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.sortCustomerInventoryNumberSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareInventryNumber = function (a, b) {
                return _this.compareItems(a.customerInventoryNumber, b.customerInventoryNumber);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return compareInventryNumber(a, b) || compareServiceorderNumber(a, b);
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.sortCostcenterCustomerSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareCostcenter = function (a, b) {
                return _this.compareItems(a.costcenterCustomer, b.costcenterCustomer);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return compareCostcenter(a, b) || compareServiceorderNumber(a, b);
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.sortInstalledBaseNameSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareInstalledBaseName = function (a, b) {
                return _this.compareItems(a.installedBaseName, b.installedBaseName);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return (compareInstalledBaseName(a, b) || compareServiceorderNumber(a, b));
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.sortContractPositionSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareContractNumber = function (a, b) {
                return _this.compareItems(a.contractNumber, b.contractNumber);
            };
            var compareContractLineNumber = function (a, b) {
                return _this.compareItems(a.contractLineNumber, b.contractLineNumber);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return (compareContractNumber(a, b) ||
                compareContractLineNumber(a, b) ||
                compareServiceorderNumber(a, b));
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.sortFunctionalUnitNameSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareFunctionalUnit = function (a, b) {
                return _this.compareItems(a.functionalUnitName, b.functionalUnitName);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return compareFunctionalUnit(a, b) || compareServiceorderNumber(a, b);
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.sortAccountNumberLocationNameSoNumber = function (equipLocErpResults) {
        var _this = this;
        equipLocErpResults.sort(function (a, b) {
            var compareAccountNumber = function (a, b) {
                return _this.compareItems(a.accountNumber, b.accountNumber);
            };
            var compareLocationName = function (a, b) {
                return _this.compareItems(a.locationName, b.locationName);
            };
            var compareServiceorderNumber = function (a, b) {
                return _this.compareItems(a.serviceorderNumber, b.serviceorderNumber);
            };
            return (compareAccountNumber(a, b) ||
                compareLocationName(a, b) ||
                compareServiceorderNumber(a, b));
        });
        return equipLocErpResults;
    };
    EquipmentSorting.prototype.compareItems = function (a, b) {
        return a < b ? -1 : b < a ? 1 : 0;
    };
    EquipmentSorting.prototype.createLocationErpPromises = function (soRecord) {
        var equipSortResult = this.createEquipmentSortingResult(soRecord);
        if (soRecord.installedbaseid) {
            var installedbaseId = soRecord.installedbaseid
                ? soRecord.installedbaseid.id
                : null;
            var ib = new installedbase_1.InstalledBase();
            return ib
                .retrieveById(installedbaseId)
                .then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    equipSortResult.installedbaseRecord = ibRecord;
                    if (ibRecord.location1erp && ibRecord.location1erp.primaryName) {
                        equipSortResult.locationName = ibRecord.location1erp.primaryName;
                    }
                }
                return Promise.resolve(equipSortResult);
            })
                .catch(function () {
                return Promise.resolve(equipSortResult);
            });
        }
        else {
            return Promise.resolve(equipSortResult);
        }
    };
    EquipmentSorting.prototype.createEquipmentSortingResult = function (soRecord) {
        var equipLocResult = new equipment_sorting_result_1.EquipmentSortingResult();
        equipLocResult.completedOn = soRecord.completedon
            ? soRecord.completedon
            : null;
        equipLocResult.locationName = '-';
        equipLocResult.customerInventoryNumber = '-';
        equipLocResult.costcenterCustomer = '-';
        equipLocResult.installedBaseName = '-';
        equipLocResult.contractNumber = '-';
        equipLocResult.contractLineNumber = '-';
        equipLocResult.functionalUnitName = '-';
        equipLocResult.accountNumber = '-';
        equipLocResult.serviceorderRecord = soRecord;
        equipLocResult.serviceorderNumber = soRecord.serviceordernumber
            ? soRecord.serviceordernumber
            : null;
        equipLocResult.installedbase = soRecord.installedbaseid
            ? soRecord.installedbaseid
            : null;
        return equipLocResult;
    };
    return EquipmentSorting;
}());
exports.EquipmentSorting = EquipmentSorting;


/***/ }),

/***/ "./src/serviceorder/sorting/sorting.process.ts":
/*!*****************************************************!*\
  !*** ./src/serviceorder/sorting/sorting.process.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_data_1 = __webpack_require__(/*! ../../dispatch/dispatch.data */ "./src/dispatch/dispatch.data.ts");
var dispatch_entity_1 = __webpack_require__(/*! ../../dispatch/dispatch.entity */ "./src/dispatch/dispatch.entity.ts");
var serviceorder_entity_1 = __webpack_require__(/*! ../serviceorder.entity */ "./src/serviceorder/serviceorder.entity.ts");
var serviceorder_entity_names_1 = __webpack_require__(/*! ../serviceorder.entity-names */ "./src/serviceorder/serviceorder.entity-names.ts");
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var installedbase_entity_1 = __webpack_require__(/*! ../../installedbase/installedbase.entity */ "./src/installedbase/installedbase.entity.ts");
var mvke_1 = __webpack_require__(/*! ../../mvke/mvke */ "./src/mvke/mvke.ts");
var mvke_entity_1 = __webpack_require__(/*! ../../mvke/mvke.entity */ "./src/mvke/mvke.entity.ts");
var equipment_sorting_1 = __webpack_require__(/*! ./equipment.sorting */ "./src/serviceorder/sorting/equipment.sorting.ts");
var groupvalue_1 = __webpack_require__(/*! ../../groupvalue/groupvalue */ "./src/groupvalue/groupvalue.ts");
var dispatch_entity_names_1 = __webpack_require__(/*! ../../dispatch/dispatch.entity-names */ "./src/dispatch/dispatch.entity-names.ts");
var equipment_sorting_result_1 = __webpack_require__(/*! ./equipment.sorting.result */ "./src/serviceorder/sorting/equipment.sorting.result.ts");
var installedbase_1 = __webpack_require__(/*! ../../installedbase/installedbase */ "./src/installedbase/installedbase.ts");
var SortingProcess = (function () {
    function SortingProcess() {
        this.groupValueReferenceList = [];
    }
    SortingProcess.prototype.startServiceorderSorting = function (dispatchId) {
        var _this = this;
        return this.getDispatchById(dispatchId).then(function (dispatchRecord) {
            if (dispatchRecord) {
                var dispNames = new dispatch_entity_names_1.DispatchEntityNames();
                var dispatchReference_1 = new MobileCRM.Reference(dispNames.entityLogicalName, dispatchId, dispatchRecord.dispatchNumber);
                var waitingDialog_1 = MobileCRM.UI.Form.showPleaseWait("Starting ...");
                var groupValue = new groupvalue_1.Groupvalue();
                return groupValue
                    .deleteByDispatchId(dispatchId)
                    .then(function (deleted) {
                    if (deleted) {
                        var groupCriteria = _this.getGroupCriteriaByDispatchRecord(dispatchRecord);
                        var sortCriteria = _this.getSortCriteriaByDispatchRecord(dispatchRecord);
                        if (sortCriteria === 1) {
                            return _this.sortingByServiceOrderNumber(dispatchReference_1, groupCriteria, waitingDialog_1);
                        }
                        else if (sortCriteria === 2) {
                            return _this.sortingByPurchaseOrderNumber(dispatchReference_1, groupCriteria, waitingDialog_1);
                        }
                        else if (sortCriteria ===
                            3 ||
                            sortCriteria === 4 ||
                            sortCriteria === 5 ||
                            sortCriteria === 6 ||
                            sortCriteria === 7 ||
                            sortCriteria === 8 ||
                            sortCriteria === 9) {
                            return _this.sortByEquipmentProperties(dispatchReference_1, groupCriteria, sortCriteria, waitingDialog_1);
                        }
                        else {
                            return Promise.resolve(false);
                        }
                    }
                    else {
                        _this.closeWaitingDialog(waitingDialog_1);
                        alert("Please review the Groupvalue records deletion errors and restart the Serviceorder sorting process. ");
                        return Promise.resolve(false);
                    }
                }, function (deleteError) {
                    _this.closeWaitingDialog(waitingDialog_1);
                    alert("SortingProcess deleteError: " + deleteError);
                    return Promise.resolve(false);
                })
                    .catch(function (dispDelError) {
                    _this.closeWaitingDialog(waitingDialog_1);
                    alert("SortingProcess dispDelError: " + dispDelError);
                    return Promise.resolve(false);
                });
            }
        }, function (dispatchIdError) {
            alert("SortingProcess dispatchIdError: " + dispatchIdError);
            return Promise.resolve(false);
        });
    };
    SortingProcess.prototype.sortByEquipmentProperties = function (dispatchReference, groupCriteria, sortCriteria, waitingDialog) {
        var _this = this;
        var equipSorter = new equipment_sorting_1.EquipmentSorting();
        return equipSorter
            .sortServiceordersByEquipmentProperties(dispatchReference.id, sortCriteria)
            .then(function (sortedSoEquipPropList) {
            return _this.handleSortedSoEquipPropList(dispatchReference, groupCriteria, sortedSoEquipPropList, waitingDialog);
        }, function (sortEquipPropError) {
            _this.closeWaitingDialog(waitingDialog);
            alert("SortingProcess sortByEquipmentProperties  sortEquipPropError: \n" + JSON.stringify(sortEquipPropError));
            return Promise.resolve(false);
        })
            .catch(function (equipPropError) {
            _this.closeWaitingDialog(waitingDialog);
            alert("SortingProcess sortServiceordersByEquipmentProperties catch equipPropError: \n" + JSON.stringify(equipPropError));
            return Promise.resolve(false);
        });
    };
    SortingProcess.prototype.handleSortedSoEquipPropList = function (dispatchReference, groupCriteria, sortedSoEquipPropList, waitingDialog) {
        var _this = this;
        if (sortedSoEquipPropList && sortedSoEquipPropList.length > 0) {
            var setGroupValueOnSortedList = this.setGroupValueOnSortedListResults(dispatchReference, groupCriteria, sortedSoEquipPropList, waitingDialog);
            return setGroupValueOnSortedList.then(function (soListUpdated) {
                _this.closeWaitingDialog(waitingDialog);
                return Promise.resolve(soListUpdated);
            }, function (setGvResultError) {
                _this.closeWaitingDialog(waitingDialog);
                alert("SortingProcess setGroupValueOnSortedListResults  setGvResultError: \n        " + JSON.stringify(setGvResultError));
                return Promise.resolve(false);
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    SortingProcess.prototype.closeWaitingDialog = function (waitingDialog) {
        if (waitingDialog) {
            waitingDialog.close();
        }
    };
    SortingProcess.prototype.sortingByPurchaseOrderNumber = function (dispatchRef, groupCriteria, waitingDialog) {
        var _this = this;
        return this.getServiceordersSortedByPurchaseOrderNumber(dispatchRef.id).then(function (sortedSoPoList) {
            return _this.setGroupValueOnSortedListResults(dispatchRef, groupCriteria, sortedSoPoList, waitingDialog);
        }, function (sortedByPurchaseOrderNumberError) {
            _this.closeWaitingDialog(waitingDialog);
            alert("getServiceordersSortedByServiceOrderNumber sortedByPurchaseOrderNumberError:" + sortedByPurchaseOrderNumberError);
            return Promise.resolve(false);
        });
    };
    SortingProcess.prototype.sortingByServiceOrderNumber = function (dispatchRef, groupCriteria, waitingDialog) {
        var _this = this;
        return this.getServiceordersSortedByServiceOrderNumber(dispatchRef.id).then(function (sortedResultList) {
            return _this.setGroupValueOnSortedListResults(dispatchRef, groupCriteria, sortedResultList, waitingDialog);
        }, function (sortedResultListError) {
            _this.closeWaitingDialog(waitingDialog);
            alert("getServiceordersSortedByServiceOrderNumber sortedResultListError:" + sortedResultListError);
            return Promise.resolve(false);
        });
    };
    SortingProcess.prototype.setGroupValueOnSortedListResults = function (dispatchRef, groupCriteria, sortedSoList, waitingDialog) {
        var _this = this;
        if (sortedSoList && sortedSoList.length > 0) {
            try {
                var createGroupValueRef = this.createGroupValueReferences(sortedSoList, dispatchRef, groupCriteria);
                return createGroupValueRef
                    .then(function (sortedSoWithGroupValueList) {
                    return _this.updateServiceorderWithGroupValue(sortedSoWithGroupValueList);
                }, function (gvRefError) {
                    _this.closeWaitingDialog(waitingDialog);
                    alert("this.updateServiceorderWithGroupValue  gvRefError: " + gvRefError);
                    return Promise.resolve(false);
                })
                    .then(function (updateResult) {
                    return _this.showSortingFinishResult(updateResult, waitingDialog);
                });
            }
            catch (gvPromisException) {
                this.closeWaitingDialog(waitingDialog);
                alert("setGroupValueOnSortedListResults\n          groupCriteria: " + groupCriteria + "\n          gvEPromisexception: " + JSON.stringify(gvPromisException) + " ");
                return Promise.resolve(false);
            }
        }
        else {
            this.closeWaitingDialog(waitingDialog);
            alert("Please attach Serviceorders to the Dispatch [" + dispatchRef.primaryName + "]");
            return Promise.resolve(false);
        }
    };
    SortingProcess.prototype.updateServiceorderWithGroupValue = function (sortedSoWithGroupValueList) {
        var _this = this;
        var soUpdatePromiseList = [];
        var sortNumber = 0;
        sortedSoWithGroupValueList.forEach(function (gvSortResult) {
            sortNumber += 1;
            var soUpd = _this.updateServiceorder(gvSortResult.serviceorderRecord.serviceorderid, gvSortResult.groupValueReference, sortNumber, gvSortResult.groupValueReference.primaryName);
            soUpdatePromiseList.push(soUpd);
        });
        return Promise.all(soUpdatePromiseList).then(function (soUpdResult) {
            return _this.handlePromiseAllSoUpdateResult(soUpdResult);
        });
    };
    SortingProcess.prototype.showSortingFinishResult = function (success, waitingDialog) {
        {
            this.closeWaitingDialog(waitingDialog);
            if (success) {
                return Promise.resolve(true);
            }
            else {
                alert("Pease review and resolve the reported errors and restart the prepare documentation process.");
                return Promise.resolve(false);
            }
        }
    };
    SortingProcess.prototype.getDispatchById = function (dispatchId) {
        var dispatch = new dispatch_data_1.DispatchData();
        return dispatch.retrieveById(dispatchId).then(function (dynDispatch) {
            var dispatchRecord = new dispatch_entity_1.DispatchEntity(dynDispatch);
            return Promise.resolve(dispatchRecord);
        });
    };
    SortingProcess.prototype.getSortCriteriaByDispatchRecord = function (dispatchRecord) {
        var sortCriteria = 1;
        if (dispatchRecord && dispatchRecord.sortCriteria !== -1) {
            sortCriteria = dispatchRecord.sortCriteria;
        }
        return sortCriteria;
    };
    SortingProcess.prototype.getGroupCriteriaByDispatchRecord = function (dispatchRecord) {
        var groupCriteria = 0;
        if (dispatchRecord && dispatchRecord.groupCriteria !== -1) {
            groupCriteria = dispatchRecord.groupCriteria;
        }
        return groupCriteria;
    };
    SortingProcess.prototype.getServiceordersSortedByServiceOrderNumber = function (dispatchId) {
        var _this = this;
        var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
        var filters = [];
        var dispatchIdFilter = new MobileCRM.FetchXml.Filter();
        dispatchIdFilter.where(soEntityNames.dispatchid, 'eq', dispatchId);
        filters.push(dispatchIdFilter);
        var sortingOrder = [];
        var orderByServiceorderNumber = new MobileCRM.FetchXml.Order(soEntityNames.serviceordernumber, false);
        sortingOrder.push(orderByServiceorderNumber);
        var soData = new serviceorder_data_1.ServiceorderData();
        return soData.retrieveSortedRecords(filters, sortingOrder).then(function (dynServiceorders) {
            return _this.handleOrderedServiceorderResults(dynServiceorders);
        }, function (soRetrieveError) {
            alert("getServiceordersSortedByServiceOrderNumber\n        soData.retrieveSortedRecords soRetrieveError:\n        " + soRetrieveError);
            var sortedResults = [];
            return Promise.resolve(sortedResults);
        });
    };
    SortingProcess.prototype.getServiceordersSortedByPurchaseOrderNumber = function (dispatchId) {
        var _this = this;
        var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
        var filters = [];
        var dispatchIdFilter = new MobileCRM.FetchXml.Filter();
        dispatchIdFilter.where(soEntityNames.dispatchid, 'eq', dispatchId);
        filters.push(dispatchIdFilter);
        var sortingOrder = [];
        var orderByPurchaseOrderNumber = new MobileCRM.FetchXml.Order(soEntityNames.purchaseorderno, false);
        var orderByServiceorderNumber = new MobileCRM.FetchXml.Order(soEntityNames.serviceordernumber, false);
        sortingOrder.push(orderByPurchaseOrderNumber);
        sortingOrder.push(orderByServiceorderNumber);
        var soData = new serviceorder_data_1.ServiceorderData();
        return soData
            .retrieveSortedRecords(filters, sortingOrder)
            .then(function (dynServiceorders) {
            return _this.handleOrderedServiceorderResults(dynServiceorders);
        });
    };
    SortingProcess.prototype.handleOrderedServiceorderResults = function (dynServiceorders) {
        var _this = this;
        var ibPromiseList = [];
        if (dynServiceorders && dynServiceorders.length > 0) {
            dynServiceorders.forEach(function (dynSo) {
                if (dynSo) {
                    var soRecord = new serviceorder_entity_1.ServiceorderEntity(dynSo);
                    var sortedResult_1 = new equipment_sorting_result_1.EquipmentSortingResult();
                    sortedResult_1.serviceorderRecord = soRecord;
                    sortedResult_1.installedbase = soRecord.installedbaseid;
                    var installedbaseId = sortedResult_1.installedbase
                        ? sortedResult_1.installedbase.id
                        : null;
                    var ibPromise = _this.retreiveInstalledbaseRecord(installedbaseId).then(function (ibRecord) {
                        sortedResult_1.installedbaseRecord = ibRecord;
                        return sortedResult_1;
                    });
                    ibPromiseList.push(ibPromise);
                }
            });
            return Promise.all(ibPromiseList).then(function (ibResults) {
                var sortedResults = [];
                ibResults.forEach(function (result) {
                    sortedResults.push(result);
                });
                return sortedResults;
            });
        }
        else {
            var sortedResults = [];
            return Promise.resolve(sortedResults);
        }
    };
    SortingProcess.prototype.retreiveInstalledbaseRecord = function (installedbaseId) {
        var ib = new installedbase_1.InstalledBase();
        if (installedbaseId) {
            return ib.retrieveById(installedbaseId).then(function (dynIbResult) {
                if (dynIbResult) {
                    var ibRecord = new installedbase_entity_1.InstalledBaseEntity(dynIbResult);
                    return Promise.resolve(ibRecord);
                }
                else {
                    return Promise.resolve(null);
                }
            });
        }
        else {
            return Promise.resolve(null);
        }
    };
    SortingProcess.prototype.createGroupValueReferences = function (sortedSoResults, dispatchRef, groupCriteria) {
        var _this = this;
        var groupValueCreatePromiseList = [];
        sortedSoResults.forEach(function (sortResult) {
            var gvCreatePromise = _this.createGroupValueCreatePromises(sortResult, dispatchRef, groupCriteria);
            groupValueCreatePromiseList.push(gvCreatePromise);
        });
        if (groupValueCreatePromiseList.length > 0) {
            return Promise.all(groupValueCreatePromiseList)
                .then(function (gvCreateresult) {
                return Promise.resolve(gvCreateresult);
            }, function (gvCreatePromovesError) {
                alert("createGroupValueReferences Promise.all(soUpdatePromiseList) gvCreatePromovesError:\n            " + JSON.stringify(gvCreatePromovesError));
                return Promise.resolve(sortedSoResults);
            })
                .catch(function (allGroupValueCreateError) {
                alert("createGroupValueReferences Promise.all(soUpdatePromiseList) catch allGroupValueCreateError:\n          " + JSON.stringify(allGroupValueCreateError));
                return Promise.resolve(sortedSoResults);
            });
        }
        else {
            return Promise.resolve(sortedSoResults);
        }
    };
    SortingProcess.prototype.handlePromiseAllSoUpdateResult = function (updateSoResults) {
        var success = true;
        updateSoResults.forEach(function (item) {
            if (!item) {
                success = item;
            }
        });
        return Promise.resolve(success);
    };
    SortingProcess.prototype.createGroupValueCreatePromises = function (sortResult, dispatchRef, groupCriteria) {
        var _this = this;
        return this.getGroupValueByInstalledbaseRecord(sortResult.installedbaseRecord, groupCriteria).then(function (groupValue) {
            var gvInstance = new groupvalue_1.Groupvalue();
            return gvInstance.CreateRecord(dispatchRef, groupValue).then(function (groupValueRefResult) {
                var existingGroupValueRef = _this.getExistingGroupValueReference(groupValue);
                if (existingGroupValueRef) {
                    gvInstance.deleteRecord(groupValueRefResult.id);
                    sortResult.groupValueReference = existingGroupValueRef;
                }
                else {
                    _this.groupValueReferenceList.push(groupValueRefResult);
                    sortResult.groupValueReference = groupValueRefResult;
                }
                return sortResult;
            }, function (gvCreateRecordError) {
                alert("createGroupValueReferences gvCreateRecordError: \n    " + gvCreateRecordError);
                return sortResult;
            });
        }, function (gvByIbError) {
            alert("createGroupValueReferences gvByIbError: \n" + gvByIbError);
            return sortResult;
        });
    };
    SortingProcess.prototype.getExistingGroupValueReference = function (groupValue) {
        var gvRef = null;
        this.groupValueReferenceList.forEach(function (item) {
            if (item.primaryName === groupValue) {
                gvRef = item;
            }
        });
        return gvRef;
    };
    SortingProcess.prototype.updateServiceorder = function (serviceorderId, groupValueRef, sortNumber, groupValue) {
        var soEntityNames = new serviceorder_entity_names_1.ServiceorderEntityNames();
        var soEntity = new MobileCRM.DynamicEntity(soEntityNames.entityLogicalName, serviceorderId);
        try {
            var props = soEntity.properties;
            props[soEntityNames.sortOrder] = sortNumber;
            props[soEntityNames.groupvalue] = groupValue;
            props[soEntityNames.groupvalueId] = groupValueRef;
            var soData = new serviceorder_data_1.ServiceorderData();
            return soData
                .UpdateServiceorderProperties(soEntity)
                .then(function (updated) {
                return Promise.resolve(updated);
            })
                .catch(function (soUpdateError) {
                var errMsg = "SortingProcess createServiceorderUpdatePromises \n    UpdateServiceorderProperties error:\n    " + JSON.stringify(soUpdateError);
                alert(errMsg);
                return Promise.reject(errMsg);
            });
        }
        catch (exception) {
            alert("SortingProcess updateServiceorder exception; " + exception + " ");
        }
    };
    SortingProcess.prototype.getGroupValueByInstalledbaseRecord = function (ibRecord, groupCriteria) {
        var groupValueDefault = '-';
        return this.getGroupValueFromIbProps(groupCriteria, ibRecord).then(function (groupValueResult) {
            return Promise.resolve(groupValueResult);
        }, function (groupValueResultError) {
            alert("groupValueResultError: " + groupValueResultError);
            return Promise.resolve(groupValueDefault);
        });
    };
    SortingProcess.prototype.getGroupValueFromIbProps = function (groupCriteria, ibRecord) {
        var groupValueDefault = '-';
        if (ibRecord) {
            switch (groupCriteria) {
                case 1:
                    if (ibRecord.materialnumberid) {
                        return this.getMaterialNumberFromMvke(ibRecord.materialnumberid.id).then(function (groupValueMaterial) {
                            return Promise.resolve(groupValueMaterial);
                        }, function () {
                            return Promise.resolve(groupValueDefault);
                        });
                    }
                    break;
                case 2:
                    if (ibRecord.location1erp) {
                        groupValueDefault = ibRecord.location1erp.primaryName;
                    }
                    break;
                case 3:
                    if (ibRecord.functionalunitid) {
                        groupValueDefault = ibRecord.functionalunitid.primaryName;
                    }
                    break;
                case 4:
                    if (ibRecord.costcentercustomer) {
                        groupValueDefault = ibRecord.costcentercustomer;
                    }
                    break;
                default:
                    groupValueDefault = '-';
                    break;
            }
        }
        return Promise.resolve(groupValueDefault);
    };
    SortingProcess.prototype.getMaterialNumberFromMvke = function (mvkeId) {
        var groupValueDefault = '-';
        var mvke = new mvke_1.Mvke();
        return mvke.retrieveById(mvkeId).then(function (dynMvkeResult) {
            if (dynMvkeResult) {
                var mvkeRecord = new mvke_entity_1.MvkeEntity(dynMvkeResult);
                groupValueDefault = mvkeRecord.materialnumber;
            }
            return Promise.resolve(groupValueDefault);
        }, function (mvkeError) {
            alert("getMaterialNumberFromMvke mvkeError: " + mvkeError);
            return Promise.resolve(groupValueDefault);
        });
    };
    return SortingProcess;
}());
exports.SortingProcess = SortingProcess;


/***/ }),

/***/ "./src/serviceorderitem/recalculate.price.ts":
/*!***************************************************!*\
  !*** ./src/serviceorderitem/recalculate.price.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorder_entity_1 = __webpack_require__(/*! ../serviceorder/serviceorder.entity */ "./src/serviceorder/serviceorder.entity.ts");
var price_calculation_result_1 = __webpack_require__(/*! ../pricecalculation/price-calculation.result */ "./src/pricecalculation/price-calculation.result.ts");
var systemuser_1 = __webpack_require__(/*! ../systemuser/systemuser */ "./src/systemuser/systemuser.ts");
var systemuser_entity_1 = __webpack_require__(/*! ../systemuser/systemuser.entity */ "./src/systemuser/systemuser.entity.ts");
var localmaterial_entity_1 = __webpack_require__(/*! ../localmaterial/localmaterial.entity */ "./src/localmaterial/localmaterial.entity.ts");
var localmaterial_data_1 = __webpack_require__(/*! ../localmaterial/localmaterial.data */ "./src/localmaterial/localmaterial.data.ts");
var price_calculation_context_1 = __webpack_require__(/*! ../pricecalculation/price-calculation.context */ "./src/pricecalculation/price-calculation.context.ts");
var price_calculation_manager_1 = __webpack_require__(/*! ../pricecalculation/price-calculation.manager */ "./src/pricecalculation/price-calculation.manager.ts");
var serviceorderitem_entity_names_1 = __webpack_require__(/*! ./serviceorderitem.entity-names */ "./src/serviceorderitem/serviceorderitem.entity-names.ts");
var serviceorderitem_1 = __webpack_require__(/*! ./serviceorderitem. */ "./src/serviceorderitem/serviceorderitem..ts");
var serviceorder_data_1 = __webpack_require__(/*! ../serviceorder/serviceorder.data */ "./src/serviceorder/serviceorder.data.ts");
var serviceorderitem_entity_1 = __webpack_require__(/*! ./serviceorderitem.entity */ "./src/serviceorderitem/serviceorderitem.entity.ts");
var serviceorderitem_price_context_1 = __webpack_require__(/*! ./serviceorderitem.price.context */ "./src/serviceorderitem/serviceorderitem.price.context.ts");
var RecalculatePrice = (function () {
    function RecalculatePrice() {
    }
    RecalculatePrice.prototype.byDispatchId = function (dispatchId) {
        var _this = this;
        var waitingDialog = MobileCRM.UI.Form.showPleaseWait("Starting ...");
        var soData = new serviceorder_data_1.ServiceorderData();
        return soData
            .retrieveAllDynamicEntitiesByDispatchId(dispatchId)
            .then(function (dynServiceorders) {
            if (dynServiceorders) {
                var soEntityList_1 = [];
                dynServiceorders.forEach(function (dynSo) {
                    if (dynSo) {
                        soEntityList_1.push(new serviceorder_entity_1.ServiceorderEntity(dynSo));
                    }
                });
                return soEntityList_1;
            }
            else {
                var soEntityList = [];
                return Promise.resolve(soEntityList);
            }
        })
            .then(function (serviceorderEntityList) {
            if (serviceorderEntityList && serviceorderEntityList.length > 0) {
                return _this.setEntityDataOnSoiPriceContext(serviceorderEntityList);
            }
            else {
                var soItemPromiseList = [];
                return Promise.resolve(soItemPromiseList);
            }
        })
            .then(function (soiPriceContextList) {
            return _this.calculateAndUpdatePSoItemPrices(soiPriceContextList).then(function (success) {
                _this.closeWaitingDialog(waitingDialog);
                return success;
            });
        })
            .catch(function (recalcException) {
            _this.closeWaitingDialog(waitingDialog);
            alert("\n        RecalculatePrice byDispatchId\n        recalcException: " + JSON.stringify(recalcException));
            return Promise.resolve(false);
        });
    };
    RecalculatePrice.prototype.calculateMissingPrice = function (serviceOrderEntity, serviceorderItemOwnerId, localMaterialId) {
        var _this = this;
        var systemUserData = new systemuser_1.SystemUser();
        return systemUserData
            .retrieveById(serviceorderItemOwnerId)
            .then(function (dynSystemUser) {
            return new systemuser_entity_1.SystemUserEntity(dynSystemUser);
        })
            .then(function (systemUserEntity) {
            if (systemUserEntity) {
                return _this.retrieveLocalMaterialAndCalculatePrice(localMaterialId, serviceOrderEntity, systemUserEntity);
            }
            else {
                return Promise.resolve(new price_calculation_result_1.PriceCalculationResult());
            }
        });
    };
    RecalculatePrice.prototype.updateServiceorderitemPrice = function (soiEntity, finalPriceCalcResult) {
        var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
        if (finalPriceCalcResult &&
            finalPriceCalcResult.price > 0 &&
            soiEntity.quantity > 0) {
            var price = finalPriceCalcResult.price;
            var totalPrice = finalPriceCalcResult.price;
            if (!finalPriceCalcResult.isCharged) {
                totalPrice = finalPriceCalcResult.price * soiEntity.quantity;
            }
            var serviceorderItemId = soiEntity.serviceorderItemId
                ? soiEntity.serviceorderItemId
                : null;
            if (serviceorderItemId) {
                var soItemEntity = new MobileCRM.DynamicEntity(soItemEntityNames.entityLogicalName, serviceorderItemId);
                var soItemProps = soItemEntity.properties;
                soItemProps[soItemEntityNames.price] = price;
                soItemProps[soItemEntityNames.total] = totalPrice;
                var soItem = new serviceorderitem_1.ServiceOrderItem();
                return soItem.UpdateRecord(soItemEntity);
            }
            else {
                return Promise.resolve(true);
            }
        }
        else {
            return Promise.resolve(true);
        }
    };
    RecalculatePrice.prototype.closeWaitingDialog = function (waitingDialog) {
        if (waitingDialog) {
            waitingDialog.close();
        }
    };
    RecalculatePrice.prototype.retrieveLocalMaterialAndCalculatePrice = function (localMaterialId, serviceOrderEntity, systemUserEntity) {
        var localMaterialData = new localmaterial_data_1.LocalMaterialData();
        return localMaterialData
            .retrieveById(localMaterialId)
            .then(function (localMaterial) {
            return new localmaterial_entity_1.LocalmaterialEntity(localMaterial);
        })
            .then(function (localMaterialEntity) {
            if (localMaterialEntity) {
                var context = new price_calculation_context_1.PriceCalculationContext(localMaterialEntity, systemUserEntity, serviceOrderEntity);
                var priceCalcManager = new price_calculation_manager_1.PriceCalculationManager();
                return Promise.resolve(priceCalcManager.calculatePrice(context));
            }
            else {
                return Promise.resolve(new price_calculation_result_1.PriceCalculationResult());
            }
        });
    };
    RecalculatePrice.prototype.setEntityDataOnSoiPriceContext = function (serviceorderEntityList) {
        var _this = this;
        if (serviceorderEntityList && serviceorderEntityList.length > 0) {
            var soItemPriceContextPromiseList_1 = [];
            var soItemPromise_1 = null;
            serviceorderEntityList.forEach(function (soEntity) {
                var soItemPriceContext = new serviceorderitem_price_context_1.ServiceorderItemPriceContext();
                soItemPriceContext.serviceorderEntity = soEntity;
                soItemPriceContext.serviceorderitemList = [];
                var serviceorderId = soEntity && soEntity.serviceorderid ? soEntity.serviceorderid : null;
                soItemPromise_1 = _this.createRecordsWithoutPricePromise(serviceorderId, soItemPriceContext);
                soItemPriceContextPromiseList_1.push(soItemPromise_1);
            });
            return Promise.all(soItemPriceContextPromiseList_1);
        }
        else {
            var emptyPromiseList = [];
            return Promise.all(emptyPromiseList);
        }
    };
    RecalculatePrice.prototype.createRecordsWithoutPricePromise = function (serviceorderId, soItemPriceContext) {
        var soItem = new serviceorderitem_1.ServiceOrderItem();
        return soItem
            .retrieveRecordsWithoutPrice(serviceorderId)
            .then(function (dynSoItemsWithoutPrice) {
            if (dynSoItemsWithoutPrice && dynSoItemsWithoutPrice.length > 0) {
                dynSoItemsWithoutPrice.forEach(function (dynSoItem) {
                    if (dynSoItem) {
                        var soItemEntity = new serviceorderitem_entity_1.ServiceOrderItemEntity(dynSoItem);
                        soItemPriceContext.serviceorderitemList.push(soItemEntity);
                    }
                });
            }
            else {
                soItemPriceContext.serviceorderitemList.push(null);
            }
            return soItemPriceContext;
        });
    };
    RecalculatePrice.prototype.calculateAndUpdatePSoItemPrices = function (soiPriceContextList) {
        var _this = this;
        if (soiPriceContextList && soiPriceContextList.length > 0) {
            var soiUpdatePromiseList_1 = [];
            soiPriceContextList.forEach(function (soiPriceContext) {
                if (soiPriceContext &&
                    soiPriceContext.serviceorderitemList &&
                    soiPriceContext.serviceorderitemList.length > 0) {
                    soiPriceContext.serviceorderitemList.forEach(function (soiEntity) {
                        if (soiEntity) {
                            var soItemUpdatePromise = _this.createSoItemPriceUpdatePromise(soiPriceContext.serviceorderEntity, soiEntity);
                            soiUpdatePromiseList_1.push(soItemUpdatePromise);
                        }
                    });
                }
            });
            return Promise.all(soiUpdatePromiseList_1).then(function (soiUpdateResult) {
                return _this.handlesoiUpdateResult(soiUpdateResult);
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    RecalculatePrice.prototype.handlesoiUpdateResult = function (soiUpdateResult) {
        var success = true;
        soiUpdateResult.forEach(function (updated) {
            if (!updated) {
                success = false;
            }
        });
        return Promise.resolve(success);
    };
    RecalculatePrice.prototype.createSoItemPriceUpdatePromise = function (serviceorderEntity, soiEntity) {
        var _this = this;
        var ownerId = soiEntity.owner ? soiEntity.owner.id : null;
        var localMaterialId = soiEntity.localMaterial
            ? soiEntity.localMaterial.id
            : null;
        if (soiEntity && ownerId && localMaterialId && serviceorderEntity) {
            var priceCalcPromise = this.calculateMissingPrice(serviceorderEntity, ownerId, localMaterialId);
            return priceCalcPromise.then(function (finalPriceCalcResult) {
                if (finalPriceCalcResult &&
                    finalPriceCalcResult.price > 0 &&
                    soiEntity.quantity > 0) {
                    return _this.updateServiceorderitemPrice(soiEntity, finalPriceCalcResult);
                }
                else {
                    return Promise.resolve(true);
                }
            });
        }
        else {
            return Promise.resolve(true);
        }
    };
    return RecalculatePrice;
}());
exports.RecalculatePrice = RecalculatePrice;


/***/ }),

/***/ "./src/serviceorderitem/serviceorderitem..ts":
/*!***************************************************!*\
  !*** ./src/serviceorderitem/serviceorderitem..ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorderitem_entity_names_1 = __webpack_require__(/*! ./serviceorderitem.entity-names */ "./src/serviceorderitem/serviceorderitem.entity-names.ts");
var localmaterial_entity_names_1 = __webpack_require__(/*! ../localmaterial/localmaterial.entity-names */ "./src/localmaterial/localmaterial.entity-names.ts");
var error_entity_names_1 = __webpack_require__(/*! ../error/error.entity-names */ "./src/error/error.entity-names.ts");
var serviceorderitem_entity_1 = __webpack_require__(/*! ./serviceorderitem.entity */ "./src/serviceorderitem/serviceorderitem.entity.ts");
var ServiceOrderItem = (function () {
    function ServiceOrderItem() {
    }
    ServiceOrderItem.prototype.retrieveById = function (serviceOrderItemId) {
        return new Promise(function (resolve, reject) {
            var _property = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var fetchSU = new MobileCRM.FetchXml.Entity(_property.entityLogicalName);
            fetchSU.addAttributes();
            fetchSU.filter = new MobileCRM.FetchXml.Filter();
            fetchSU.filter.where(_property.serviceorderitemid, 'eq', serviceOrderItemId);
            var userFetch = new MobileCRM.FetchXml.Fetch(fetchSU);
            userFetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0 && results[0]) {
                    resolve(results[0]);
                }
                else {
                    reject('ServiceOrderItem.retrieveById: record not found!');
                }
            }, function (error) {
                reject("ServiceOrderItem.retrieveById error:\n " + error);
            }, null);
        });
    };
    ServiceOrderItem.prototype.retrieveByServiceorderId = function (serviceorderId) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soItemEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                return reject(error);
            }, null);
        });
    };
    ServiceOrderItem.prototype.retrieveRecordsWithoutPrice = function (serviceorderId) {
        return this.retrieveByServiceorderId(serviceorderId).then(function (dynSoItems) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var recordsWithoutPrice = [];
            dynSoItems.forEach(function (dynItem) {
                if (dynItem.properties &&
                    (dynItem.properties[soItemEntityNames.price] <= 0 ||
                        dynItem.properties[soItemEntityNames.price] === null ||
                        dynItem.properties[soItemEntityNames.price] === undefined)) {
                    recordsWithoutPrice.push(dynItem);
                }
            });
            return Promise.resolve(recordsWithoutPrice);
        });
    };
    ServiceOrderItem.prototype.retrieveByActivityTypeServiceorderId = function (serviceorderId, localMaterialType) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soItemEntityNames.entityLogicalName);
            entity.addAttributes();
            var soIdFilter = new MobileCRM.FetchXml.Filter();
            soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
            var typeFilter = new MobileCRM.FetchXml.Filter();
            typeFilter.where(soItemEntityNames.localmaterialtype, 'eq', localMaterialType);
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.filters.push(soIdFilter);
            entity.filter.filters.push(typeFilter);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                var errMsg = "retrieveByActivityTypeServiceorderId error: \n" + error;
                alert(errMsg);
                return reject(errMsg);
            }, null);
        });
    };
    ServiceOrderItem.prototype.retrieveRecordsWithFilter = function (recordsFilters) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soItemEntityNames.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.filters = recordsFilters;
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                reject("ServiceOrderItem.retrieveRecordsWithFilter error:\n " + error);
            }, null);
        });
    };
    ServiceOrderItem.prototype.retrieveRelatedLocalMaterialWithTraceablePartsFlagYes = function (serviceorderId) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var locMatEntityNames = new localmaterial_entity_names_1.LocalmaterialEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soItemEntityNames.entityLogicalName);
            entity.addAttributes();
            var soIdFilter = new MobileCRM.FetchXml.Filter();
            soIdFilter.type = 'and';
            soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.filters.push(soIdFilter);
            var linkEntity = entity.addLink(locMatEntityNames.entityLogicalName, locMatEntityNames.localmaterialid, soItemEntityNames.localmaterialId, 'inner');
            linkEntity.alias = 'localMatEntity';
            linkEntity
                .addFilter()
                .where(locMatEntityNames.traceablepart, 'eq', 1);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                var errMsg = "ServiceOrderItem retrieveRelatedLocalMaterialWithTraceableParts error: \n" + error;
                alert(errMsg);
                return reject(errMsg);
            }, null);
        });
    };
    ServiceOrderItem.prototype.deleteRecord = function (serviceorderItemId) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            MobileCRM.DynamicEntity.deleteById(soItemEntityNames.entityLogicalName, serviceorderItemId, function () {
                resolve(true);
            }, function (error) {
                MobileCRM.bridge.alert("Delete Serviceorder item Id [" + serviceorderItemId + "] error:\n" + error);
                reject(false);
            });
        });
    };
    ServiceOrderItem.prototype.updatePrice = function (serviceOrderItemId, price) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _property = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            _this.retrieveById(serviceOrderItemId).then(function (_item) {
                _item.properties[_property.price] = price;
                _item.save(reject).then(function () {
                    resolve();
                });
            });
        });
    };
    ServiceOrderItem.prototype.UpdateRecord = function (serviceorderItemEntity) {
        return new Promise(function (resolve, reject) {
            serviceorderItemEntity.save(function (saveError) {
                if (saveError) {
                    alert("ServiceOrderItem UpdateRecord unexpected error:\n           " + saveError);
                    reject(saveError);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    ServiceOrderItem.prototype.retrieveItemsWithMissingUdiForMaterial = function (serviceorderId) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var locMatEntityNames = new localmaterial_entity_names_1.LocalmaterialEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soItemEntityNames.entityLogicalName);
            entity.addAttributes();
            var soIdFilter = new MobileCRM.FetchXml.Filter();
            soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.filters.push(soIdFilter);
            var linkEntity = entity.addLink(locMatEntityNames.entityLogicalName, locMatEntityNames.localmaterialid, soItemEntityNames.localmaterialId, 'inner');
            linkEntity.alias = 'localMatEntity';
            linkEntity
                .addFilter()
                .where(locMatEntityNames.udirelevant, 'eq', 1);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results);
            }, function (error) {
                var errMsg = "ServiceOrderItem getNumberOfMissingUdi error: \n" + error;
                alert(errMsg);
                return reject(errMsg);
            }, null);
        });
    };
    ServiceOrderItem.prototype.existsAnySoItemWithoutQuantity = function (serviceorderId) {
        var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
        var soIdFilter = new MobileCRM.FetchXml.Filter();
        soIdFilter.type = 'and';
        soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
        var filters = [];
        filters.push(soIdFilter);
        return this.retrieveRecordsWithFilter(filters).then(function (dynSoItems) {
            var hasRecordWithoutQuantity = false;
            for (var k = 0; k < dynSoItems.length && !hasRecordWithoutQuantity; k++) {
                var soItemRec = new serviceorderitem_entity_1.ServiceOrderItemEntity(dynSoItems[k]);
                if (soItemRec.quantity < 0 ||
                    soItemRec.quantity === null ||
                    soItemRec.quantity === undefined) {
                    hasRecordWithoutQuantity = true;
                }
            }
            return Promise.resolve(hasRecordWithoutQuantity);
        });
    };
    ServiceOrderItem.prototype.existsAnySoItemRecordWithoutPrice = function (serviceorderId) {
        var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
        var soIdFilter = new MobileCRM.FetchXml.Filter();
        soIdFilter.type = 'and';
        soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
        var filters = [];
        filters.push(soIdFilter);
        return this.retrieveRecordsWithFilter(filters).then(function (dynSoItems) {
            var hasRecordWithoutPrice = false;
            for (var k = 0; k < dynSoItems.length && !hasRecordWithoutPrice; k++) {
                var soItemRec = new serviceorderitem_entity_1.ServiceOrderItemEntity(dynSoItems[k]);
                if (soItemRec.price < 0 ||
                    soItemRec.price === null ||
                    soItemRec.price === undefined) {
                    hasRecordWithoutPrice = true;
                }
            }
            return Promise.resolve(hasRecordWithoutPrice);
        });
    };
    ServiceOrderItem.prototype.getNumberOfMissingErrorDescription = function (serviceorderId) {
        return new Promise(function (resolve, reject) {
            var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            var soIdFilter = new MobileCRM.FetchXml.Filter();
            soIdFilter.type = 'and';
            soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
            var errorCauseFilter = new MobileCRM.FetchXml.Filter();
            errorCauseFilter.type = 'and';
            errorCauseFilter.where(soItemEntityNames.description, 'eq', null);
            var filters = [];
            filters.push(soIdFilter);
            filters.push(errorCauseFilter);
            var errEntityNames = new error_entity_names_1.ErrorEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(soItemEntityNames.entityLogicalName);
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.filters = filters;
            var linkEntity = entity.addLink(errEntityNames.entityLogicalName, errEntityNames.errorId, soItemEntityNames.error, 'inner');
            linkEntity.alias = 'errEntity';
            linkEntity
                .addFilter()
                .where(errEntityNames.informationRequiered, 'eq', 1);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', function (results) {
                resolve(results.length);
            }, function (error) {
                var errMsg = "ServiceOrderItem getNumberOfErrorDescription error: \n" + error;
                alert(errMsg);
                return reject(errMsg);
            }, null);
        });
    };
    ServiceOrderItem.prototype.getNumberOfErrorTree = function (serviceorderId) {
        var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
        var soIdFilter = new MobileCRM.FetchXml.Filter();
        soIdFilter.type = 'and';
        soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
        var errorCauseFilter = new MobileCRM.FetchXml.Filter();
        errorCauseFilter.type = 'and';
        errorCauseFilter.where(soItemEntityNames.error, 'ne', null);
        var filters = [];
        filters.push(soIdFilter);
        filters.push(errorCauseFilter);
        return this.retrieveRecordsWithFilter(filters).then(function (dynSoItems) {
            return Promise.resolve(dynSoItems.length);
        });
    };
    ServiceOrderItem.prototype.getNumberOfErrorCausingParts = function (serviceorderId) {
        var soItemEntityNames = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
        var soIdFilter = new MobileCRM.FetchXml.Filter();
        soIdFilter.type = 'and';
        soIdFilter.where(soItemEntityNames.serviceorderId, 'eq', serviceorderId);
        var errorCauseFilter = new MobileCRM.FetchXml.Filter();
        errorCauseFilter.type = 'and';
        errorCauseFilter.where(soItemEntityNames.errorcause, 'eq', 1);
        var filters = [];
        filters.push(soIdFilter);
        filters.push(errorCauseFilter);
        return this.retrieveRecordsWithFilter(filters).then(function (dynSoItems) {
            return Promise.resolve(dynSoItems.length);
        });
    };
    ServiceOrderItem.prototype.createBookingMaterial = function (bookMaterialData) {
        return new Promise(function (resolve, reject) {
            var serviceOrderItem = null;
            serviceOrderItem = MobileCRM.DynamicEntity.createNew('dw_serviceorderitem');
            var properties = serviceOrderItem.properties;
            var referDispatch = new MobileCRM.Reference('dw_dispatch', bookMaterialData.DispatchId);
            var referLocalMaterial = new MobileCRM.Reference('dw_localmaterial', bookMaterialData.LocalMaterialId);
            var referServiceOrder = new MobileCRM.Reference('dw_serviceorder', bookMaterialData.ServiceOrderId);
            var referStock = new MobileCRM.Reference('dw_stock', bookMaterialData.StockId);
            var referCurrency = new MobileCRM.Reference('transactioncurrency', bookMaterialData.TransactionCurrencyId);
            if (bookMaterialData.AccountingIndicatorId != null && bookMaterialData.AccountingIndicatorId !== '') {
                var referAccountingIndicator = new MobileCRM.Reference('dw_accountingindicator', bookMaterialData.AccountingIndicatorId);
                properties.dw_accountingindicatorid = referAccountingIndicator;
            }
            properties.dw_confirmationdate = bookMaterialData.ConfirmationDate;
            properties.dw_dispatchid = referDispatch;
            properties.dw_displayonprintout = bookMaterialData.DisplayOnPrintout;
            properties.dw_errorcausingpart = bookMaterialData.ErrorCausingPart;
            properties.dw_localmaterialid = referLocalMaterial;
            properties.dw_materialdescription = bookMaterialData.MaterialDescription;
            properties.dw_materialno = bookMaterialData.MaterialNo;
            properties.dw_price = bookMaterialData.Price;
            properties.dw_quantity = bookMaterialData.Quantity;
            properties.dw_serviceorderid = referServiceOrder;
            properties.dw_stockid = referStock;
            properties.transactioncurrencyid = referCurrency;
            properties.dw_unit = bookMaterialData.Unit;
            serviceOrderItem.save(function (error) {
                if (error) {
                    return reject(error);
                }
                return resolve(serviceOrderItem.properties.dw_serviceorderitemid);
            });
        });
    };
    return ServiceOrderItem;
}());
exports.ServiceOrderItem = ServiceOrderItem;


/***/ }),

/***/ "./src/serviceorderitem/serviceorderitem.entity-names.ts":
/*!***************************************************************!*\
  !*** ./src/serviceorderitem/serviceorderitem.entity-names.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceorderitemEntityNames = (function () {
    function ServiceorderitemEntityNames() {
        this.entityLogicalName = 'dw_serviceorderitem';
        this.accountingindicator = 'dw_accountingindicatorid';
        this.assembly = 'dw_assemblyid';
        this.assemblypart = 'dw_assemblypartid';
        this.bulkregistrationitem = 'dw_bulkregistrationitemid';
        this.chargetime = 'dw_chargetime';
        this.createdby = 'createdby';
        this.description = 'dw_error1description';
        this.dispatchId = 'dw_dispatchid';
        this.displayonprintout = 'dw_displayonprintout';
        this.endtime = 'dw_endtime';
        this.error = 'dw_error1id';
        this.errorcategory = 'dw_errorcategory';
        this.errorcause = 'dw_errorcausingpart';
        this.executiondate = 'dw_confirmationdate';
        this.localmaterialtype = 'dw_localmaterialtype';
        this.materialdescription = 'dw_materialdescription';
        this.materialno = 'dw_materialno';
        this.materialnooferrorpart = 'dw_materialnooferrorpart';
        this.modifiedby = 'modifiedby';
        this.owner = 'ownerid';
        this.price = 'dw_price';
        this.quantity = 'dw_quantity';
        this.serialnooferrorpart = 'dw_serialnooferrorpart';
        this.serialnoofnewpart = 'dw_serialnoofnewpart';
        this.serviceorderId = 'dw_serviceorderid';
        this.serviceorderitemid = 'dw_serviceorderitemid';
        this.starttime = 'dw_starttime';
        this.subassembly = 'dw_subassemblyid';
        this.localmaterialId = 'dw_localmaterialid';
        this.transactioncurrencyid = 'transactioncurrencyid';
        this.total = 'dw_total';
        this.uniquedeviceidentifier = 'dw_uniquedeviceidentifier';
        this.unit = 'dw_unit';
        this.unitId = 'dw_unitid';
        this.workcenter = 'dw_stockid';
        this.isPricelistEmpty = 'dw_ispricelistempty';
        this.bulkedit = "dw_bulkedit";
    }
    return ServiceorderitemEntityNames;
}());
exports.ServiceorderitemEntityNames = ServiceorderitemEntityNames;


/***/ }),

/***/ "./src/serviceorderitem/serviceorderitem.entity.ts":
/*!*********************************************************!*\
  !*** ./src/serviceorderitem/serviceorderitem.entity.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serviceorderitem_entity_names_1 = __webpack_require__(/*! ./serviceorderitem.entity-names */ "./src/serviceorderitem/serviceorderitem.entity-names.ts");
var ServiceOrderItemEntity = (function () {
    function ServiceOrderItemEntity(entity) {
        if (entity) {
            var fields = new serviceorderitem_entity_names_1.ServiceorderitemEntityNames();
            this.serviceorderItemId = entity.properties[fields.serviceorderitemid];
            this.accountingindicator = entity.properties[fields.accountingindicator];
            this.assembly = entity.properties[fields.assembly];
            this.assemblyPart = entity.properties[fields.assemblypart];
            this.bulkRegistration = entity.properties[fields.bulkregistration];
            this.bulkRegistrationItem =
                entity.properties[fields.bulkregistrationitem];
            this.chargeTime = entity.properties[fields.chargetime];
            this.createdBy = entity.properties[fields.createdby];
            this.currency = entity.properties[fields.transactioncurrencyid];
            this.description = entity.properties[fields.description];
            this.dispatchNo = entity.properties[fields.dispatchId];
            this.displayOnPrintout = entity.properties[fields.displayonprintout];
            this.endTime = entity.properties[fields.endtime];
            this.error = entity.properties[fields.error];
            this.errorCategory = entity.properties[fields.errorcategory];
            this.errorCause = entity.properties[fields.errorcause];
            this.executionDate = entity.properties[fields.executiondate];
            this.localMaterialType = entity.properties[fields.localmaterialtype];
            this.materialDescription = entity.properties[fields.materialdescription];
            this.materialNo = entity.properties[fields.materialno];
            this.materialNoOfErrorPart =
                entity.properties[fields.materialnooferrorpart];
            this.modifiedBy = entity.properties[fields.modifiedby];
            this.price = entity.properties[fields.price];
            this.quantity = entity.properties[fields.quantity];
            this.serialNoOfErrorPart = entity.properties[fields.serialnooferrorpart];
            this.serialNoOfNewPart = entity.properties[fields.serialnoofnewpart];
            this.serviceOrder = entity.properties[fields.serviceorderId];
            this.startTime = entity.properties[fields.starttime];
            this.subAssembly = entity.properties[fields.subassembly];
            this.localMaterial = entity.properties[fields.localmaterialId];
            this.total = entity.properties[fields.total];
            this.uniqueDeviceIdentifier =
                entity.properties[fields.uniquedeviceidentifier];
            this.unit = entity.properties[fields.unit];
            this.unitId = entity.properties[fields.unitId];
            this.workCenter = entity.properties[fields.workcenter];
            this.owner = entity.properties[fields.owner];
        }
    }
    return ServiceOrderItemEntity;
}());
exports.ServiceOrderItemEntity = ServiceOrderItemEntity;


/***/ }),

/***/ "./src/serviceorderitem/serviceorderitem.price.context.ts":
/*!****************************************************************!*\
  !*** ./src/serviceorderitem/serviceorderitem.price.context.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceorderItemPriceContext = (function () {
    function ServiceorderItemPriceContext() {
        this.serviceorderitemList = [];
    }
    return ServiceorderItemPriceContext;
}());
exports.ServiceorderItemPriceContext = ServiceorderItemPriceContext;


/***/ }),

/***/ "./src/serviceordermapping/servicedevicemapping.entity-names.ts":
/*!**********************************************************************!*\
  !*** ./src/serviceordermapping/servicedevicemapping.entity-names.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceDeviceMappingEntityNames = (function () {
    function ServiceDeviceMappingEntityNames() {
        this.entityLogicalName = 'dw_servicedevicemapping';
        this.serviceproductid = '_dw_serviceproductid_value';
        this.servicedevicemappingid = 'dw_servicedevicemappingid';
        this.name = 'dw_name';
        this.servicekeyproduct = 'dw_servicekeyproduct';
        this.serviceoption = 'dw_serviceoption';
        this.serviceoptiondescription = 'dw_serviceoptiondescription';
        this.systemcharacteristics = 'dw_systemcharacteristics';
        this.materialnoid = 'dw_materialnoid';
    }
    return ServiceDeviceMappingEntityNames;
}());
exports.ServiceDeviceMappingEntityNames = ServiceDeviceMappingEntityNames;


/***/ }),

/***/ "./src/serviceordermapping/servicedevicemapping.ts":
/*!*********************************************************!*\
  !*** ./src/serviceordermapping/servicedevicemapping.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var servicedevicemapping_entity_names_1 = __webpack_require__(/*! ./servicedevicemapping.entity-names */ "./src/serviceordermapping/servicedevicemapping.entity-names.ts");
var ServiceDeviceMapping = (function () {
    function ServiceDeviceMapping() {
    }
    ServiceDeviceMapping.prototype.retrieveDeviceMappingByMvkeIdAndParams = function (mvkeId, serviceOption, systemCharacteristic) {
        return new Promise(function (resolve, reject) {
            var fields = new servicedevicemapping_entity_names_1.ServiceDeviceMappingEntityNames();
            var entity = new MobileCRM.FetchXml.Entity(fields.entityLogicalName);
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.where(fields.materialnoid, 'eq', mvkeId);
            entity.filter.where(fields.serviceoptiondescription, 'eq', serviceOption);
            entity.filter.where(fields.systemcharacteristics, 'eq', systemCharacteristic);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('DynamicEntities', resolve, reject, null);
        });
    };
    return ServiceDeviceMapping;
}());
exports.ServiceDeviceMapping = ServiceDeviceMapping;


/***/ }),

/***/ "./src/softwareversion/software.version.entity-names.ts":
/*!**************************************************************!*\
  !*** ./src/softwareversion/software.version.entity-names.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SoftwareVersionEntityNames = (function () {
    function SoftwareVersionEntityNames() {
        this.entityLogicalName = 'dw_softwareversion';
        this.name = 'dw_name';
        this.softwareversionid = 'dw_softwareversionid';
        this.materialnumberid = 'dw_materialnumberid';
        this.localmaterialid = 'dw_localmaterialid';
    }
    return SoftwareVersionEntityNames;
}());
exports.SoftwareVersionEntityNames = SoftwareVersionEntityNames;


/***/ }),

/***/ "./src/systemuser/systemuser.entity-names.ts":
/*!***************************************************!*\
  !*** ./src/systemuser/systemuser.entity-names.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SystemUserEntityNames = (function () {
    function SystemUserEntityNames() {
        this.entityLogicalName = "systemuser";
        this.companycode = "dw_companycode";
        this.costcenter = "dw_costcenter";
        this.defaultstoragelocation = "dw_defaultstoragelocation";
        this.division = "speed1_division";
        this.fullname = "fullname";
        this.mainphone = "address1_telephone1";
        this.orgKey2 = "dw_org_key_2";
        this.orgKey3 = "dw_org_key_3";
        this.orgKey4 = "dw_org_key_4";
        this.plant = "dw_plant";
        this.salesorganization = "dw_salesorganization";
        this.systemuserid = "systemuserid";
        this.workcenter = "dw_technicianid";
    }
    return SystemUserEntityNames;
}());
exports.SystemUserEntityNames = SystemUserEntityNames;


/***/ }),

/***/ "./src/systemuser/systemuser.entity.ts":
/*!*********************************************!*\
  !*** ./src/systemuser/systemuser.entity.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var systemuser_entity_names_1 = __webpack_require__(/*! ./systemuser.entity-names */ "./src/systemuser/systemuser.entity-names.ts");
var SystemUserEntity = (function () {
    function SystemUserEntity(entity) {
        if (entity) {
            var _fields = new systemuser_entity_names_1.SystemUserEntityNames();
            this.systemuserid = entity.properties[_fields.systemuserid];
            this.companycode = entity.properties[_fields.companycode];
            this.costcenter = entity.properties[_fields.costcenter];
            this.division = entity.properties[_fields.division];
            this.fullname = entity.properties[_fields.fullname];
            this.mainphone = entity.properties[_fields.mainphone];
            this.orgKey2 = entity.properties[_fields.orgKey2];
            this.orgKey3 = entity.properties[_fields.orgKey3];
            this.orgKey4 = entity.properties[_fields.orgKey4];
            this.plant = entity.properties[_fields.plant];
            this.salesorganization = entity.properties[_fields.salesorganization];
            this.workcenter = entity.properties[_fields.workcenter];
        }
    }
    return SystemUserEntity;
}());
exports.SystemUserEntity = SystemUserEntity;


/***/ }),

/***/ "./src/systemuser/systemuser.ts":
/*!**************************************!*\
  !*** ./src/systemuser/systemuser.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var systemuser_entity_names_1 = __webpack_require__(/*! ./systemuser.entity-names */ "./src/systemuser/systemuser.entity-names.ts");
var SystemUser = (function () {
    function SystemUser() {
    }
    SystemUser.prototype.retrieveById = function (systemUserId) {
        return new Promise(function (resolve, reject) {
            var _user = new systemuser_entity_names_1.SystemUserEntityNames();
            var fetchSU = new MobileCRM.FetchXml.Entity(_user.entityLogicalName);
            fetchSU.addAttributes();
            fetchSU.filter = new MobileCRM.FetchXml.Filter();
            fetchSU.filter.where(_user.systemuserid, 'eq', systemUserId);
            var userFetch = new MobileCRM.FetchXml.Fetch(fetchSU);
            userFetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0 && results[0]) {
                    resolve(results[0]);
                }
                else {
                    reject("SystemUser.retrieveById: Record not found!");
                }
            }, function (err) {
                reject(err);
            }, null);
        });
    };
    SystemUser.prototype.retrieveCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var _user = new systemuser_entity_names_1.SystemUserEntityNames();
            var fetchSU = new MobileCRM.FetchXml.Entity(_user.entityLogicalName);
            fetchSU.addAttributes();
            fetchSU.filter = new MobileCRM.FetchXml.Filter();
            fetchSU.filter.where(_user.systemuserid, 'eq-userid', null);
            var userFetch = new MobileCRM.FetchXml.Fetch(fetchSU);
            userFetch.execute('DynamicEntities', function (results) {
                if (results && results.length > 0 && results[0]) {
                    resolve(results[0]);
                }
                else {
                    reject("Record not found!");
                }
            }, function (err) {
                reject(err);
            }, null);
        });
    };
    SystemUser.prototype.retrieveSystemUser = function () {
        return new Promise(function (resolve, reject) {
            var fetchSU = new MobileCRM.FetchXml.Entity('systemuser');
            fetchSU.addAttributes();
            fetchSU.filter = new MobileCRM.FetchXml.Filter();
            fetchSU.filter.where('systemuserid', 'eq-userid', null);
            var userFetch = new MobileCRM.FetchXml.Fetch(fetchSU);
            userFetch.execute('JSON', function (results) {
                if (results && results.length > 0 && results[0]) {
                    return resolve(results[0]);
                }
            }, function (err) {
                return reject(err);
            }, null);
        });
    };
    return SystemUser;
}());
exports.SystemUser = SystemUser;


/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/dispatch/dispatch.form.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\Drager\CRM\Source\Project\RescoClient\src\dispatch\dispatch.form.ts */"./src/dispatch/dispatch.form.ts");


/***/ })

/******/ });
//# sourceMappingURL=dispatch_form.resco.js.map