import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TableComponent} from './table.component';
import {TableLoadingComponent} from '../table-loading/table-loading.component';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TableEmptyComponent} from '../table-empty/table-empty.component';
import {TableRowComponent} from '../table-row/table-row.component';
import {TableGroupedComponent} from '../table-grouped/table-grouped.component';
import {TableBasicComponent} from '../table-basic/table-basic.component';
import {TableService} from '../table.service';
import {TableRowGroupedComponent} from '../table-row-grouped/table-row-grouped.component';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {TooltipService} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {LoadMoreModule} from '@ironsource/fusion-ui/directives/load-more';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {NotAvailableModule} from '@ironsource/fusion-ui/pipes/not-available';
import {Observable, of} from 'rxjs';

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return parseInt(Math.random().toString().replace('0.', ''), 10);
    }
}

const tblColumns: Array<any> = [
    {key: 'id', title: 'Id', sort: 'asc'}, // 'asc' | 'desc' | ''
    {key: 'name', title: 'Name', sort: ''},
    {key: 'username', title: 'Username', sort: ''},
    {key: 'email', title: 'Email', sort: ''},
    {key: 'website', title: 'Website'}
];

const tblRows: Array<any> = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net'
    }
];

const mockOptions: any = {sortingType: 'local'};

class MockTooltipService {
    showTooltip(tooltipData?: any) {}
    closeTooltip() {}
    getMouseHoverObservable(): Observable<MouseEvent> {
        return of({} as MouseEvent);
    }
    isElementVisible() {}
}

describe('Table Component', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    let sortClicked = false;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, InputModule, TooltipModule, LoadMoreModule, GenericPipeModule, NotAvailableModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [
                TableComponent,
                TableCellComponent,
                TableLoadingComponent,
                TableEmptyComponent,
                TableRowComponent,
                TableBasicComponent,
                TableGroupedComponent,
                TableRowGroupedComponent
            ],
            providers: [
                {provide: TooltipService, useClass: MockTooltipService},
                {provide: UniqueIdService, useClass: MockUniqueIdService},
                TableService,
                LogService
            ]
        });

        fixture = TestBed.createComponent(TableComponent);

        component = fixture.componentInstance;

        component.columns = [...tblColumns];
        component.rows = [...tblRows];
        component.options = {...mockOptions};

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('Must exist', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('Must have Table, Header elements', () => {
        fixture.detectChanges();

        expect(debugEl.query(By.css('table'))).toBeTruthy();

        expect(debugEl.query(By.css('table')).nativeElement.getAttribute('id')).toContain('isTable');

        expect(debugEl.query(By.css('thead'))).toBeTruthy();

        const elTitles = debugEl.queryAll(By.css('thead tr td'));

        expect(elTitles.length).toBe(tblColumns.length);

        elTitles.forEach((elem, idx) => {
            const ascIndex = sortClicked ? 1 : 0;
            if (idx === ascIndex) {
                expect(elem.nativeElement.classList).toContain('is-sort');
            }

            expect(elem.nativeElement.getAttribute('data-col-key')).toBe(tblColumns[idx].key.toString());
            expect(elem.nativeElement.innerText.trim()).toBe(tblColumns[idx].title.trim());
        });
    });

    it('Must render data elements', () => {
        fixture.detectChanges();
        expect(debugEl.query(By.css('tbody'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('tbody tr')).length).toBe(tblRows.length);
        expect(fixture.debugElement.queryAll(By.css('tbody tr td')).length).toBe(tblRows.length * tblColumns.length);
    });

    it('Must sort on click', () => {
        fixture.detectChanges();

        debugEl.query(By.css('thead tr td.is-sort.asc')).triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(debugEl.query(By.css('thead tr td:first-child')).nativeElement.classList).toContain('desc');

        debugEl.query(By.css('thead tr td:nth-child(2)')).triggerEventHandler('click', null);
        fixture.detectChanges();
        sortClicked = true;

        expect(debugEl.query(By.css('thead tr td:nth-child(2)')).nativeElement.classList).toContain('asc');
    });
});
