import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
        Heyaa! I'm {{name}} and this is my first angular2 app. <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
        <br><br>
        Is it awesome?
        <input type="text" required #inputElement (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name="Manoj";
}
