import {Tree} from '@angular-devkit/schematics';
import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('projects/fusion-schematics', () => {
    it('works', done => {
        const runner = new SchematicTestRunner('schematics', collectionPath);
        runner.runSchematicAsync('projects/fusion-schematics', {}, Tree.empty()).subscribe(tree => {
            expect(tree.files).toEqual([]);
            done();
        });
    });
});
