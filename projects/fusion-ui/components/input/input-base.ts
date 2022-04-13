import {InputParameters} from '@ironsource/fusion-ui/components/input/input-parameters';
import {AfterViewInit, Directive, ElementRef, EventEmitter, Injector, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {CONFIG_INPUT_BY_UI_STYLE, InputConfigByStyle} from './input.component.config';
import {InputOptions, isBoolean, isNullOrUndefined, isString, StyleVersion, VersionService} from '@ironsource/fusion-ui';
import {InputConfiguration} from './input-entities';
import {ENTER_KEY_CODE, ESCAPE_KEY_CODE, INPUT_DEFAULT_CONFIGURATION, SPECIAL_KEYS} from './input-utils';
import {filter, map, takeUntil, tap} from 'rxjs/operators';

@Directive()
export abstract class InputBase {}
