import { Component } from '@angular/core';
import { Routes} from '@angular/router';

@Component({
    selector: 'first-page',
    template: ` <h1>First Page</h1>
    <form #myForm="ngForm">
    <app-counter-input name="counter" ngModel></app-counter-input>
</form>

{{myForm.value | json }}`
})
export class FirstPage {}

@Component({
    selector: 'first-child-page',
    template: `<h4>First Child Page</h4>`
})
export class FirstChildPage {}

@Component({
    selector: 'second-child-page',
    template: `<h2>Second Child Page</h2>`
})
export class SecondChildPage {}

@Component({
    selector: 'second-page',
    template: `<h1>Second Page</h1>`
})
export class SecondPage {}

export const routes: Routes = [
    { path: 'first', component: FirstPage, children: [
        { path: '', redirectTo: 'child', pathMatch: 'full' },
        { path: 'child', component: FirstChildPage}
    ]},
    { path: '', redirectTo: 'first', pathMatch: 'full'}
];