(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.greet = global.greet || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var GreetService = (function () {
    function GreetService() {
        this.message = "Hi!";
    }
    GreetService.prototype.changeMessage = function (msj) {
        console.log(this.message);
        return this.message = msj;
    };
    GreetService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    GreetService.ctorParameters = function () { return []; };
    return GreetService;
}());

function GreetComponentFactory() {
    return new GreetService();
}

var GreetModule = (function () {
    function GreetModule() {
    }
    GreetModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [
                        {
                            provide: GreetService,
                            useFactory: GreetComponentFactory
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    GreetModule.ctorParameters = function () { return []; };
    return GreetModule;
}());

exports.GreetModule = GreetModule;
exports.GreetService = GreetService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
