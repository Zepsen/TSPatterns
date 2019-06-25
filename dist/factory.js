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
var SimpleUser = /** @class */ (function () {
    function SimpleUser() {
        this.role = 'Simple';
    }
    return SimpleUser;
}());
var SupportUser = /** @class */ (function () {
    function SupportUser() {
        this.role = 'Support';
    }
    return SupportUser;
}());
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.build = function () {
        var user = this.create();
        console.log(user.role);
    };
    return Creator;
}());
var UserFactory = /** @class */ (function (_super) {
    __extends(UserFactory, _super);
    function UserFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserFactory.prototype.create = function () {
        return new SimpleUser();
    };
    return UserFactory;
}(Creator));
var SupportFactory = /** @class */ (function (_super) {
    __extends(SupportFactory, _super);
    function SupportFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SupportFactory.prototype.create = function () {
        return new SupportUser();
    };
    return SupportFactory;
}(Creator));
var Factory = /** @class */ (function () {
    function Factory() {
        this.creator = new SupportFactory();
    }
    Factory.prototype.create = function () {
        this.creator.build();
    };
    Factory.prototype.changer = function (creator) {
        this.creator = creator;
    };
    return Factory;
}());
var creator = new Factory();
creator.create();
creator.create();
creator.changer(new UserFactory);
creator.create();
creator.changer(new SupportFactory);
creator.create();
