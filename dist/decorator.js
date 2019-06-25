"use strict";
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.show = function () {
        console.log('base');
    };
    return Base;
}());
var Decorator = /** @class */ (function () {
    function Decorator(base) {
        this.base = base;
    }
    Decorator.prototype.show = function () {
        console.log('decorator');
        this.base.show();
    };
    return Decorator;
}());
var NewDecorator = /** @class */ (function () {
    function NewDecorator(base) {
        this.base = base;
    }
    NewDecorator.prototype.show = function () {
        console.log('newdecorator');
        this.base.show();
    };
    return NewDecorator;
}());
var dec = new Decorator(new NewDecorator(new Decorator(new Base())));
dec.show();
