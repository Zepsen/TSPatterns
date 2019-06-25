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
var Target = /** @class */ (function () {
    function Target() {
    }
    /**
     * request
     */
    Target.prototype.request = function () {
        console.log('request');
    };
    return Target;
}());
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.strangeRequest = function () {
        console.log('Test');
    };
    return Test;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function () {
        this.adaptee.strangeRequest();
    };
    return Adapter;
}(Target));
var client = new Target();
client.request();
client = new Adapter(new Test());
client.request();
