import { NgModule } from '@angular/core';
import { GreetService } from './greet.service';
 
export function GreetComponentFactory() {
    return new GreetService();
};
 
@NgModule({
    providers: [
        {
            provide: GreetService,
            useFactory:GreetComponentFactory
        }
    ]
})
 
export class GreetModule {}