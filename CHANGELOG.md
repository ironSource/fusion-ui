# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/ironSource/fusion-ui/compare/v3.0.0-rc.68...v3.0.0) (2022-06-27)

## [3.0.0-rc.27](https://github.com/ironSource/fusion-ui/compare/v3.0.0-rc.26...v3.0.0-rc.27) (2022-06-12)

### Bug Fixes

* **release/3.x.x:** fix input helper text
* **release/3.x.x:** fixed input font-size and color
* **release/3.x.x:** fixed input validation icon size
* **release/3.x.x:** fixed border-bottom for fusion-input in state focus ([6135427](https://github.com/ironSource/fusion-ui/commit/6135427da79f5703e2b9a118af01371dd90462fa))

## [3.0.0-rc.8](https://github.com/ironSource/fusion-ui/compare/v3.0.0-rc.7...v3.0.0-rc.8) (2022-05-29)


### Features
* **fu-400:** add ChipFilter and ChipFilters component with v3 style ([a1c107d](https://github.com/ironSource/fusion-ui/commit/a1c107d99058a22d4f80cc7008dd866be686332f))
    * ChipFilters component expose two events: 
        * onSelect - when chip is selected return {id: number; value: any; isSelected: boolean}
        * onRemoveSelection - when chip selection canceled return {id: number; isSelected: boolean}
    * ChipFilters has three inputs that relate to a dynamic filters:
        * isSearch - boolean type to determine if the dropdown in AddFilter chip will have a search bar
        * addFilterOptions - DropdownOption[] type to pass the filters options.
        * addFiltersTitle - String type to add title bar in the dropdown.
    * ChipFilter has three inputs:
        * configuration -
            ```
            export interface ChipFilterComponentConfigurations {
                id: number | string;
                disabled?: boolean;
                mode?: ChipFilterMode;
                close?: boolean;
            }
    
            export type ChipFilterMode = 'static' | 'dynamic' | 'add';
          ```
        * isSelected - boolean type to pre-select chip component with no 'filter-element' element class under it.
        * isVisible - boolean type to determine visibility of chip.
    * Usage:
        ```html
      <fusion-chip-filters [isSearch]="true" [addFiltersTitle]="'Countries'" [addFilterOptions]="optionsFilter" (onSelect)="chipChanged($event)" (onRemoveSelection)="removeChip($event)">
            <fusion-chip-filter [configuration]="{ id: 2, mode: 'dynamic' }">
                <div class="fu-chip-content">{{ value }}</div>
                <div class="filter-element">
                    <fusion-daterange [formControl]="formControl"> </fusion-daterange>
                </div>
            </fusion-chip-filter>
      </fusion-chip-filters>
      ```
* **fu-406:** added new style version V3 to dropdown v3 ([0198950](https://github.com/ironSource/fusion-ui/commit/01989506c677c03298fe3b79dbb48db0502c9991))
* **fu-406:** new input props added to dropdown v3
    - add input 'readonly: boolean' (with style)
    - add input 'helper: string' (with style)
* **fu-406:** added new feature 'optionCloseIcon: boolean' to dropdown v3
    - if set as true, in options will show "close" icon, by click will be emitted event "optionCloseIconClicked" with option as argument

* **fu-406:** fixed truncate in flexbox
    - add new extend in v3 _vars.scss '%truncate-flex-child' for truncate text in flex child element example:
    ```
    .flex-child{
        @extend %truncate-flex-child;
    }
    ```
* **FU-407:** add new style guide v3 to switcher component ([aaea5a0](https://github.com/ironSource/fusion-ui/commit/aaea5a04f9b241eb287e87c740db827a00da1963))

## [3.0.0-rc.7](https://github.com/ironSource/fusion-ui/compare/v3.0.0-rc.6...v3.0.0-rc.7) (2022-05-19)


### Features

* **fu-391:** add tooltip new structure support v1 v2 and v3 with new implementation on v3 ([1789b0b](https://github.com/ironSource/fusion-ui/commit/1789b0b0367f37af9a45a3fe70155ad8b712ca50))
* **fu-397:** V3 Daterange and Datepicker components ([#59](https://github.com/ironSource/fusion-ui/issues/59)) ([ed33be4](https://github.com/ironSource/fusion-ui/commit/ed33be45e8356a48496827d54f263ff598ffb3be))
    * Datepicker V3:
    ```html
    <fusion-datepicker [minDate]="daterangeMinDate" [maxDate]="daterangeMaxDate" [formControl]="fcDatePicker" [options]="datepickerOptions"></fusion-datepicker>
    ```  
    ```
    // fcDatePicker - FormControl with DatepickerSelection

    interface DatepickerSelection {
        date?: Date;
    }
  
    daterangeMinDate: Date;
    daterangeMaxDate: Date;

    datepickerOptions {
        format?: string;
        placeholder?: string;
        allowFutureSelection?: boolean;
    }
    ```
    * Daterange
      **In case no presets - set in options `presets: []` instead `presets: false`  **
    ```
    daterangeOptions = {
        presets: []
        ....
    };
    ```
    ```
    interface DaterangeOptions {
        format?: string;
        presets?: DaterangeCustomPreset[] | DaterangePresets[];
        placeholder?: string;
        overlayAlignPosition?: 'left' | 'right';
        allowFutureSelection?: boolean;
        maxDaysInSelectedRange?: number;
    }
    ```

* **fu-402** added possibility use custom presets in daterange component
    * Example:   
    ```html
    <fusion-daterange [formControl]="daterangeDates" [options]="daterangeOptions"></fusion-daterange>
    ```
    ```
         getCurWeek = () => {
            let curr = new Date();
            let day = curr.getDay();
            let firstday = new Date(curr.getTime() - 60*60*24* day*1000);
            let lastday = new Date(firstday.getTime() + 60 * 60 *24 * 6 * 1000);
            return {
                startDate: firstday,
                endDate: lastday
            }
        }
    
        customDateRangePresets: DaterangeCustomPreset[] = [
            {
                label: 'Last 5 days',
                startDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() - 4)),
                endDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate()))
            },
            {
                label: 'Last 15 days',
                startDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() - 14)),
                endDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate()))
            },
            {
                label: 'Next 3 days',
                startDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate()+1)),
                endDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() + 3))
            },
            {
                label: 'Current Week',
                ...this.getCurWeek()
            }
    
        ]
    
        
        daterangeOptions: DaterangeOptions = {
            presets: this.customDateRangePresets
        };
    ```
    ```
    interface DaterangeCustomPreset {
        label: string;
        startDate: Date;
        endDate: Date;
    }
    ```
* **fu-404**: added maxDaysInSelectedRange to teh daterange component
    * Daterange component new feature - Maximum Days In Selected Range. Added new option property - `maxDaysInSelectedRange?: number` to the `interface DaterangeOptions`. If `maxDaysInSelectedRange` set, in case user slicked to the start date, `maxDate` will be calculated as (startDate + maxDaysInSelectedRange - 1). So user can select period with `maxDaysInSelectedRange` days amount. On click to endDate original maxDate will be restored if it will be set.
    ```
    daterangeOptions = {
        maxDaysInSelectedRange: 5
    };
    ```    

## [3.0.0-rc.6](https://github.com/ironSource/fusion-ui/compare/v3.0.0-rc.5...v3.0.0-rc.6) (2022-05-09)


### CI

* **release/3.x.x:** update CHANGELOG.md ([9f3a9ca](https://github.com/ironSource/fusion-ui/commit/9f3a9ca0f1ef12f3a48546a2aa969aac8da59aa5))

## [3.0.0-rc.5](https://github.com/ironSource/fusion-ui/compare/v2.0.3...v3.0.0-rc.5) (2022-05-09)


### Features
* **fu-390:** add modal style guide v3 and change folder structure sub entries ([08b661b](https://github.com/ironSource/fusion-ui/commit/71b711c676777d68ee559175349fa9178c34ff6e))
  * Remove ModalService in V3 modal component, example of usage: 
    ```html
    <fusion-button (click)="onClickModalOpen()" class="stroke">Open Modal</fusion-button>
    <fusion-modal (close)="onModalClosed($event)" [isModalOpen]="openModal$ | async" [configuration]="{defaultModalState: 'close',id: 'testModal1',width: '600',headerText: 'Overlay Title'}">
        <div>
            <p>Modal content</p>
        </div>
    </fusion-modal>
    ```
  * Modal configuration object:
    ```
        interface ModalConfiguration {
              id: string;
              width?: string;
              height?: string;
              defaultModalState?: 'open' | 'close';
              error?: string;
              hasFooter?: boolean;
              headerText?: string;
              isHeaderBorder?: boolean;
              submitButton?: {
                  submitButtonClass?: string;
                  submitButtonText?: string;
                  submitButtonDisabled?: boolean;
              };
              cancelButton?: {
                  cancelButtonText?: string;
                  cancelButtonHidden?: boolean;
                  cancelButtonClass?: string;
              };
        }   
    ```
* **fu-385:** add chip component with style guide v3 and folder structure sub entries ([08b661b](https://github.com/ironSource/fusion-ui/commit/08b661b7a2d8627bb0b1d9965a7cc25040ba5038))
* **fu-393:** added new directive `fusionFileDragAndDrop` ([bfecd91](https://github.com/ironSource/fusion-ui/pull/41/commits/bfecd9151817269a2bb6cd593bfde4f8c7692484))
  * Directive `fusionFileDragAndDrop` usable for file selection by file select dialog
    or by files drag and drop to the host area.
    * Inputs:
      - "buttonId" - element ID for initial file selection dialog by click. If not provided used click on host element.
      - "disabled" - for disabling file selection. Default false
      - "accept" - input.file accept attribute (file select dialog only, not grad&&drop). Default not set
      - "multiple" - input.file multiple attribute (file select dialog only, not grad&&drop). Default false

    * On "onDragEnter" will be added CSS class `fu-file-drag-over` and on "onDragLeave" it will be removed
    * On "disabled"  will be added CSS class `fu-file-drag-drop-disabled`

    * Outputs:
      - "handleFile" - output event emitter (files: FileList)

  * Component `fusion-file-drag-and-drop`
    * Component `fusionFileDragAndDrop` used `fusionFileDragAndDrop` directive usable for native frameworks instead directive
      * Inputs:
        - "buttonId" - element ID for initial file selection dialog by click. If not provided used click on host element.
        - "disabled" - for disabling file selection. Default false
        - "accept" - `input.file` accept attribute (file select dialog only, not grad&&drop). Default not set
        - "multiple" - `input.file` multiple attribute (file select dialog only, not grad&&drop). Default false

      * Outputs:
        - "handleFile" - output event emitter (files: FileList)

  `In Angular projects recommended use directive, in native (React, Vue, VanillaJs) component - "FusionFileDragAndDrop"`


* **fu-394:** added V3 tabs ([1ae2444](https://github.com/ironSource/fusion-ui/pull/41/commits/1ae24448510b34d2253d68f0f3973c4c4ab3e2c6))
  * Example of using:
    ```html
    <fusion-tabs (selectedChange)="onTabSelected($event)">
        <fusion-tab>Offerwall</fusion-tab>
        <fusion-tab>Reworded Video</fusion-tab>
        <fusion-tab>Banner</fusion-tab>
        <fusion-tab disabled>Milwaukee</fusion-tab>
    </fusion-tabs>
    ```
    ```html
    <fusion-tab disabled="true"> <!--tab disabled-->
    <fusion-tab selected="true"> <!--tab pre-selected-->
    ```
    
    selectedChange<TabSelectedEventData>
    
    ```ts
    export interface TabSelectedEventData {
        index: number;
        tabElement: HTMLElement;
    }
    ```

### Bug Fixes

* **fu-393:** fixed import path to ModalService in native app-config.ts ([2f1cf5a](https://github.com/ironSource/fusion-ui/commit/2f1cf5ab7bcee5bf450990e608ddaf7c7b3379df))


### CI

* **release/3.x.x:** prepare for next rc ([50b03c0](https://github.com/ironSource/fusion-ui/commit/50b03c011d3610ba7c86445cfcbd0d854790c6c6))
* **release/3.x.x:** remove modal from old doc ([d8cf8bb](https://github.com/ironSource/fusion-ui/commit/d8cf8bb73a4402fc35cf2f1b761fa413eae45d05))

## [3.0.0-rc.4](https://github.com/ironSource/fusion-ui/compare/v2.0.0...v3.0.0-rc.4) (2022-04-14)


### ⚠ BREAKING CHANGES

* **FU-383:** merge iconPose and icon component inputs into one input: icon contain both values.
  inputIconData: {iconData: string | IconData; iconPose: 'left' | 'right'}
  IconData: string | {iconName: string; iconVersion: string}

### Features

* **fu-369:** add .gitattributes file to project ([2522b97](https://github.com/ironSource/fusion-ui/commit/2522b974cb010cd5b4ff868e3f66c5d136aa0c67))
* **fu-369:** add .gitattributes file to project ([4d9135a](https://github.com/ironSource/fusion-ui/commit/4d9135a1aec1263d6d61c737c1a2bd8d48672209))
* **fu-369:** add .gitattributes file to project ([ec86c4e](https://github.com/ironSource/fusion-ui/commit/ec86c4edb55dae3dbe02bdd8a2862755f04fe5e7))
* **fu-369:** add .gitattributes file to project ([964985a](https://github.com/ironSource/fusion-ui/commit/964985a4cf942ba089d2640418e4cc20b4b0b00e))
* **fu-369:** add .gitattributes file to project ([563a1ae](https://github.com/ironSource/fusion-ui/commit/563a1ae85fc7d45e7a85c2e63d501d838543c939))
* **fu-369:** add .gitattributes file to project ([8fc4c81](https://github.com/ironSource/fusion-ui/commit/8fc4c81899a66da3a27e425886fe6ef3b9004884))
* **fu-369:** add v3 icons folder and adjust icon component ([ff69a24](https://github.com/ironSource/fusion-ui/commit/ff69a24df60d38ce2815b670c19dbbc4102dbffe))
* **fu-369:** add v3 icons folder and adjust icon component ([e4451c1](https://github.com/ironSource/fusion-ui/commit/e4451c1a66c50c480bf6c46817a0ad077692f22f))
* **fu-369:** add v3 icons folder and adjust icon component ([7069fa5](https://github.com/ironSource/fusion-ui/commit/7069fa5cf67360e19ff05687fdaea00724a9140e))
* **fu-369:** fix icon version ([309080a](https://github.com/ironSource/fusion-ui/commit/309080a43f6da14f301dadea721c8034b79a669a))
* **fu-369:** fix PR ([22fef25](https://github.com/ironSource/fusion-ui/commit/22fef25944c6999169d2ca7a1e55d73dbfff42c6))
* **fu-378:** add button v3 style guide ([f992a7a](https://github.com/ironSource/fusion-ui/commit/f992a7a1ae451479fcd9a85b5f73dc91769f21a6))
* **FU-383:** style guide v3 input component ([4c1c8b8](https://github.com/ironSource/fusion-ui/commit/4c1c8b8bd06a22bebdb1fcac76145c78dbc2d7a9))

## [3.0.0-rc.4](https://github.com/ironSource/fusion-ui/compare/v2.0.0-rc.2...v3.0.0-rc.4) (2022-04-14)


### Features

* **fu-369:** add .gitattributes file to project ([2522b97](https://github.com/ironSource/fusion-ui/commit/2522b974cb010cd5b4ff868e3f66c5d136aa0c67))
* **fu-369:** add .gitattributes file to project ([4d9135a](https://github.com/ironSource/fusion-ui/commit/4d9135a1aec1263d6d61c737c1a2bd8d48672209))
* **fu-369:** add .gitattributes file to project ([ec86c4e](https://github.com/ironSource/fusion-ui/commit/ec86c4edb55dae3dbe02bdd8a2862755f04fe5e7))
* **fu-369:** add .gitattributes file to project ([964985a](https://github.com/ironSource/fusion-ui/commit/964985a4cf942ba089d2640418e4cc20b4b0b00e))
* **fu-369:** add .gitattributes file to project ([563a1ae](https://github.com/ironSource/fusion-ui/commit/563a1ae85fc7d45e7a85c2e63d501d838543c939))
* **fu-369:** add .gitattributes file to project ([8fc4c81](https://github.com/ironSource/fusion-ui/commit/8fc4c81899a66da3a27e425886fe6ef3b9004884))
* **fu-369:** add v3 icons folder and adjust icon component ([ff69a24](https://github.com/ironSource/fusion-ui/commit/ff69a24df60d38ce2815b670c19dbbc4102dbffe))
* **fu-369:** add v3 icons folder and adjust icon component ([e4451c1](https://github.com/ironSource/fusion-ui/commit/e4451c1a66c50c480bf6c46817a0ad077692f22f))
* **fu-369:** add v3 icons folder and adjust icon component ([7069fa5](https://github.com/ironSource/fusion-ui/commit/7069fa5cf67360e19ff05687fdaea00724a9140e))
* **fu-369:** fix icon version ([309080a](https://github.com/ironSource/fusion-ui/commit/309080a43f6da14f301dadea721c8034b79a669a))
* **fu-369:** fix PR ([22fef25](https://github.com/ironSource/fusion-ui/commit/22fef25944c6999169d2ca7a1e55d73dbfff42c6))

## [3.0.0-rc.3](https://github.com/ironSource/fusion-ui/compare/v3.0.0-rc.2...v3.0.0-rc.3) (2022-04-13)

### ⚠ BREAKING CHANGES

* **fu-368:** Upgrade FusionUI to Design V3

#### Rebuild working with style versions.

**In React, Vue.js & VanillaJS applications:**
- instead using class "fusion-style-v1" in <body> tag you need to use CSS variable "--fu-style-version: 1" in root. for example
    ```
    :root { --fu-style-version: 1 }
    ```

**In angular application:**
- instead of using `STYLE_VERSION_TOKEN` injection token in app.module.ts, you need to use CSS variable "--fu-style-version: 1" in app.component.scss.  for example
    ```
    :root { --fu-style-version: 1 }
    ```

In case the CSS variable is don't set, will be used last style version #3.

**Changes in imports:**
- instead import colors and fonts SCSS style version V1 path `@ironsource/fusion-ui/style/vars/colors` (fonts) use `@ironsource/fusion-ui/style/v1/colors` (fonts)
- instead import colors and fonts SCSS  path `@ironsource/fusion-ui/style/vars/colors_v2` (fonts_v2)  use `@ironsource/fusion-ui/style/v2/colors` (fonts)
- compiled (CSS) style version V1 fonts `@ironsource/fusion-ui/style/fonts_v1` use `@ironsource/fusion-ui/style/v1/fonts`
- compiled (CSS) style version V2 fonts `@ironsource/fusion-ui/style/fonts` use `@ironsource/fusion-ui/style/v2/fonts`
- compiled (CSS) style version V2 grid `@ironsource/fusion-ui/style/grid` use `@ironsource/fusion-ui/style/v2/grid`

**New imports for style version 3:**
- compiled (CSS) fonts `@ironsource/fusion-ui/style/fonts` or `@ironsource/fusion-ui/style/v3/fonts`
- compiled (CSS) grid `@ironsource/fusion-ui/style/grid` or `@ironsource/fusion-ui/style/v3/grid`
- SCSS fonts and colors: `@ironsource/fusion-ui/style/v3/vars/vars`

**Now fusion-ui support mixed styles.**
For example if main application use style #3, but some components will need use with style #2, you will need add CSS variable `--fu-style-version: 2` to this component or component's holder.


### [2.0.3](https://github.com/ironSource/fusion-ui/compare/v2.0.2...v2.0.3) (2022-05-08)

### Bug Fixes

* **shared-entities:** append string pipes to shared entities declaration ([af81d9a](https://github.com/ironSource/fusion-ui/commit/af81d9ac7155b1a1cc6b17dfb876aeab31707b9f))

### [2.0.1](https://github.com/ironSource/fusion-ui/compare/v2.0.1-rc.1...v2.0.1) (2022-05-01)

## [2.0.0](https://github.com/ironSource/fusion-ui/compare/v2.0.0-rc.2...v2.0.0) (2022-04-10)


### Bug Fixes

* **dropdown-icon-fix:** fix icon value in drop

## [2.0.0](https://github.com/ironSource/fusion-ui/compare/v2.0.0-rc.2...v2.0.0) (2022-04-10)

### ⚠ BREAKING CHANGES

* **fu-328:** Split fusion-ui into multiple sub entries path to improve tree shaking capabilities
* **FU-328:** Split fusion-ui into multiple sub entries stable multi sub entries ([b2d07b9](https://github.com/ironSource/fusion-ui/commit/b2d07b9c2f7a8cd1d495177da0c2f8aad867680f))

### Bug Fixes

* support muti endpoint services and pipes ([066ef5d](https://github.com/ironSource/fusion-ui/commit/066ef5da9b023214483860a261a08a36d1295f30))

### [1.1.1-rc.1](https://github.com/ironSource/fusion-ui/compare/v1.1.1-rc.0...v1.1.1-rc.1) (2022-03-28)

### Bug Fixes

* multi entry point  support multiple entry points ([064bf43](https://github.com/ironSource/fusion-ui/commit/064bf43570ca42c5535a6e625bfb61ec41eb9c16))

### [1.1.1-rc.0](https://github.com/ironSource/fusion-ui/compare/v1.0.0...v1.1.1-rc.0) (2022-03-17)

## [1.1.0](https://github.com/ironSource/fusion-ui/compare/v1.1.0-rc.24...v1.1.0) (2022-03-08)

### Features

* **fu-320:** added possibility use html tags in notification content ([#36](https://github.com/ironSource/fusion-ui/issues/36)) ([b738be3](https://github.com/ironSource/fusion-ui/commit/b738be3bee3a11b3e5d5d67704367235e6c11116))
* **fu-319:** added new property searchByProperties?: string[] for TagsInputComponent ([#31](https://github.com/ironSource/fusion-ui/issues/31)) ([88fbcd2](https://github.com/ironSource/fusion-ui/commit/88fbcd216e6683b95b11d3101ce96bc6abd8717b))
* **fu-319:** bulk insertion with predefined tags and search by properties fixed ([6f575ce](https://github.com/ironSource/fusion-ui/commit/6f575ced317bf393ee61883270b59751250c3bd8))
* **fu-306:** fixed native component selector -listbox to -list-box ([52bbae8](https://github.com/ironSource/fusion-ui/commit/52bbae80904282df83f2abb8c3a19ae6970f911c))
* **fu-306:** fixed add css classes for native ([c8ced40](https://github.com/ironSource/fusion-ui/commit/c8ced4052671693ab1af3f60ed15179dd55690d6))
* **fu-316:** added new config prop for tags-input component - clearSearchOn ([#24](https://github.com/ironSource/fusion-ui/issues/24)) ([c11ebba](https://github.com/ironSource/fusion-ui/commit/c11ebbacae24dc19cd758f8a6b8810810c466236))
* **fu-312:** fixed select all placeholder for multi-select dropdown without apply button (footer) ([1d472b2](https://github.com/ironSource/fusion-ui/commit/1d472b2153945d82445d66d3128fef6acaeda67f))
* **fu-312:** tags-input component - added footer with tags selection clear, cancel and apply buttons ([15ad210](https://github.com/ironSource/fusion-ui/commit/15ad210ccdd4679b8aca86ee81550310417275fe))
* **fu-312:** added optional property "clickOutsideByCoordinates" to ClickOutsideDirective ([fec42f8](https://github.com/ironSource/fusion-ui/commit/fec42f8dcb0a07d7d504cf4cbdabc8f2b0a9b722))
* **fu-312:** chane body-max-line-length to 200 instead 100 ([b6c7253](https://github.com/ironSource/fusion-ui/commit/b6c7253c0d4540db9ef452d49710f01ca9242d2e))
* fix react, vue & native builds that caused by upgrading to angular 13 ([6ec0aed](https://github.com/ironSource/fusion-ui/commit/6ec0aedd501f572da5807feba517a1deee64524e))

### Bug Fixes

* **fu-312:** fixed select all placeholder for multi-select dropdown without apply button (footer) ([1d472b2](https://github.com/ironSource/fusion-ui/commit/1d472b2153945d82445d66d3128fef6acaeda67f))


### [1.0.3](https://github.com/ironSource/fusion-ui/compare/v1.0.3-rc.7...v1.0.3) (2022-01-26)

### Bug Fixes

* **fu-314:** mfe-fix remove imports from '@angular/platform-browser' ([b0acd0d](https://github.com/ironSource/fusion-ui/commit/b0acd0d25f1c093f95c2aef5088eaae6583eea5c))

### Features

* **fu-287:** refactored mfe configuration, added fusion-mfe project for mfe using
