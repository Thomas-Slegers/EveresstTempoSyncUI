import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'everesstTempoSyncUI';
    isCollapsed:boolean;

    constructor() {
        this.title = 'EveresstTempoSyncUI';
        this.isCollapsed = true
    }

    getUrl(){
        return location.pathname;
    }
}
