import {Component, OnDestroy, OnInit} from '@angular/core';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {VersionService} from '../../../services/version/version.service';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {EntitiesListForTooltipConfig} from './components/ui/tooltiped-entities-table-cell/entities-list-for-tooltip/entities-list-for-tooltip.entities';
import {AdvEntityBase} from './components/ui/entities/adv-entity-base.interface';

@Component({
    selector: 'fusion-table-docs-v3',
    templateUrl: './table-docs-v3.component.html',
    styleUrls: ['./table-docs-v3.component.scss']
})
export class TableDocsV3Component implements OnInit, OnDestroy {
    onDestroy$ = new Subject();

    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    advEntity: AdvEntityBase = {
        id: 8404650,
        name: '123',
        icon: 'android',
        imageUrl:
            'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
    };

    entitiesListForTooltipConfig: EntitiesListForTooltipConfig = {
        entities: [
            {
                id: 8404650,
                name: '123',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8404656,
                name: '12343',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8366813,
                name: '1945',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_fc913695f99d0ecda07a49959e1a4b04_a447e7cd99c372f7b0d2f117ea424fbe.jpeg'
            },
            {
                id: 8357581,
                name: '1945',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_fc913695f99d0ecda07a49959e1a4b04_a447e7cd99c372f7b0d2f117ea424fbe.jpeg'
            },
            {
                id: 8381918,
                name: '1945-tes',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_fc913695f99d0ecda07a49959e1a4b04_a447e7cd99c372f7b0d2f117ea424fbe.jpeg'
            },
            {
                id: 8363871,
                name: '21111',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8404652,
                name: '2134',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_fc913695f99d0ecda07a49959e1a4b04_a447e7cd99c372f7b0d2f117ea424fbe.jpeg'
            },
            {
                id: 8358831,
                name: '4',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8373549,
                name: '4838',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8366809,
                name: '5newTestCampaign234',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8367829,
                name: '8BP',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_0af4e9d13ae09baad0e1371744e496eb_33229a9bbbe4a2ec774a05ff4a07f60d.jpeg'
            },
            {
                id: 8356827,
                name: 'AAA',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            },
            {
                id: 8362663,
                name: 'aaaaa',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_0af4e9d13ae09baad0e1371744e496eb_33229a9bbbe4a2ec774a05ff4a07f60d.jpeg'
            },
            {
                id: 8341157,
                name: 'Test campaign',
                icon: 'android',
                imageUrl:
                    'https://platform.ssacdn.com/demand-creatives/icons/icon_b641772fb9c0d33ab6c19b60f394509c_49ab746918e14e2ca380864bd12bb3fb.jpeg'
            }
        ],
        entityName: 'campaign',
        entitiesName: 'campaigns',
        labelPrefix: 'Affecting'
    };

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit(): void {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/table']);
            } else if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/table']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
