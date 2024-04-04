"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCsvUpload = void 0;
var test_1 = require("@playwright/test");
var constants_1 = require("./constants");
var elements_1 = require("../../elements");
var base_component_1 = require("../base-component");
var FileCsvUpload = /** @class */ (function (_super) {
    __extends(FileCsvUpload, _super);
    function FileCsvUpload(page, selector) {
        var _this = _super.call(this, page, selector) || this;
        _this.fileInput = new elements_1.FileCSVUploadInput(page, "".concat(selector));
        _this.fileMessage = new elements_1.StaticText(page, "".concat(selector, " ").concat(constants_1.SELECTORS.FILE_MESSAGE));
        _this.replaceFileButton = new elements_1.Button(page, "".concat(selector, " ").concat(constants_1.SELECTORS.REPLACE_BUTTON));
        _this.deleteFileButton = new elements_1.Button(page, "".concat(selector, " ").concat(constants_1.SELECTORS.DELETE_FILE_BUTTON));
        return _this;
    }
    FileCsvUpload.prototype.uploadFile = function (pathToCSV) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Upload file from path: ".concat(pathToCSV), function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.fileInput.uploadFile(pathToCSV)];
                                    case 1:
                                        _b.sent();
                                        _a = test_1.expect;
                                        return [4 /*yield*/, this.locator.locator(constants_1.SELECTORS.FILE_DRAG_DROP_LOADING)];
                                    case 2: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).not.toBeVisible()];
                                    case 3:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileCsvUpload.prototype.isPending = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isPending;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isPending = false;
                        return [4 /*yield*/, test_1.test.step("Is pending", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.locator.locator(constants_1.SELECTORS.FILE_DRAG_DROP_LOADING).count()];
                                        case 1:
                                            isPending = (_a.sent()) > 0;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isPending];
                }
            });
        });
    };
    FileCsvUpload.prototype.isUploadSuccess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isUploadSuccess;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isUploadSuccess = false;
                        return [4 /*yield*/, test_1.test.step("Is upload success", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fileMessage.getText()];
                                        case 1:
                                            isUploadSuccess = (_a.sent()) === constants_1.LABELS.UPLOAD_SUCCESS_MESSAGE;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isUploadSuccess];
                }
            });
        });
    };
    FileCsvUpload.prototype.isUploadFailed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isUploadFailed;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isUploadFailed = false;
                        return [4 /*yield*/, test_1.test.step("Is upload failed", function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = [constants_1.LABELS.UPLOAD_FAILD_MESSAGE, constants_1.LABELS.UPLOAD_INVALID_FILE_FORMAT_MESSAGE]).includes;
                                            return [4 /*yield*/, this.fileMessage.getText()];
                                        case 1:
                                            isUploadFailed = _b.apply(_a, [_c.sent()]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isUploadFailed];
                }
            });
        });
    };
    FileCsvUpload.prototype.getFileUploadMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileUploadMessage;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileUploadMessage = '';
                        return [4 /*yield*/, test_1.test.step("Get file upload message", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fileMessage.getText()];
                                        case 1:
                                            fileUploadMessage = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, fileUploadMessage];
                }
            });
        });
    };
    FileCsvUpload.prototype.deleteFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Delete file", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.deleteFileButton.click()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileCsvUpload;
}(base_component_1.BaseComponent));
exports.FileCsvUpload = FileCsvUpload;
