import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `
        Heyaa! I'm <span [style.color]="inputElement.value === 'yes' ? 'orange':''">{{name}}</span> and this is my first angular2 app. <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
        <br><br>
        Is it awesome?
        <input type="text" required #inputElement (keyup)="0">
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered</button>
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name="Manoj";
}
