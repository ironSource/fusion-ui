# FusionUI coding style guide

## Background
* Before writing to components, please follow the guidelines in this file
* Everything written here are the bible and must be implement in your code
* Please follow * See [Angular coding style guide](https://angular.io/guide/styleguide) before reading this style guide

## Folder Structure Conventions
* Use Angular CLI component to create component
* Each component should wrap into a module, which will be in the same folder
* Create spec test file for component: COMPONENT_NAME.spec.ts
* Create related services files for component: COMPONENT_NAME.service.ts
* Create entities (Interfaces & ENUM's) file for component: COMPONENT_NAME.entities.ts
* Create utils (consts & helper functions) file for component: COMPONENT_NAME.utils.ts
* Component folder content example: 
    * COMPONENT_NAME.module.ts
    * COMPONENT_NAME.component.ts
    * COMPONENT_NAME.component.html
    * COMPONENT_NAME.component.scss
    * COMPONENT_NAME.component.spec.ts
    * COMPONENT_NAME.service.ts
    * COMPONENT_NAME.entities.ts
    * COMPONENT_NAME.utils.ts

## Component Class Member Order
1. Inputs
2. Inputs with setter & getter
3. Outputs
4. Public members
5. Public members with setter & getter
6. Private members
7. Private members with setter & getter
8. ViewChild & ViewChildren
9. HostBinding
10. HostListener
11. Constructor
12. Angular lifecycle functions
13. Public methods
14. ControlValueAccessor functions
15. Private methods

## Component Conventions

### Naming
* Component Name: PascalCase
* Class members and class functions: camelCase
* Class member with setter / getter  _camelCase 
* Underscore should use only when property has setter / getter
* Observable: camelCase with $ suffix
* Output without 'on' prefix 

### Constructor
* No need class modifier when using injected services only in constructor   
* No class members initialization in constructor
* Only super(args) is allowed - in most cases

### Types
* Multiple types not allowed
* Custom types should be with type 'type' - never hard coded

### Functions
* One object argument allowed with interface to determine types
* Each repeated code block should be moved to component utils file as function
* Maximum lines in function: 7
* Always use pure functions without side effects - not manipulating class members

### Angular Lifecycle functions
* onInit function: should have only listeners creation
* onInit function: Never initialize @Input - create setter instead
* AfterViewInit: use only when need to work on dom elements
* onDestory: unsubscribe destory$ - implement in extended class
* onChanges & afterViewChecked: do not use - use setter instead

### RxJS
* Subscribe only if it's mandatory
* Multiple subscriptions on the same observable then use shareReply
* Use takeUntil when subscribe
* Use fromEvent when event trigger many times

### Form Element Component
* Must add: 
  ```
  providers: [
          {
              provide: NG_VALUE_ACCESSOR,
              useExisting: forwardRef(() => ExampleComponent),
              multi: true
          }
      ]
  ```
* Must add validator when component has multiple control values 
* Mandatory functions: writeValue, registerOnTouched, setDisabledState, registerOnChange
* registerOnChange: `valueChange.pipe(TakeUntil(this.onDestroy$)).subscribe(fn)` instead of `this.propagateChange = fn;`

### Template
* Do [class.className]="boolean" instead of [ngClass]="obj"
* Do [style.styleName]="value" instead of [ngStyle]="obj"
* Separate content to ng-container/ng-template or sub components
* All ng-template's should be in the bottom of file:
```
    <ng-container [ngTemplateOutlet]="templateRef || default" [ngTemplateOutletContext]="{prop:1}"></ng-container>

    <ng-template #default let-prop="prop">
        <span [innerText]="prop" ></span>
    </ng-template>
```
* All ng-template's should be in the highest tree level - not under any element
  

### CSS
* Wrap CSS with :host
* All component classes should be with the prefix: 'fu-'
* All component classes should be kebab-case

### General
* Never manipulate @Input property - should create new private member instead
* Mandatory to use: `changeDetection: ChangeDetectionStrategy.OnPush`
* Hard coded string should be store as const - Never assign string text to variable which is not const;
* Avoid using Renderer when not needed
* Use question mark (?) when accessing recursive object keys
* When using repeated directive & components, do not use @Output & Events and use in a singleton service or move to higher level component


## Unit Tests
##### !! Do not check integration with other components !! 
### External Behaviour 
* @Input - trigger one by one and expect changes in DOM
* @Output - trigger one by one from DOM and validate behaviour
* Form Control - trigger one by one and expect changes in DOM
### Internal Behaviour 
* Functions - trigger component functions and expect changes
* Events - trigger DOM events and check that the component reacts with expected logic 
