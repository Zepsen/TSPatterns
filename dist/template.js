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
var BaseUserTemplate = /** @class */ (function () {
    function BaseUserTemplate() {
    }
    BaseUserTemplate.prototype.template = function () {
        if (this.validate()) {
            this.save();
        }
        else {
            this.error();
        }
    };
    BaseUserTemplate.prototype.error = function () {
        console.log('Error');
    };
    return BaseUserTemplate;
}());
var UserA = /** @class */ (function (_super) {
    __extends(UserA, _super);
    function UserA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserA.prototype.validate = function () {
        return true;
    };
    UserA.prototype.save = function () {
        console.log('Save');
    };
    return UserA;
}(BaseUserTemplate));
var UserB = /** @class */ (function (_super) {
    __extends(UserB, _super);
    function UserB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserB.prototype.validate = function () {
        return false;
    };
    UserB.prototype.save = function () {
        console.log('Save');
    };
    return UserB;
}(BaseUserTemplate));
var a = new UserA();
a.template();
var b = new UserB();
b.template();
