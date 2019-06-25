"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
        this.next = null;
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.next = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.next) {
            return this.next.handle(request);
        }
        return request;
    };
    return AbstractHandler;
}());
var ValidateName = /** @class */ (function (_super) {
    __extends(ValidateName, _super);
    function ValidateName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateName.prototype.handle = function (request) {
        if (!request.name) {
            request.validate.msg.push('Name is bad \n');
            request.validate.res = false;
        }
        return _super.prototype.handle.call(this, request);
    };
    return ValidateName;
}(AbstractHandler));
var ValidateAge = /** @class */ (function (_super) {
    __extends(ValidateAge, _super);
    function ValidateAge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateAge.prototype.handle = function (request) {
        if (request.age < 18) {
            request.validate.msg.push('Age is bad \n');
            request.validate.res = false;
        }
        return _super.prototype.handle.call(this, request);
    };
    return ValidateAge;
}(AbstractHandler));
var ValidateTest = /** @class */ (function (_super) {
    __extends(ValidateTest, _super);
    function ValidateTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateTest.prototype.handle = function (request) {
        if (!request.test) {
            request.validate.msg.push('Test is bad \n');
            request.validate.res = false;
        }
        return _super.prototype.handle.call(this, request);
    };
    return ValidateTest;
}(AbstractHandler));
var valA = new ValidateAge();
var valB = new ValidateName();
var valC = new ValidateTest();
var Company = /** @class */ (function () {
    function Company() {
        this.name = '';
        this.age = 11;
        this.test = false;
        this.validate = {
            msg: [],
            res: false
        };
    }
    return Company;
}());
var company = new Company();
valA.setNext(valB).setNext(valC);
console.log(valA.handle(company));
