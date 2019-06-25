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
var User = /** @class */ (function () {
    function User() {
        this.info = {
            firstName: "Test"
        };
    }
    return User;
}());
var Gen = /** @class */ (function () {
    function Gen(g) {
        this.gen = g;
    }
    return Gen;
}());
var defUser = new User();
console.log(defUser.info.firstName);
var genStr = new Gen("string");
var genNum = new Gen(1);
console.log(genStr.gen);
console.log(genNum.gen);
var Abs = /** @class */ (function () {
    function Abs() {
    }
    Abs.prototype.template = function () {
        console.log("Abs");
        var res = this.do();
        this.log(res);
        res = 'this.do()';
        this.log(res);
    };
    Abs.prototype.log = function (val) {
        console.log(val);
    };
    return Abs;
}());
var Der = /** @class */ (function (_super) {
    __extends(Der, _super);
    function Der() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Der.prototype.do = function () {
        return 'Der';
    };
    Der.prototype.show = function (param) {
        console.log(param.firstName);
    };
    Der.prototype.over = function (t) {
        switch (typeof t) {
            case 'number':
                console.log(typeof t);
                break;
            case 'string':
                console.log(typeof t);
                break;
            case 'object':
                switch (t.constructor.name) {
                    case 'User':
                        console.log(t.constructor.name);
                        console.log(t instanceof User);
                        break;
                }
                break;
        }
    };
    return Der;
}(Abs));
var der1 = new Der();
der1.show({ firstName: 'Test' });
der1.template();
der1.over(1);
der1.over('test');
der1.over(defUser);
