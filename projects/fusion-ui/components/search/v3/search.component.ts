import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'fusion-search',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
