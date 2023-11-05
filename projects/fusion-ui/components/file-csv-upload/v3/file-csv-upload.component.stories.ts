import {componentWrapperDecorator, Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {FileCsvUploadComponent, FileCsvUploadModule} from '@ironsource/fusion-ui/components/file-csv-upload';
import {FileDragAndDropState} from '@ironsource/fusion-ui/components/file-drag-and-drop';

const defaultFileState: FileDragAndDropState = {name: ''};

const meta: Meta<FileCsvUploadComponent> = {
    title: 'V3/Components/CSV File Uploader',
    component: FileCsvUploadComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), FileCsvUploadModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`A ***CSV file upload*** Angular component allows users to upload CSV (comma-separated values) files from their local computer or device to an Angular application.
                <br/><br/>**Basic Usage:**

\`<fusion-file-csv-upload class="small"
    [loading]="fileInUpload$ | async"
    [disabled]="fileUploadDisabled$ | async"
    [fileState]="fileState$ | async"
    (handleFiles)="onFilesSelected($event)"
    (replaceFile)="onFileReplace($event)"
    (deleteFile)="onFileDelete($event)"
></fusion-file-csv-upload>\`
`
            }
        }
    }
};
export default meta;
type CSVFileUploaderStory = StoryObj<FileCsvUploadComponent>;

export const BasicUsage: CSVFileUploaderStory = {
    args: {
        loading: false,
        disabled: false,
        fileState: defaultFileState
    },
    decorators: [componentWrapperDecorator(story => `<div style="width: 620px; height: 196px; display: block;">${story}</div>`)],
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { delay, finalize, takeUntil, tap } from 'rxjs/operators';

import { FileDragAndDropState } from '@ironsource/fusion-ui/components/file-drag-and-drop';
import { FileCsvUploadModule } from '@ironsource/fusion-ui/components/file-csv-upload';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`
  <div style="width: 620px; height: 196px; display: block">
      <fusion-file-csv-upload
          [loading]="fileInUpload$ | async"
          [disabled]="fileUploadDisabled$ | async"
          [fileState]="fileState$ | async"
          (handleFiles)="onFilesSelected($event)"
          (deleteFile)="onFileDelete($event)"
      ></fusion-file-csv-upload>
  </div>
  \`,
  standalone: true,
  imports: [CommonModule, FileCsvUploadModule],
})
export class FusionStoryWrapperComponent implements OnDestroy {
  fileInUpload$ = new BehaviorSubject(false);
  fileUploadDisabled$ = new BehaviorSubject(false);
  fileState$ = new BehaviorSubject<FileDragAndDropState>(null);

  private onDestroy$ = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onFilesSelected(files: FileList) {
    of(files.item(0))
      .pipe(
        takeUntil(this.onDestroy$),
        tap((file: File) => {
          this.fileInUpload$.next(true);
          this.fileState$.next({ name: file.name });
        }),
        delay(2000),
        finalize(() => {
          this.fileInUpload$.next(false);
        })
      )
      .subscribe(
        (file: File) => {
          this.fileState$.next({ name: file.name, state: 'success' });
        },
        (error) => {
          this.fileState$.next({
            ...this.fileState$.getValue(),
            state: 'error',
            message: error.errorMessage,
          });
        }
      );
  }

  onFileDelete($fileName: string) {
    this.fileInUpload$.next(true);
    setTimeout((_) => {
      this.fileInUpload$.next(false);
    }, 1000);
  }
}
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Disabled: CSVFileUploaderStory = {
    ...BasicUsage,
    args: {
        disabled: true,
        fileState: defaultFileState
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { delay, finalize, takeUntil, tap } from 'rxjs/operators';

import { FileDragAndDropState } from '@ironsource/fusion-ui/components/file-drag-and-drop';
import { FileCsvUploadModule } from '@ironsource/fusion-ui/components/file-csv-upload';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`
  <div style="width: 620px; height: 196px; display: block">
      <fusion-file-csv-upload
          [loading]="fileInUpload$ | async"
          [disabled]="fileUploadDisabled$ | async"
          [fileState]="fileState$ | async"
          (handleFiles)="onFilesSelected($event)"
          (deleteFile)="onFileDelete($event)"
      ></fusion-file-csv-upload>
  </div>
  \`,
  standalone: true,
  imports: [CommonModule, FileCsvUploadModule],
})
export class FusionStoryWrapperComponent implements OnDestroy {
  fileInUpload$ = new BehaviorSubject(false);
  fileUploadDisabled$ = new BehaviorSubject(true);
  fileState$ = new BehaviorSubject<FileDragAndDropState>(null);

  private onDestroy$ = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onFilesSelected(files: FileList) {
    of(files.item(0))
      .pipe(
        takeUntil(this.onDestroy$),
        tap((file: File) => {
          this.fileInUpload$.next(true);
          this.fileState$.next({ name: file.name });
        }),
        delay(2000),
        finalize(() => {
          this.fileInUpload$.next(false);
        })
      )
      .subscribe(
        (file: File) => {
          this.fileState$.next({ name: file.name, state: 'success' });
        },
        (error) => {
          this.fileState$.next({
            ...this.fileState$.getValue(),
            state: 'error',
            message: error.errorMessage,
          });
        }
      );
  }

  onFileDelete($fileName: string) {
    this.fileInUpload$.next(true);
    setTimeout((_) => {
      this.fileInUpload$.next(false);
    }, 1000);
  }
}
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Pending: CSVFileUploaderStory = {
    ...BasicUsage,
    args: {
        loading: true,
        fileState: defaultFileState
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { delay, finalize, takeUntil, tap } from 'rxjs/operators';

import { FileDragAndDropState } from '@ironsource/fusion-ui/components/file-drag-and-drop';
import { FileCsvUploadModule } from '@ironsource/fusion-ui/components/file-csv-upload';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`
  <div style="width: 620px; height: 196px; display: block">
      <fusion-file-csv-upload
          [loading]="fileInUpload$ | async"
          [disabled]="fileUploadDisabled$ | async"
          [fileState]="fileState$ | async"
          (handleFiles)="onFilesSelected($event)"
          (deleteFile)="onFileDelete($event)"
      ></fusion-file-csv-upload>
  </div>
  \`,
  standalone: true,
  imports: [CommonModule, FileCsvUploadModule],
})
export class FusionStoryWrapperComponent implements OnDestroy {
  fileInUpload$ = new BehaviorSubject(true);
  fileUploadDisabled$ = new BehaviorSubject(false);
  fileState$ = new BehaviorSubject<FileDragAndDropState>(null);

  private onDestroy$ = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onFilesSelected(files: FileList) {
    of(files.item(0))
      .pipe(
        takeUntil(this.onDestroy$),
        tap((file: File) => {
          this.fileInUpload$.next(true);
          this.fileState$.next({ name: file.name });
        }),
        delay(2000),
        finalize(() => {
          this.fileInUpload$.next(false);
        })
      )
      .subscribe(
        (file: File) => {
          this.fileState$.next({ name: file.name, state: 'success' });
        },
        (error) => {
          this.fileState$.next({
            ...this.fileState$.getValue(),
            state: 'error',
            message: error.errorMessage,
          });
        }
      );
  }

  onFileDelete($fileName: string) {
    this.fileInUpload$.next(true);
    setTimeout((_) => {
      this.fileInUpload$.next(false);
    }, 1000);
  }
}
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const CustomTitle: CSVFileUploaderStory = {
    ...BasicUsage,
    args: {
        title: 'Upload files',
        fileState: defaultFileState
    }
};

export const FilesUploadedSuccess: CSVFileUploaderStory = {
    ...BasicUsage,
    args: {
        fileState: {
            name: 'example.csv',
            state: 'success'
        } as FileDragAndDropState
    }
};

export const FilesUploadedError: CSVFileUploaderStory = {
    ...BasicUsage,
    args: {
        fileState: {
            name: 'example.csv',
            state: 'error',
            message: 'Invalid file format'
        } as FileDragAndDropState
    },
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { delay, finalize, takeUntil, tap } from 'rxjs/operators';

import { FileDragAndDropState } from '@ironsource/fusion-ui/components/file-drag-and-drop';
import { FileCsvUploadModule } from '@ironsource/fusion-ui/components/file-csv-upload';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`
  <div style="width: 620px; height: 196px; display: block">
      <fusion-file-csv-upload
          [loading]="fileInUpload$ | async"
          [disabled]="fileUploadDisabled$ | async"
          [fileState]="fileState$ | async"
          (handleFiles)="onFilesSelected($event)"
          (deleteFile)="onFileDelete($event)"
      ></fusion-file-csv-upload>
  </div>
  \`,
  standalone: true,
  imports: [CommonModule, FileCsvUploadModule],
})
export class FusionStoryWrapperComponent implements OnDestroy {
  fileInUpload$ = new BehaviorSubject(false);
  fileUploadDisabled$ = new BehaviorSubject(false);
  fileState$ = new BehaviorSubject<FileDragAndDropState>(null);

  private onDestroy$ = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onFilesSelected(files: FileList) {
    of(files.item(0))
      .pipe(
        takeUntil(this.onDestroy$),
        tap((file: File) => {
          this.fileInUpload$.next(true);
          this.fileState$.next({ name: file.name });
        }),
        delay(2000),
        finalize(() => {
          this.fileInUpload$.next(false);
        })
      )
      .subscribe(
        (file: File) => {
          this.fileState$.next({ name: file.name, state: 'error', message: 'Wrong file format'});
        },
        (error) => {
          this.fileState$.next({
            ...this.fileState$.getValue(),
            state: 'error',
            message: error.errorMessage,
          });
        }
      );
  }

  onFileDelete($fileName: string) {
    this.fileInUpload$.next(true);
    setTimeout((_) => {
      this.fileInUpload$.next(false);
    }, 1000);
  }
}
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const FilesUploadSelected: CSVFileUploaderStory = {
    ...BasicUsage,
    args: {
        fileState: {
            name: 'example.csv',
            state: 'selected'
        } as FileDragAndDropState
    }
};

export const SizeSmall: CSVFileUploaderStory = {
    ...BasicUsage,
    render: args => ({
        props: {...args, title: undefined},
        template: `<fusion-file-csv-upload class="small"
            [loading]="loading"
            [disabled]="disabled"
            [fileState]="fileState"
            [error]="error"
            [helper]="helper"
            [title]="title"
            (handleFiles)="onFilesSelected($event)"
            (deleteFile)="onFileDelete($event)"
        ></fusion-file-csv-upload>`
    })
};
