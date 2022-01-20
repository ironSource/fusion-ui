import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ToastComponent} from './toast.component';
import {IconModule} from '../icon/icon.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {LogService} from '../../../services/log/log.service';
import {ToastEntity, ToastLocation} from './toast.entity';

const TOAST_MOCK_DATA: {[key: string]: ToastEntity} = {
    successToastConfig: {
        type: 'success',
        text: 'Well done! You successfully read this'
    },
    alertToastConfig: {
        type: 'alert',
        text: 'This alert needs your attention'
    },
    errorToastConfig: {
        type: 'error',
        text: 'Ops. Something wrong!'
    },
    warningToastConfig: {
        type: 'warning',
        text: 'Better check yourself, you’re not looking good'
    },
    noTypeToastConfig: {
        text: 'No type, icon or image set for this toast.'
    },
    customIconToastConfig: {
        icon: 'v2/lamp',
        text: 'Custom icon'
    },
    customImageToastConfig: {
        image: 'http://example.image.com/image.png',
        text: 'Custom icon image'
    }
};

describe('ToastComponent', () => {
    let component: ToastComponent;
    let fixture: ComponentFixture<ToastComponent>;

    const setComponent = (toastConfig: ToastEntity) => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        component.configuration = toastConfig;
        fixture.detectChanges();
    };

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ToastComponent],
                imports: [IconModule, DynamicComponentsModule],
                providers: [LogService]
            }).compileComponents();
        })
    );

    it('should create', () => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('Must render base DOM Elements', () => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        // has base holder
        const toastBaseEl = fixture.debugElement.query(By.css('.fu-toast'));
        expect(toastBaseEl).toBeTruthy();
        // no toast type icon
        expect(fixture.debugElement.query(By.css('fusion-icon.fu-toast-icon-typed'))).not.toBeTruthy();
        // has empty content content
        const toastContentEl = toastBaseEl.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe('');
        // has close button holder
        const toastButtonCloseHolderElement = toastBaseEl.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
        expect(toastCloseButtonIcon.nativeElement.getAttribute('name')).toBe('close');
    });

    it('Must render toast type "success" icon and message', () => {
        setComponent(TOAST_MOCK_DATA.successToastConfig);

        const assertType = TOAST_MOCK_DATA.successToastConfig.type;
        const assertMessage = TOAST_MOCK_DATA.successToastConfig.text;
        const assertTypeIconClass = 'check';

        // toast type icon holder
        expect(fixture.debugElement.query(By.css('.fu-toast-icon-holder'))).toBeTruthy();
        const typedIconHolder = fixture.debugElement.query(By.css('.fu-toast-icon-typed'));
        expect(typedIconHolder).toBeTruthy();
        expect(typedIconHolder.nativeElement.classList).toContain(assertType);
        // toast type icon
        const toastTypeIconEl = typedIconHolder.query(By.css('fusion-icon'));
        expect(toastTypeIconEl).toBeTruthy();
        expect(toastTypeIconEl.nativeElement.classList).toContain(assertTypeIconClass);

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render toast type "alert" icon and message', () => {
        setComponent(TOAST_MOCK_DATA.alertToastConfig);

        const assertType = TOAST_MOCK_DATA.alertToastConfig.type;
        const assertMessage = TOAST_MOCK_DATA.alertToastConfig.text;
        const assertTypeIconClass = 'bullhorn';

        // toast type icon holder
        expect(fixture.debugElement.query(By.css('.fu-toast-icon-holder'))).toBeTruthy();
        const typedIconHolder = fixture.debugElement.query(By.css('.fu-toast-icon-typed'));
        expect(typedIconHolder).toBeTruthy();
        expect(typedIconHolder.nativeElement.classList).toContain(assertType);
        // toast type icon
        const toastTypeIconEl = typedIconHolder.query(By.css('fusion-icon'));
        expect(toastTypeIconEl).toBeTruthy();
        expect(toastTypeIconEl.nativeElement.classList).toContain(assertTypeIconClass);

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render toast type "error" icon and message', () => {
        setComponent(TOAST_MOCK_DATA.errorToastConfig);

        const assertType = TOAST_MOCK_DATA.errorToastConfig.type;
        const assertMessage = TOAST_MOCK_DATA.errorToastConfig.text;
        const assertTypeIconClass = 'warning-note';

        // toast type icon holder
        expect(fixture.debugElement.query(By.css('.fu-toast-icon-holder'))).toBeTruthy();
        const typedIconHolder = fixture.debugElement.query(By.css('.fu-toast-icon-typed'));
        expect(typedIconHolder).toBeTruthy();
        expect(typedIconHolder.nativeElement.classList).toContain(assertType);
        // toast type icon
        const toastTypeIconEl = typedIconHolder.query(By.css('fusion-icon'));
        expect(toastTypeIconEl).toBeTruthy();
        expect(toastTypeIconEl.nativeElement.classList).toContain(assertTypeIconClass);

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render toast type "warnind" icon and message', () => {
        setComponent(TOAST_MOCK_DATA.warningToastConfig);

        const assertType = TOAST_MOCK_DATA.warningToastConfig.type;
        const assertMessage = TOAST_MOCK_DATA.warningToastConfig.text;
        const assertTypeIconClass = 'warning-note';

        // toast type icon holder
        expect(fixture.debugElement.query(By.css('.fu-toast-icon-holder'))).toBeTruthy();
        const typedIconHolder = fixture.debugElement.query(By.css('.fu-toast-icon-typed'));
        expect(typedIconHolder).toBeTruthy();
        expect(typedIconHolder.nativeElement.classList).toContain(assertType);
        // toast type icon
        const toastTypeIconEl = typedIconHolder.query(By.css('fusion-icon'));
        expect(toastTypeIconEl).toBeTruthy();
        expect(toastTypeIconEl.nativeElement.classList).toContain(assertTypeIconClass);

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render toast without type set', () => {
        setComponent(TOAST_MOCK_DATA.noTypeToastConfig);

        const assertMessage = TOAST_MOCK_DATA.noTypeToastConfig.text;

        const toastBaseEl = fixture.debugElement.query(By.css('.fu-toast'));
        expect(toastBaseEl.nativeElement.classList).toContain('fu-toast-without-icon');

        // toast type icon holder musty not exist
        expect(fixture.debugElement.query(By.css('.fu-toast-icon-holder'))).not.toBeTruthy();

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render toast with custom icon and message', () => {
        setComponent(TOAST_MOCK_DATA.customIconToastConfig);

        const assertMessage = TOAST_MOCK_DATA.customIconToastConfig.text;
        const assertTypeIconClass = TOAST_MOCK_DATA.customIconToastConfig.icon.replace('/', '-');

        // toast type icon holder
        expect(fixture.debugElement.query(By.css('.fu-toast-icon-holder'))).toBeTruthy();
        const typedIconHolder = fixture.debugElement.query(By.css('.fu-toast-icon-typed'));
        expect(typedIconHolder).toBeTruthy();

        // toast type icon
        const toastTypeIconEl = typedIconHolder.query(By.css('fusion-icon'));
        expect(toastTypeIconEl).toBeTruthy();
        expect(toastTypeIconEl.nativeElement.classList).toContain(assertTypeIconClass);

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render toast with custom image and message', () => {
        setComponent(TOAST_MOCK_DATA.customImageToastConfig);

        const assertMessage = TOAST_MOCK_DATA.customImageToastConfig.text;
        const assertCustomImage = TOAST_MOCK_DATA.customImageToastConfig.image;

        const toastBaseEl = fixture.debugElement.query(By.css('.fu-toast'));
        expect(toastBaseEl).toBeTruthy();

        // toast icon holder
        const toastIconHolder = fixture.debugElement.query(By.css('.fu-toast-icon-holder'));
        expect(toastIconHolder).toBeTruthy();
        // toast type icon must not exist
        const typedIconHolder = toastIconHolder.query(By.css('.fu-toast-icon-typed'));
        expect(typedIconHolder).not.toBeTruthy();
        // toast custom image
        const toastCustomImageEl = toastIconHolder.query(By.css('.fu-toast-image'));
        expect(toastCustomImageEl).toBeTruthy();
        // custom image url must be as background
        expect(toastCustomImageEl.nativeElement.style.backgroundImage).toContain(assertCustomImage);

        // content
        const toastContentEl = fixture.debugElement.query(By.css('.fu-toast-content'));
        expect(toastContentEl).toBeTruthy();
        expect(toastContentEl.nativeElement.innerText).toBe(assertMessage);

        // close button
        const toastButtonCloseHolderElement = fixture.debugElement.query(By.css('.fu-toast-close-button-holder'));
        expect(toastButtonCloseHolderElement).toBeTruthy();
        // has close button icon
        const toastCloseButtonIcon = toastButtonCloseHolderElement.query(By.css('fusion-icon'));
        expect(toastCloseButtonIcon).toBeTruthy();
        expect(toastCloseButtonIcon.nativeElement.classList).toContain('fu-toast-close-button');
    });

    it('Must render Toast with "top-left" location', () => {
        const toastLocation: ToastLocation = 'top-left';
        setComponent({...TOAST_MOCK_DATA.successToastConfig, location: toastLocation});

        // has location class
        const toastBaseEl = fixture.debugElement.query(By.css(`.${toastLocation}`));
        expect(toastBaseEl).toBeTruthy();
    });

    it('Must render Toast with "top-center" location', () => {
        const toastLocation: ToastLocation = 'top-center';
        setComponent({...TOAST_MOCK_DATA.successToastConfig, location: toastLocation});

        // has location class
        const toastBaseEl = fixture.debugElement.query(By.css(`.${toastLocation}`));
        expect(toastBaseEl).toBeTruthy();
    });

    it('Must render Toast with "top-right" location', () => {
        const toastLocation: ToastLocation = 'top-right';
        setComponent({...TOAST_MOCK_DATA.successToastConfig, location: toastLocation});

        // has location class
        const toastBaseEl = fixture.debugElement.query(By.css(`.${toastLocation}`));
        expect(toastBaseEl).toBeTruthy();
    });

    it('Must render Toast with "bottom-left" location', () => {
        const toastLocation: ToastLocation = 'bottom-left';
        setComponent({...TOAST_MOCK_DATA.successToastConfig, location: toastLocation});

        // has location class
        const toastBaseEl = fixture.debugElement.query(By.css(`.${toastLocation}`));
        expect(toastBaseEl).toBeTruthy();
    });

    it('Must render Toast with "bottom-center" location', () => {
        const toastLocation: ToastLocation = 'bottom-center';
        setComponent({...TOAST_MOCK_DATA.successToastConfig, location: toastLocation});

        // has location class
        const toastBaseEl = fixture.debugElement.query(By.css(`.${toastLocation}`));
        expect(toastBaseEl).toBeTruthy();
    });

    it('Must render Toast with "bottom-right" location', () => {
        const toastLocation: ToastLocation = 'bottom-right';
        setComponent({...TOAST_MOCK_DATA.successToastConfig, location: toastLocation});
        // has location class
        const toastBaseEl = fixture.debugElement.query(By.css(`.${toastLocation}`));
        expect(toastBaseEl).toBeTruthy();
    });

    it('Must emit "close" event on close icon clicked', () => {
        setComponent({...TOAST_MOCK_DATA.successToastConfig, ...{location: 'top-right'}});
        spyOn(component.toastClosed, 'emit');

        const toastBaseEl = fixture.debugElement.query(By.css(`fusion-icon.fu-toast-close-button`));
        expect(toastBaseEl).toBeTruthy();
        // no transition class before click
        expect(component.toastView.nativeElement.classList).not.toContain('fu-slide-out-right');

        toastBaseEl.nativeElement.click();
        // must be transition class before click
        expect(component.toastView.nativeElement.classList).toContain('fu-slide-out-right');
        // emulate end of animation for check ... fromEvent(this.toastView.nativeElement, 'animationend')
        component.toastView.nativeElement.dispatchEvent(new Event('animationend'));

        expect(component.toastClosed.emit).toHaveBeenCalled();
    });
});
