import {Directive, Input, OnInit} from '@angular/core';
import {MobileOrientation} from './mobile-orientation.enum';
import {DEVICE_ORIENTATION, MobilePreviewerComponentConfiguration} from './mobile-previewer-component-configuration';
import {CapitalizePipe} from '@ironsource/fusion-ui/pipes/string';

@Directive()
export abstract class MobilePreviewerBaseComponent implements OnInit {
    _configurations: MobilePreviewerComponentConfiguration = {component: {type: null}};
    @Input()
    set configurations(configurations: MobilePreviewerComponentConfiguration) {
        this._configurations = configurations;
        switch (this._configurations.orientation) {
            case MobileOrientation.PORTRAIT:
                this.devices = DEVICE_ORIENTATION.filter(device => device.includes('portrait'));
                break;
            case MobileOrientation.LANDSCAPE:
                this.devices = DEVICE_ORIENTATION.filter(device => device.includes('landscape'));
                break;
            case MobileOrientation.ALL:
            default:
                this.devices = DEVICE_ORIENTATION;
                break;
        }
    }

    get configurations(): MobilePreviewerComponentConfiguration {
        return this._configurations;
    }

    _selectedDevice = '';
    refresh = true;
    devices: string[];

    public get selectedDevice() {
        return this._capitalizePipe.transform(this._selectedDevice.replace('-', ' '));
    }

    public get height() {
        let height: number;
        switch (this._selectedDevice) {
            case 'phone-portrait':
                height = 568;
                break;
            case 'phone-landscape':
                height = 320;
                break;
            case 'tablet-portrait':
                height = 614;
                break;
            case 'tablet-landscape':
                height = 461;
                break;
        }

        return height;
    }

    public get width() {
        let width: number;
        switch (this._selectedDevice) {
            case 'phone-portrait':
                width = 320;
                break;
            case 'phone-landscape':
                width = 568;
                break;
            case 'tablet-portrait':
                width = 461;
                break;
            case 'tablet-landscape':
                width = 614;
                break;
        }

        return width;
    }

    constructor(private _capitalizePipe: CapitalizePipe) {}

    ngOnInit() {
        this._selectedDevice = this.configurations.orientation === MobileOrientation.PORTRAIT ? 'phone-portrait' : 'phone-landscape';
    }

    isDeviceSelected(device: string) {
        return this._selectedDevice === device;
    }

    isDeviceLandscape(device: string) {
        return device.includes('landscape');
    }

    selectDevice(device: string) {
        this._selectedDevice = device;
        this.refresh = !this.refresh;
    }
}
