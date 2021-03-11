this["dwtwa_finishtestprocedure"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.5.2";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if ( true && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = function(u) {
        var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
        return isUint8Array ? u.toString('base64')
            : btoa(utob(String(u)));
    }
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(u)
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(_atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/common/servicestatusmanager.ts":
/*!********************************************!*\
  !*** ./src/common/servicestatusmanager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_1 = __webpack_require__(/*! ../dispatch/dispatch */ "./src/dispatch/dispatch.ts");
var serviceorder_1 = __webpack_require__(/*! ../serviceorder/serviceorder */ "./src/serviceorder/serviceorder.ts");
var ServiceStatusManager = (function () {
    function ServiceStatusManager() {
    }
    ServiceStatusManager.prototype.updateServiceOrderAndDispatchStatusInProgress = function (serviceOrderId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            serviceorder_1.retrieveServiceorderById(serviceOrderId).then(function (serviceOrders) {
                if (serviceOrders == null || serviceOrders.length === 0) {
                    return reject('ServiceOrder cannot get recieved!');
                }
                var dispatchId = serviceOrders[0].dw_dispatchid != null ? serviceOrders[0].dw_dispatchid.id : null;
                var serviceOrderStatus = serviceOrders[0].dw_serviceorderstatus;
                if (serviceOrderStatus != 1) {
                    return resolve();
                }
                if (serviceOrderStatus == 1) {
                    var serviceOrder = new MobileCRM.DynamicEntity('dw_serviceorder', serviceOrderId);
                    var properties = serviceOrder.properties;
                    properties.dw_serviceorderstatus = 100000000;
                    serviceOrder.save(function (error) {
                        if (error) {
                            return reject(error);
                        }
                        if (dispatchId == null || dispatchId === '') {
                            return resolve();
                        }
                        dispatch_1.retrieveDispatchStatusById(dispatchId).then(function (dispatches) {
                            if (dispatches != null && dispatches.length === 1) {
                                var dispatchStatus = dispatches[0].dw_dispatchstatus;
                                if (dispatchStatus == 100000000) {
                                    _this.updateDispatchStatus(dispatchId, 100000001).then(function () {
                                        return resolve();
                                    });
                                }
                                else {
                                    return resolve();
                                }
                            }
                            else {
                                return resolve();
                            }
                        }).catch(function (error) {
                            return reject(error);
                        });
                    });
                }
            });
        });
    };
    ServiceStatusManager.prototype.updateServiceOrderStatus = function (serviceOrderId, serviceOrderStatus) {
        return new Promise(function (resolve, reject) {
            var serviceOrder = new MobileCRM.DynamicEntity('dw_serviceorder', serviceOrderId);
            var properties = serviceOrder.properties;
            properties.dw_serviceorderstatus = serviceOrderStatus;
            serviceOrder.save(function (error) {
                if (error) {
                    return reject(error);
                }
                return resolve();
            });
        });
    };
    ServiceStatusManager.prototype.updateDispatchStatus = function (dispatchId, dispatchStatus) {
        return new Promise(function (resolve, reject) {
            var serviceOrder = new MobileCRM.DynamicEntity('dw_dispatch', dispatchId);
            var properties = serviceOrder.properties;
            properties.dw_dispatchstatus = dispatchStatus;
            serviceOrder.save(function (error) {
                if (error) {
                    return reject(error);
                }
                return resolve();
            });
        });
    };
    return ServiceStatusManager;
}());
exports.ServiceStatusManager = ServiceStatusManager;


/***/ }),

/***/ "./src/configuration/filenames.ts":
/*!****************************************!*\
  !*** ./src/configuration/filenames.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileNames = (function () {
    function FileNames() {
    }
    FileNames.CreateResultHeader = 'Command CreateResultHeaders.json';
    FileNames.DeleteResultHeaders = 'DeleteResultHeaders.json';
    FileNames.InstalledBases = 'InstalledBases.json';
    FileNames.EquipmentHistories = 'EquipmentHistories.json';
    FileNames.FolderNumbers = 'FolderNumbers.json';
    FileNames.Languages = 'Languages.json';
    FileNames.OverallResults = 'OverallResults.json';
    FileNames.ResultHeaders = 'ResultHeaders.json';
    FileNames.ServiceOrders = 'ServiceOrders.json';
    FileNames.SystemUser = 'SystemUser.json';
    FileNames.TeamTools = 'TeamTools.json';
    FileNames.TechnicianTools = 'TechnicianTools.json';
    FileNames.TestProcedureDocumentAnnotations = 'TestProcedureDocumentAnnotations.json';
    FileNames.TestProcedureDocuments = 'TestProcedureDocuments.json';
    FileNames.TestProcedures = 'TestProcedures.json';
    FileNames.TestStepAnnotations = 'TestStepAnnotations.json';
    FileNames.TestSteps = 'TestSteps.json';
    FileNames.TwaTestStepAttachments = 'TestStepAttachments.json';
    FileNames.TwaTestStepResults = 'TestStepResults.json';
    FileNames.TwaTestStepResultDocuments = 'TestStepResultDocuments.json';
    FileNames.TwaTestStepResultDocumentAnnotations = 'TestStepResultDocumentAnnotations.json';
    FileNames.TwaFinishResults = 'FinishResults.json';
    FileNames.UserSettings = 'UserSettings.json';
    FileNames.DataReady = 'resco.result';
    FileNames.Stock = 'Stock.json';
    FileNames.Mvke = 'Mvke.json';
    FileNames.PriceListItem = 'PriceListItem.json';
    FileNames.Currency = 'TransactionCurrency.json';
    FileNames.AccountingIndicator = 'AccountingIndicator.json';
    return FileNames;
}());
exports.FileNames = FileNames;


/***/ }),

/***/ "./src/dispatch/dispatch.ts":
/*!**********************************!*\
  !*** ./src/dispatch/dispatch.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function retrieveDispatchStatusById(dispatchId) {
    return new Promise(function (resolve, reject) {
        var so = new MobileCRM.FetchXml.Entity('dw_dispatch');
        so.addAttribute('dw_dispatchstatus');
        so.filter = new MobileCRM.FetchXml.Filter();
        so.filter.where('dw_dispatchid', 'eq', dispatchId);
        var soFetch = new MobileCRM.FetchXml.Fetch(so);
        soFetch.execute('JSON', function (results) {
            resolve(results);
        }, function (err) {
            reject(err);
        }, null);
    });
}
exports.retrieveDispatchStatusById = retrieveDispatchStatusById;


/***/ }),

/***/ "./src/fileoperations/fileoperations.ts":
/*!**********************************************!*\
  !*** ./src/fileoperations/fileoperations.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filenames_1 = __webpack_require__(/*! ../configuration/filenames */ "./src/configuration/filenames.ts");
function saveToJsonFile(object, filename) {
    var jsonObject = JSON.stringify(object);
    MobileCRM.Application.writeFile('TWA/' + filename, jsonObject, false);
}
exports.saveToJsonFile = saveToJsonFile;
function readFromJsonFile(filename) {
    return new Promise(function (resolve, reject) {
        MobileCRM.Application.readFile('TWA/' + filename, function (result) {
            var jsonObject = JSON.parse(result);
            resolve(jsonObject);
        }, function (error) {
            reject(error);
        });
    });
}
exports.readFromJsonFile = readFromJsonFile;
function deleteTwaFile(fileName) {
    return new Promise(function (resolve, reject) {
        MobileCRM.Application.deleteFile('TWA/' + fileName, function () {
            resolve();
        }, function (error) {
            reject(error);
        });
    });
}
exports.deleteTwaFile = deleteTwaFile;
function writeAnnotationToFile(annotation) {
    return new Promise(function (resolve, reject) {
        var filePath = 'TWA/' + annotation.FileName;
        MobileCRM.Application.writeFileFromBase64(filePath, annotation.DocumentBody, function () {
            resolve(filePath);
        }, function (error) {
            reject(error);
        });
    });
}
exports.writeAnnotationToFile = writeAnnotationToFile;
function writeReadyStatus(error) {
    var success = {
        ErrorMessage: '',
        Status: 'Success',
    };
    if (error != null && error !== '') {
        success.ErrorMessage = error;
        success.Status = 'Failed';
    }
    saveToJsonFile(success, filenames_1.FileNames.DataReady);
}
exports.writeReadyStatus = writeReadyStatus;


/***/ }),

/***/ "./src/models/dataobjects/twafinishresult.ts":
/*!***************************************************!*\
  !*** ./src/models/dataobjects/twafinishresult.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TwaFinishResult = (function () {
    function TwaFinishResult() {
    }
    return TwaFinishResult;
}());
exports.TwaFinishResult = TwaFinishResult;


/***/ }),

/***/ "./src/resultheader/resultheader.ts":
/*!******************************************!*\
  !*** ./src/resultheader/resultheader.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
var servicestatusmanager_1 = __webpack_require__(/*! ../common/servicestatusmanager */ "./src/common/servicestatusmanager.ts");
var ResultHeader = (function () {
    function ResultHeader() {
    }
    ResultHeader.prototype.retrieveResultHeadersByServiceOrderIds = function (serviceOrderIds) {
        return new Promise(function (resolve, reject) {
            var entity = new MobileCRM.FetchXml.Entity('dw_teststepresultheader');
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.isIn('dw_serviceorderid', serviceOrderIds);
            var linkedServiceorder = entity.addLink('dw_serviceorder', 'dw_serviceorderid', 'dw_serviceorderid', 'inner');
            linkedServiceorder.addAttribute('dw_serviceordernumber');
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results != null && results.length > 0) {
                    resolve(results);
                }
                resolve(null);
            }, function (err) {
                reject(err);
            }, null);
        });
    };
    ResultHeader.prototype.retrieveResultHeadersByServiceOrderNumber = function (serviceOrderNumber) {
        return new Promise(function (resolve, reject) {
            var entity = new MobileCRM.FetchXml.Entity('dw_teststepresultheader');
            entity.addAttributes();
            var linkedServiceorder = entity.addLink('dw_serviceorder', 'dw_serviceorderid', 'dw_serviceorderid', 'inner');
            linkedServiceorder.addAttribute('dw_serviceordernumber');
            linkedServiceorder.filter = new MobileCRM.FetchXml.Filter();
            linkedServiceorder.filter.where('dw_serviceordernumber', 'eq', serviceOrderNumber);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (results) {
                if (results != null && results.length > 0) {
                    resolve(results);
                }
                resolve(null);
            }, function (err) {
                reject(err);
            }, null);
        });
    };
    ResultHeader.prototype.retrieveResultHeadersByIds = function (resultHeaderIds) {
        return new Promise(function (resolve, reject) {
            var entity = new MobileCRM.FetchXml.Entity('dw_teststepresultheader');
            entity.addAttributes();
            entity.filter = new MobileCRM.FetchXml.Filter();
            entity.filter.isIn('dw_teststepresultheaderid', resultHeaderIds);
            var fetch = new MobileCRM.FetchXml.Fetch(entity);
            fetch.execute('JSON', function (resultHeaders) {
                if (resultHeaders != null && resultHeaders.length > 0) {
                    resolve(resultHeaders);
                }
                resolve(null);
            }, function (err) {
                reject(err);
            }, null);
        });
    };
    ResultHeader.prototype.updateResultHeader = function (twaFinishResult) {
        return new Promise(function (resolve, reject) {
            var resultHeader = new MobileCRM.DynamicEntity('dw_teststepresultheader', twaFinishResult.ResultHeaderId);
            var referSignature = new MobileCRM.Reference('systemuser', twaFinishResult.SystemUserId);
            var properties = resultHeader.properties;
            properties.dw_comment = twaFinishResult.Comment;
            properties.dw_overallresult = twaFinishResult.OverallResult;
            properties.dw_signatureid = referSignature;
            properties.dw_testinstructionclosedate = new Date();
            properties.dw_mobileofflineaction = 100000000;
            properties.statuscode = 100000000;
            if (twaFinishResult.Tools != null) {
                properties.dw_tools = Base64.decode(twaFinishResult.Tools);
            }
            resultHeader.save(function (error) {
                if (error) {
                    return reject(error);
                }
                return resolve(resultHeader.properties);
            });
        });
    };
    ResultHeader.prototype.deleteResultHeaderById = function (resultHeaderId) {
        return new Promise(function (resolve, reject) {
            MobileCRM.DynamicEntity.deleteById('dw_teststepresultheader', resultHeaderId, function () {
                return resolve(true);
            }, function (error) {
                return reject(error);
            }, null);
        });
    };
    ResultHeader.prototype.createResultHeader = function (resultHeaderFromTwa) {
        return new Promise(function (resolve, reject) {
            var resultHeader = MobileCRM.DynamicEntity.createNew('dw_teststepresultheader');
            var properties = resultHeader.properties;
            var referServiceOrder = new MobileCRM.Reference('dw_serviceorder', resultHeaderFromTwa.ServiceOrderId);
            var referTestProcedure = new MobileCRM.Reference('dw_testprocedure', resultHeaderFromTwa.TestProcedureId);
            var referLanguage = new MobileCRM.Reference('dw_language', resultHeaderFromTwa.LanguageId);
            properties.dw_serviceorderid = referServiceOrder;
            properties.dw_languageid = referLanguage;
            properties.dw_testprocedureid = referTestProcedure;
            properties.dw_currencyformat = resultHeaderFromTwa.CurrencySymbol;
            properties.dw_decimalsymbol = resultHeaderFromTwa.DecimalSymbol;
            properties.dw_digitgroupingsymbol = resultHeaderFromTwa.NumberSeparator;
            properties.dw_shortdateformat = resultHeaderFromTwa.UserDateFormat;
            properties.dw_testinstructionstartdate = new Date();
            properties.dw_name = resultHeaderFromTwa.Name;
            properties.dw_foldernumber = resultHeaderFromTwa.FolderNumber;
            resultHeader.save(function (error) {
                if (error) {
                    return reject(error);
                }
                var servicStatusManager = new servicestatusmanager_1.ServiceStatusManager();
                servicStatusManager.updateServiceOrderAndDispatchStatusInProgress(resultHeaderFromTwa.ServiceOrderId).then(function () {
                    var resultHeaderObj = {
                        createdby: resultHeader.properties.createdby,
                        createdon: resultHeader.properties.createdon,
                        dw_currencyformat: resultHeader.properties.dw_currencyformat,
                        dw_decimalsymbol: resultHeader.properties.dw_decimalsymbol,
                        dw_digitgroupingsymbol: resultHeader.properties.dw_digitgroupingsymbol,
                        dw_languageid: resultHeader.properties.dw_languageid,
                        dw_modifiedby: resultHeader.properties.dw_modifiedby,
                        dw_modifiedon: resultHeader.properties.dw_modifiedon,
                        dw_name: resultHeader.properties.dw_name,
                        dw_overallresult: resultHeader.properties.dw_overallresult,
                        dw_ownerid: resultHeader.properties.dw_ownerid,
                        dw_serviceorderid: resultHeader.properties.dw_serviceorderid,
                        dw_shortdateformat: resultHeader.properties.dw_shortdateformat,
                        dw_testinstructionstartdate: resultHeader.properties.dw_testinstructionstartdate,
                        dw_testprocedureid: resultHeader.properties.dw_testprocedureid,
                        dw_teststepresultheaderid: resultHeader.properties.dw_teststepresultheaderid,
                    };
                    return resolve(resultHeaderObj);
                }).catch(function (error) {
                    return reject(error);
                });
            });
        });
    };
    return ResultHeader;
}());
exports.ResultHeader = ResultHeader;


/***/ }),

/***/ "./src/serviceorder/serviceorder.ts":
/*!******************************************!*\
  !*** ./src/serviceorder/serviceorder.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function retrieveServiceorderById(serviceOrderId) {
    return new Promise(function (resolve, reject) {
        var so = new MobileCRM.FetchXml.Entity('dw_serviceorder');
        so.addAttributes();
        so.filter = new MobileCRM.FetchXml.Filter();
        so.filter.where('dw_serviceorderid', 'eq', serviceOrderId);
        var soFetch = new MobileCRM.FetchXml.Fetch(so);
        soFetch.execute('JSON', function (results) {
            resolve(results);
        }, function (err) {
            reject(err);
        }, null);
    });
}
exports.retrieveServiceorderById = retrieveServiceorderById;
function retrieveServiceorderByIds(serviceOrderIds) {
    return new Promise(function (resolve, reject) {
        var so = new MobileCRM.FetchXml.Entity('dw_serviceorder');
        so.addAttributes();
        so.filter = new MobileCRM.FetchXml.Filter();
        so.filter.isIn('dw_serviceorderid', serviceOrderIds);
        var soFetch = new MobileCRM.FetchXml.Fetch(so);
        soFetch.execute('JSON', function (results) {
            resolve(results);
        }, function (err) {
            reject(err);
        }, null);
    });
}
exports.retrieveServiceorderByIds = retrieveServiceorderByIds;
function retrieveAllServiceorders() {
    return new Promise(function (resolve, reject) {
        var so = new MobileCRM.FetchXml.Entity('dw_serviceorder');
        so.addAttributes();
        var soFetch = new MobileCRM.FetchXml.Fetch(so);
        soFetch.count = 1000;
        soFetch.execute('JSON', function (results) {
            resolve(results);
        }, function (err) {
            reject(err);
        }, null);
    });
}
exports.retrieveAllServiceorders = retrieveAllServiceorders;
function updateTestResultStatus(resultHeader, testProcedureStatus) {
    return new Promise(function (resolve, reject) {
        var serviceOrder = new MobileCRM.DynamicEntity('dw_serviceorder', resultHeader.dw_serviceorderid.id);
        var properties = serviceOrder.properties;
        properties.dw_testprocedurestatus = testProcedureStatus;
        serviceOrder.save(function (error) {
            if (error) {
                return reject(error);
            }
            return resolve(serviceOrder.properties);
        });
    });
}
exports.updateTestResultStatus = updateTestResultStatus;
function updateTestResultStatusByServiceorderId(serviceorderId, testProcedureStatus) {
    return new Promise(function (resolve, reject) {
        var serviceOrder = new MobileCRM.DynamicEntity('dw_serviceorder', serviceorderId);
        var properties = serviceOrder.properties;
        properties.dw_testprocedurestatus = testProcedureStatus;
        serviceOrder.save(function (error) {
            if (error) {
                return reject(error);
            }
            return resolve();
        });
    });
}
exports.updateTestResultStatusByServiceorderId = updateTestResultStatusByServiceorderId;


/***/ }),

/***/ "./src/twa/twa-finishtestprocedure.ts":
/*!********************************************!*\
  !*** ./src/twa/twa-finishtestprocedure.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filenames_1 = __webpack_require__(/*! ../configuration/filenames */ "./src/configuration/filenames.ts");
var fileoperations_1 = __webpack_require__(/*! ../fileoperations/fileoperations */ "./src/fileoperations/fileoperations.ts");
var twafinishresult_1 = __webpack_require__(/*! ../models/dataobjects/twafinishresult */ "./src/models/dataobjects/twafinishresult.ts");
var resultheader_1 = __webpack_require__(/*! ../resultheader/resultheader */ "./src/resultheader/resultheader.ts");
var serviceorder_1 = __webpack_require__(/*! ../serviceorder/serviceorder */ "./src/serviceorder/serviceorder.ts");
var FinishTestProcedure = (function () {
    function FinishTestProcedure() {
    }
    FinishTestProcedure.prototype.finishTestProcedure = function () {
        this.getFinishTestProcedureData()
            .then(this.finishResultHeader.bind(this))
            .then(this.setTestResultStatus.bind(this))
            .then(function () {
            fileoperations_1.writeReadyStatus('');
        })
            .catch(function (error) {
            fileoperations_1.writeReadyStatus(error);
            MobileCRM.bridge.alert(error);
        });
    };
    FinishTestProcedure.prototype.getFinishTestProcedureData = function () {
        return new Promise(function (resolve, reject) {
            var twaFinishResults = [];
            fileoperations_1.readFromJsonFile(filenames_1.FileNames.TwaFinishResults)
                .then(function (finishResults) {
                for (var i = 0; i < finishResults.length; i++) {
                    var twaFinishResult = new twafinishresult_1.TwaFinishResult();
                    twaFinishResult.Comment = finishResults[i].Comment;
                    twaFinishResult.OverallResult = finishResults[i].OverallResult;
                    twaFinishResult.ResultHeaderId = finishResults[i].ResultHeaderId;
                    twaFinishResult.SystemUserId = finishResults[i].Signature;
                    twaFinishResult.Tools = finishResults[i].Tools;
                    twaFinishResults.push(twaFinishResult);
                }
                resolve(twaFinishResults);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    FinishTestProcedure.prototype.finishResultHeader = function (twaFinishResults) {
        var resultHeader = new resultheader_1.ResultHeader();
        return new Promise(function (resolve, reject) {
            var promiseRequests = [];
            twaFinishResults.forEach(function (finishResult) {
                promiseRequests.push(resultHeader.updateResultHeader(finishResult));
            });
            Promise.all(promiseRequests)
                .then(function (resultHeaders) {
                return resolve(resultHeaders);
            }).catch(function (error) {
                return reject(error);
            });
        });
    };
    FinishTestProcedure.prototype.setTestResultStatus = function (resultHeaders) {
        return new Promise(function (resolve, reject) {
            var promiseRequests = [];
            resultHeaders.forEach(function (resultHeader) {
                promiseRequests.push(serviceorder_1.updateTestResultStatus(resultHeader, 2));
            });
            Promise.all(promiseRequests)
                .then(function () {
                return resolve(true);
            }).catch(function (error) {
                return reject(error);
            });
        });
    };
    return FinishTestProcedure;
}());
exports.FinishTestProcedure = FinishTestProcedure;


/***/ }),

/***/ 4:
/*!**************************************************!*\
  !*** multi ./src/twa/twa-finishtestprocedure.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\torsten.kayser\source\repos\Drg365\Source\Project\RescoClient\src\twa\twa-finishtestprocedure.ts */"./src/twa/twa-finishtestprocedure.ts");


/***/ })

/******/ });
//# sourceMappingURL=twa_finishtestprocedure.resco.js.map