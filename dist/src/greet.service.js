import { Injectable } from '@angular/core';
export var GreetService = (function () {
    function GreetService() {
        this.message = "Hi!";
    }
    GreetService.prototype.changeMessage = function (msj) {
        console.log(this.message);
        return this.message = msj;
    };
    GreetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GreetService.ctorParameters = function () { return []; };
    return GreetService;
}());
//# sourceMappingURL=greet.service.js.map