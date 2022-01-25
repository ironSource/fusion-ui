import {Injectable, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustHtml, ɵSafeHtml} from '@angular/core';

export declare interface SafeHtml extends ɵSafeHtml {}

@Injectable({
    providedIn: 'root'
})
export class DomSanitizerService {
    bypassSecurityTrustStyle = ɵbypassSanitizationTrustStyle;
    bypassSecurityTrustHtml = ɵbypassSanitizationTrustHtml;
}
