import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import 'prismjs/prism.js';
declare var Prism;

@Component({
    selector: 'fusion-code-block',
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CodeBlockComponent implements OnInit {
    @Input() title: string;
    @Input() lang: string;
    @Input() code: string;

    ngOnInit() {
        switch (this.lang) {
            case 'html':
                this.code = Prism.highlight(this.code, Prism.languages.html);
                break;
            case 'js':
                this.code = Prism.highlight(this.code, Prism.languages.javascript);
                break;
        }
    }
}
