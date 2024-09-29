import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgOptimizedImage} from '@angular/common';
import {AppHeaderComponent} from './app-header.component';

const APP_IMAGE_SRC = 'https://fusion.ironsrc.net/assets/images/v4/app_mock/Poly_Dating.png';
const APP_NAME = 'Poly Dating';
const APP_PLATFORM = 'android';
const APP_KEY = '12345678';


describe('AppHeaderComponent', () => {
    let component: AppHeaderComponent;
    let fixture: ComponentFixture<AppHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppHeaderComponent, NgOptimizedImage]
        }).compileComponents();

        fixture = TestBed.createComponent(AppHeaderComponent);
        component = fixture.componentInstance;
        component.appImageSrc = APP_IMAGE_SRC;
        component.appName = APP_NAME;
        component.platform = APP_PLATFORM;
        component.appKey = APP_KEY;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has wrapper element size medium by default', () => {
        const wrapper = fixture.nativeElement.querySelector('.fu-app-header-wrapper');
        expect(wrapper).toBeTruthy();
        expect(wrapper.classList.contains('fu-size-medium')).toBeTruthy();
    });

    it('should has application image', () => {
        const appImage = fixture.nativeElement.querySelector('.fu-app-header-image');
        expect(appImage).toBeTruthy();
        expect(appImage.src).toBe(APP_IMAGE_SRC);
    });

    it('should has platform icon', () => {
        const appPlatform = fixture.nativeElement.querySelector('.fu-app-header-platform');
        expect(appPlatform).toBeTruthy();
        expect(appPlatform.classList.contains(APP_PLATFORM)).toBeTruthy();
    });

    it('should has app name', () => {
        const appContent = fixture.nativeElement.querySelector('.fu-app-header-content');
        expect(appContent).toBeTruthy();
        expect(appContent.querySelector('.fu-app-header-name').textContent).toBe(APP_NAME);
    });

    it('should has app key with copy to clipboard icon', () => {
        const appKey = fixture.nativeElement.querySelector('fusion-inline-copy');
        expect(appKey.querySelector('.fu-inline-copy-text').textContent).toBe(APP_KEY);
        expect(appKey.querySelector('.fu-inline-copy-icon').classList.contains('copy')).toBeTruthy();
    });
});
