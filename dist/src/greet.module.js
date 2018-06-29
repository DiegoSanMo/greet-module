import { NgModule } from '@angular/core';
import { GreetService } from './greet.service';
export function GreetComponentFactory() {
    return new GreetService();
}
;
export var GreetModule = (function () {
    function GreetModule() {
    }
    GreetModule.decorators = [
        { type: NgModule, args: [{
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
//# sourceMappingURL=greet.module.js.map