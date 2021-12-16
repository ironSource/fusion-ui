import {ChangeDetectorRef} from '@angular/core';
import {NATIVE_TOKEN} from './native-token';

export function detectChangesDecorator(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args) {
        const injector = this.injector;
        if (!injector) {
            throw new Error('You must provide Injector as inject in component constructor');
        }
        const result = method.apply(this, args);
        if (injector.get(NATIVE_TOKEN, null)) {
            (injector.get(ChangeDetectorRef) as ChangeDetectorRef).detectChanges();
        }
        return result;
    };

    return propertyDescriptor;
}
