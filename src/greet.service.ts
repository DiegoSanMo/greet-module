import { Inject, Injectable } from '@angular/core';

@Injectable()
export class GreetService {
    message: string = "Hi!";
    constructor() { }

    changeMessage( msj:string ) {
        console.log(this.message);
        return this.message = msj;
    }
}