"use strict";
var Origin = /** @class */ (function () {
    function Origin(state) {
        this.state = {
            name: 'def',
            age: 1
        };
        this.state = state;
    }
    Origin.prototype.change = function (str) {
        this.state.name = str;
        this.state.age++;
    };
    Origin.prototype.show = function () {
        console.log(this.state);
    };
    Origin.prototype.save = function () {
        return new OriginMemento({ name: this.state.name, age: this.state.age });
    };
    Origin.prototype.restore = function (memento) {
        this.state = memento.getState();
    };
    return Origin;
}());
var OriginMemento = /** @class */ (function () {
    function OriginMemento(state) {
        this.state = state;
    }
    OriginMemento.prototype.getState = function () {
        return this.state;
    };
    return OriginMemento;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(original) {
        this.original = original;
        this.mementos = [];
        this.original = original;
    }
    Caretaker.prototype.backup = function () {
        this.mementos.push(this.original.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        this.original.restore(memento);
    };
    Caretaker.prototype.show = function () {
        this.mementos.forEach(function (i) { return console.log(i.getState()); });
    };
    return Caretaker;
}());
var originator = new Origin({ name: 'Origin', age: 11 });
var caretaker = new Caretaker(originator);
caretaker.backup();
originator.show();
originator.change('new value');
caretaker.backup();
originator.show();
originator.change('test');
caretaker.backup();
originator.show();
caretaker.show();
originator.change('test1231231');
originator.show();
caretaker.undo();
originator.show();
caretaker.undo();
originator.show();
caretaker.undo();
originator.show();
