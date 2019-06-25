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
var Context = /** @class */ (function () {
    function Context(state) {
        this.change(state);
    }
    Context.prototype.change = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    Context.prototype.redirect = function () {
        this.state.redirect();
    };
    return Context;
}());
var State = /** @class */ (function () {
    function State() {
    }
    ;
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Video';
        return _this;
    }
    Video.prototype.redirect = function () {
        console.log('/RedirectToVideo');
    };
    return Video;
}(State));
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Course';
        return _this;
    }
    Course.prototype.redirect = function () {
        console.log('/RedirectToCourse');
    };
    return Course;
}(State));
var context = new Context(new Video());
context.redirect();
context.change(new Course());
context.redirect();
