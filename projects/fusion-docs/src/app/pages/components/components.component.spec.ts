import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentsComponent} from './components.component';
import {RouterModule} from '@angular/router';

describe('ComponentsComponent', () => {
    let component: ComponentsComponent;
    let fixture: ComponentFixture<ComponentsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentsComponent],
            imports: [
                RouterModule.forRoot(
                    [
                        {
                            path: '',
                            component: ComponentsComponent,
                            children: []
                        }
                    ],
                    {relativeLinkResolution: 'legacy'}
                )
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
